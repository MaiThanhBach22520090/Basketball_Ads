using UnityEngine;

public class Ball : MonoBehaviour
{
    // This script acts as a marker to identify basketballs
    // and now also handles notifying the ScoreManager of a score.

    private bool isPerfectDunk = true;
    private int triggerCount = 0;

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.GetComponent<DunkTrigger>())
        {
            triggerCount++;
        }

        if (triggerCount >= 2)
        {
            if (isPerfectDunk)
            {
                AddPerfectScore();
            }
            else
            {
                AddNormalScore();
            }
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.GetComponent<Floor>())
        {
            ResetState();
        }

        if (collision.gameObject.GetComponent<Ring>())
        {
            isPerfectDunk = false;
        }
    }

    public void AddNormalScore()
    {
        if (ScoreManager.Instance != null)
        {
            ScoreManager.Instance.AddNormalDunkScore();
        }
        else
        {
            Debug.LogWarning("ScoreManager.Instance is null. Cannot add normal score.");
        }
    }

    public void AddPerfectScore()
    {
        if (ScoreManager.Instance != null)
        {
            ScoreManager.Instance.AddPerfectDunkScore();
        }
        else
        {
            Debug.LogWarning("ScoreManager.Instance is null. Cannot add perfect score.");
        }
    }

    public void ResetState()
    {
        isPerfectDunk = true;
        triggerCount = 0;
    }
}
