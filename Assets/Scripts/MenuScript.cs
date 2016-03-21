using UnityEngine;

public class MenuScript : MonoBehaviour
{
	void OnGUI()
	{
		const int buttonWidth = 84;
		const int buttonHeight = 60;

		Rect buttonRect1 = new Rect(
			Screen.width / 4 - (buttonWidth / 2),
			(Screen.height / 4) - (buttonHeight / 2),
			buttonWidth,
			buttonHeight
		);
			
		if(GUI.Button(buttonRect1,"Start"))
		{
			Application.LoadLevel("Song1");
		}
			
		Rect buttonRect2 = new Rect(
			(3 * Screen.width / 4) - (buttonWidth / 2),
			(Screen.height / 4) - (buttonHeight / 2),
			buttonWidth,
			buttonHeight
		);

		// Draw a button to start the game
		if(GUI.Button(buttonRect2,"Quit"))
		{
			Application.Quit();
		}


	}
}