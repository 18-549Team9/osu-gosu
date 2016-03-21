#pragma strict

function Start () {

}

function Update() {
 Debug.Log("derp");
}

function OnMouseDown(){
  Debug.Log("Sprite Clicked");
  Destroy(gameObject);
}