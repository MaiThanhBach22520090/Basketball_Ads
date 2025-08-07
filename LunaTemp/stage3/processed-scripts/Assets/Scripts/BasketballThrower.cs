using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BasketballThrower : MonoBehaviour
{
    [Header("Throwing Settings")]
    public Transform hoopTargetPoint;
    public float throwForceMultiplier = 1f;

    [Header("Trajectory Control (Tune these!)")]
    public float minApexHeightOffset = 2f;
    public float maxApexHeightOffset = 5f;
    public float horizontalAimScale = 0.005f;

    [Header("Move/Flick Detection")]
    public float dragSpeedThreshold = 100f;
    public float moveSpeed = 50f;
    public float dragSpeedCheckInterval = 0.1f; // How often to check drag speed for flick detection

    private GameObject activeBasketball;
    private Vector2 touchStartScreenPos; // Stores the screen position where the drag started
    private Vector3 initialBallScreenOffset; // Offset of the ball's world position from the click's world position
    private bool isDragging = false;
    private bool isFlicking = false;
    private float dragStartTime;

    private float dragSpeedCheckTimer;
    private Vector2 lastDragSpeedCheckPos; // Used for calculating drag speed over an interval

    void Start()
    {
        if (hoopTargetPoint == null)
        {
            Debug.LogError("BasketballThrower: HoopTargetPoint not assigned! Please assign it in the Inspector.");
            enabled = false;
        }
    }

    void Update()
    {
        // Detect mouse/touch down
        if (Input.GetMouseButtonDown(0))
        {
            OnClickStarted();
        }
        // Detect mouse/touch up
        else if (Input.GetMouseButtonUp(0))
        {
            OnClickCanceled();
        }

        // If currently dragging a ball
        if (isDragging && activeBasketball != null)
        {
            Vector2 currentPointerScreenPos = Input.mousePosition; // Get current mouse/touch position

            // --- Check Drag Speed at a Fixed Interval ---
            dragSpeedCheckTimer += Time.deltaTime;
            if (dragSpeedCheckTimer >= dragSpeedCheckInterval)
            {
                float dragDistance = (currentPointerScreenPos - lastDragSpeedCheckPos).magnitude;
                float dragSpeed = dragDistance / dragSpeedCheckInterval;

                if (dragSpeed > dragSpeedThreshold)
                {
                    isFlicking = true;
                    Debug.Log($"Flick detected! Speed: {dragSpeed}");
                }

                dragSpeedCheckTimer = 0f;
                lastDragSpeedCheckPos = currentPointerScreenPos;
            }

            // If not yet flicking (still in slow move mode)
            if (!isFlicking)
            {
                // Calculate target world position for the ball based on mouse position
                // We use the ball's initial Z-depth in screen space to keep it at a consistent distance from the camera
                Vector3 targetScreenPos = new Vector3(currentPointerScreenPos.x, currentPointerScreenPos.y, Camera.main.WorldToScreenPoint(activeBasketball.transform.position).z);
                Vector3 targetWorldPos = Camera.main.ScreenToWorldPoint(targetScreenPos);

                // Apply the initial offset so the ball doesn't jump to the exact mouse cursor center
                activeBasketball.transform.position = Vector3.Lerp(activeBasketball.transform.position, targetWorldPos + initialBallScreenOffset, moveSpeed * Time.deltaTime);

                // Ensure the ball remains kinematic during slow movement
                Rigidbody rb = activeBasketball.GetComponent<Rigidbody>();
                if (rb != null && !rb.isKinematic)
                {
                    rb.isKinematic = true;
                    rb.velocity = Vector3.zero;
                    rb.angularVelocity = Vector3.zero;
                    Debug.Log($"Set {activeBasketball.name} to kinematic for move.");
                }
            }
            // If it has transitioned to flicking, we stop moving it with the mouse
            // and wait for the release to calculate the throw.
        }
    }

    private void OnClickStarted()
    {
        Vector2 pointerScreenPos = Input.mousePosition;
        Ray ray = Camera.main.ScreenPointToRay(pointerScreenPos);
        RaycastHit hit;

        // Check if the ray hits a GameObject that has a 'Ball' component
        if (Physics.Raycast(ray, out hit) && hit.collider.GetComponent<Ball>() != null)
        {
            GameObject hitBall = hit.collider.gameObject;
            Rigidbody hitBallRb = hitBall.GetComponent<Rigidbody>();

            // Only allow dragging if the hit ball has a Rigidbody and is currently kinematic
            if (hitBallRb != null) // Ensure it's kinematic to be picked up
            {
                activeBasketball = hitBall;
                hitBallRb.isKinematic = true; // Ensure it stays kinematic while dragging
                touchStartScreenPos = pointerScreenPos;
                dragStartTime = Time.time;
                isDragging = true;
                isFlicking = false;

                // Calculate initial offset to maintain the ball's relative position to the click point
                Vector3 clickWorldPos = Camera.main.ScreenToWorldPoint(new Vector3(pointerScreenPos.x, pointerScreenPos.y, Camera.main.WorldToScreenPoint(activeBasketball.transform.position).z));
                initialBallScreenOffset = activeBasketball.transform.position - clickWorldPos;

                dragSpeedCheckTimer = 0f;
                lastDragSpeedCheckPos = pointerScreenPos;

                Debug.Log($"Started dragging {activeBasketball.name}. isDragging: {isDragging}, isKinematic: {hitBallRb.isKinematic}");
            }
            else
            {
                Debug.Log($"Clicked {hitBall.name} but it's not ready to be thrown (IsKinematic: {hitBallRb.isKinematic}).");
            }
        }
        else
        {
            Debug.Log("Raycast did not hit a basketball.");
        }
    }

    private void OnClickCanceled()
    {
        // Only proceed if a drag was actually in progress
        if (isDragging && activeBasketball != null && hoopTargetPoint != null)
        {
            Vector2 pointerEndPos = Input.mousePosition;
            Vector2 flickVector = pointerEndPos - touchStartScreenPos;

            if (isFlicking)
            {
                // Calculate flick magnitude and normalize vertical component for apex height
                float flickMagnitude = flickVector.magnitude;
                // Ensure flickMagnitude is not zero to avoid division by zero
                float normalizedFlickY = flickVector.y / Mathf.Max(1f, flickMagnitude);
                float clampedNormalizedFlickY = Mathf.Clamp01(normalizedFlickY);

                Rigidbody rb = activeBasketball.GetComponent<Rigidbody>();
                if (rb != null)
                {
                    rb.isKinematic = false; // Re-enable physics for throwing

                    float desiredApexHeight = hoopTargetPoint.position.y + Mathf.Lerp(minApexHeightOffset, maxApexHeightOffset, clampedNormalizedFlickY);
                    Vector3 currentBallPosition = activeBasketball.transform.position;
                    Vector3 targetPoint = hoopTargetPoint.position;

                    Vector3 horizontalOffset = Camera.main.transform.right * (flickVector.x * horizontalAimScale);
                    targetPoint += horizontalOffset;

                    Vector3 initialVelocity = CalculateLaunchVelocity(currentBallPosition, targetPoint, desiredApexHeight);
                    ThrowBall(initialVelocity);
                    Debug.Log($"Throwing ball after flick: {activeBasketball.name}");
                }
            }
            else // If it was a slow move, just release the ball without force
            {
                Rigidbody rb = activeBasketball.GetComponent<Rigidbody>();
                if (rb != null)
                {
                    rb.isKinematic = false; // Re-enable physics so it falls/rolls naturally
                    rb.velocity = Vector3.zero; // Clear any residual velocity
                    rb.angularVelocity = Vector3.zero;
                }
                Debug.Log($"Ball released after slow move: {activeBasketball.name}");
            }
        }

        // Reset all flags and references
        isDragging = false;
        isFlicking = false;
        activeBasketball = null;
    }

    /// <summary>
    /// Calculates the initial velocity required to launch an object from startPoint
    /// to targetPoint, ensuring it reaches a specific peakHeight.
    /// </summary>
    /// <param name="startPoint">The starting position of the projectile.</param>
    /// <param name="targetPoint">The desired target position.</param>
    /// <param name="peakHeight">The desired maximum height (apex) of the trajectory.</param>
    /// <returns>The initial velocity vector needed for the trajectory.</returns>
    private Vector3 CalculateLaunchVelocity([Bridge.Ref] Vector3 startPoint, [Bridge.Ref] Vector3 targetPoint, float peakHeight)
    {
        float gravity = Physics.gravity.magnitude;
        Vector3 displacement = targetPoint - startPoint;
        Vector3 horizontalDisplacement = new Vector3(displacement.x, 0, displacement.z);
        float horizontalDistance = horizontalDisplacement.magnitude;

        float initialVy = Mathf.Sqrt(2 * gravity * Mathf.Max(0, peakHeight - startPoint.y));
        float timeToApex = initialVy / gravity;
        float timePeakToTarget = Mathf.Sqrt(2 * Mathf.Max(0, peakHeight - targetPoint.y) / gravity);
        float totalTime = timeToApex + timePeakToTarget;
        if (totalTime < 0.001f) totalTime = 0.001f;

        Vector3 horizontalVelocity = horizontalDisplacement / totalTime;
        return new Vector3(horizontalVelocity.x, initialVy, horizontalVelocity.z);
    }

    void ThrowBall([Bridge.Ref] Vector3 initialVelocity)
    {
        if (activeBasketball != null)
        {
            Rigidbody rb = activeBasketball.GetComponent<Rigidbody>();
            if (rb != null)
            {
                rb.velocity = Vector3.zero; // Clear any existing velocity before applying new one
                rb.angularVelocity = Vector3.zero; // Clear angular velocity
                rb.AddForce(initialVelocity * throwForceMultiplier, ForceMode.VelocityChange); // Use AddForce with VelocityChange for direct velocity setting
                Debug.Log($"Ball thrown! Applied Velocity: {rb.velocity}");
            }
        }
    }
}
