#pragma strict
var Redobject : GameObject;
var Blueobject : GameObject;
var Greenobject : GameObject;
var Yellowobject : GameObject;


private var leftClickedObject : GameObject;
private var rightClickedObject : GameObject;
private var frontmostRaycastHit : RaycastHit2D;

// It's necessary to access the SpriteRenderer of a game object to be able to access its sorting layer ID 
// and sorting order ("Order in Layer" in the inspector)
private var spriteRenderer : SpriteRenderer;


function Start () {   
}

function Update () {
// 	Instantiate(Redobject, transform.position + Vector3(-1,4,0), Quaternion.Euler(0,0,0));
//	Instantiate(Blueobject, transform.position + Vector3(0,4,0), Quaternion.Euler(0,0,0));
//	Instantiate(Greenobject, transform.position + Vector3(1,4,0), Quaternion.Euler(0,0,0));
//	Instantiate(Yellowobject, transform.position + Vector3(2,4,0), Quaternion.Euler(0,0,0));  
}