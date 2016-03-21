#pragma strict
var Redobject : GameObject;
var Blueobject : GameObject;
var Greenobject : GameObject;
var Yellowobject : GameObject;

function Start () {

}

function Update () {
	Instantiate(Redobject, transform.position + Vector3(-1,4,0), Quaternion.Euler(0,0,0));
	Instantiate(Blueobject, transform.position + Vector3(0,4,0), Quaternion.Euler(0,0,0));
	Instantiate(Greenobject, transform.position + Vector3(1,4,0), Quaternion.Euler(0,0,0));
	Instantiate(Yellowobject, transform.position + Vector3(2,4,0), Quaternion.Euler(0,0,0));
}