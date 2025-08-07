using System.Collections.Generic;
using UnityEngine;

public class BallManager : MonoBehaviour
{
    [Header("Ball Setup")]
    public Transform BallListPivot;
    public List<Transform> BallList = new List<Transform>();
    public float radius = 5f;

    [Header("Scroll Settings")]
    public float scrollSensitivity = 0.2f;
    public float inertia = 5f;
    public float snapSmoothTime = 0.2f;

    [Header("Visuals")]
    public GameObject highlightor;
    public List<GameObject> playBalls;

    private float angle = 0f;
    private float velocity = 0f;
    private float snapVelocity = 0f;
    private bool dragging = false;
    private Vector2 lastInputPos;
    private GameObject currentBall;

    private void Start()
    {
        if (highlightor) highlightor.SetActive(false);
    }

    private void Update()
    {
        HandleInput();

        if (!dragging)
        {
            if (Mathf.Abs(velocity) > 1f)
            {
                // Apply momentum
                angle -= velocity * Time.deltaTime;
                velocity = Mathf.Lerp(velocity, 0f, Time.deltaTime * inertia);

                if (highlightor) highlightor.SetActive(false);
            }
            else
            {
                // Snap to nearest ball smoothly
                float segmentAngle = 360f / BallList.Count;
                float nearestIndex = Mathf.Round(angle / segmentAngle);
                float targetAngle = nearestIndex * segmentAngle;
                angle = Mathf.SmoothDampAngle(angle, targetAngle, ref snapVelocity, snapSmoothTime);

                // Show highlight
                if (highlightor && !highlightor.activeSelf)
                {
                    highlightor.SetActive(true);
                    highlightor.GetComponent<Animation>().Play("Select HighLight");
                }

                UpdateCurrentBall();
            }
        }

        angle = NormalizeAngle(angle);
        BallListPivot.localRotation = Quaternion.Euler(0f, angle, 0f);
    }

    private void HandleInput()
    {
        if (Input.GetMouseButton(0))
        {
            Vector2 current = Input.mousePosition;

            if (!dragging)
            {
                lastInputPos = current;
                dragging = true;
                velocity = 0f;
            }

            float deltaX = current.x - lastInputPos.x;
            angle -= deltaX * scrollSensitivity;
            velocity = deltaX * scrollSensitivity / Time.deltaTime;
            lastInputPos = current;
        }
        else
        {
            dragging = false;
        }
    }

    private float NormalizeAngle(float a)
    {
        a %= 360f;
        if (a < 0f) a += 360f;
        return a;
    }

    private void UpdateCurrentBall()
    {
        float minDistance = float.MaxValue;
        GameObject closest = null;

        foreach (var ball in BallList)
        {
            float dist = Vector3.Distance(ball.position, highlightor.transform.position);
            if (dist < minDistance)
            {
                minDistance = dist;
                closest = ball.gameObject;
            }
        }

        if (closest != null && currentBall != closest)
        {
            currentBall = closest;
        }
    }

    public void SetMaterial()
    {
        if (currentBall == null) return;

        Material mat = currentBall.GetComponent<Renderer>().material;

        foreach (var obj in playBalls)
        {
            obj.GetComponent<Renderer>().material = mat;
        }
    }
}
