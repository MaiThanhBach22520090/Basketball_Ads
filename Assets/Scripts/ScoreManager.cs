// ScoreManager.cs
using UnityEngine;
using System;
using TMPro; // For Action events

public class ScoreManager : MonoBehaviour
{
    // Singleton pattern for easy access from other scripts
    public static ScoreManager Instance { get; private set; }

    public int NormalScore { get; private set; }
    public int PerfectScore { get; private set; }
    public int TotalScore => NormalScore + PerfectScore * 3; // Calculated total score

    public TextMeshPro normalScoreText; // Reference to UI text for normal score
    public TextMeshPro perfectScoreText; // Reference to UI text for perfect score
    public TextMeshPro totalScoreText; // Reference to UI text for total score
    public Animation perfectDunkAnimation; // Animation to play when score changes
    public ParticleSystem perfectDunkParticle; // Particle system for perfect dunk effect

    const string PERFECT_DUNK_NOTIFICATION = "Perfect Dunk Animation"; // Key for PlayerPrefs

    // Event for UI and other systems to subscribe to when total score changes
    public event Action<int> OnTotalScoreChanged;

    [Header("Dunk Point Values")]
    public int normalDunkPoints = 1;
    public int perfectDunkPoints = 1; // Example: 3 points for a perfect dunk

    void Awake()
    {
        // Implement Singleton pattern
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        // For playable ads, you typically don't need DontDestroyOnLoad
        // DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        // Initialize scores and trigger event for total score
        NormalScore = 0;
        PerfectScore = 0;
        OnTotalScoreChanged?.Invoke(TotalScore);
    }

    public void AddNormalDunkScore()
    {
        NormalScore += normalDunkPoints;
        OnTotalScoreChanged?.Invoke(TotalScore); // Notify subscribers of total score change
        Debug.Log($"Normal Dunk! Normal Score: {NormalScore}, Total Score: {TotalScore}");
        if (normalScoreText != null)
        {
            normalScoreText.text = NormalScore.ToString();
            totalScoreText.text = TotalScore.ToString();
        }
    }

    public void AddPerfectDunkScore()
    {
        PerfectScore += perfectDunkPoints;
        OnTotalScoreChanged?.Invoke(TotalScore); // Notify subscribers of total score change
        Debug.Log($"Perfect Dunk! Perfect Score: {PerfectScore}, Total Score: {TotalScore}");
        if (perfectScoreText != null)
        {
            perfectScoreText.text = PerfectScore.ToString();
            totalScoreText.text = TotalScore.ToString();
        }
        // Play score animation if assigned
        if (perfectDunkAnimation != null)
        {
            //scoreAnimation.Play(PERFECT_DUNK_NOTIFICATION);

            perfectDunkAnimation.Play(); // Play the score animation
        }

        // Play particle effect for perfect dunk if assigned
        if (perfectDunkParticle != null)
        {
            perfectDunkParticle.Play();
        }
    }

    public void ResetCurrentScore()
    {
        NormalScore = 0;
        PerfectScore = 0;
        OnTotalScoreChanged?.Invoke(TotalScore); // Notify subscribers
        Debug.Log("Current score reset. Total Score: 0");
    }

    // Removed LoadHighScore, SaveHighScore, ClearHighScore as per request for playable ads
}