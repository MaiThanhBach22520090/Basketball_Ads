using UnityEngine;

public class UIManager : MonoBehaviour
{
    public GameObject BallSelectMenu;
    public GameObject BallSelectButton;

    public void Start()
    {
        if (BallSelectMenu != null) BallSelectMenu.SetActive(false);
        if (BallSelectButton != null) BallSelectButton.SetActive(true);
    }

    public void ShowBallSellectMenu()
    {
        BallSelectMenu.SetActive(true);
        BallSelectButton.SetActive(false);
    }

    public void HideBallSelectMenu()
    {
        BallSelectMenu.SetActive(false);
        BallSelectButton.SetActive(true);
    }
}
