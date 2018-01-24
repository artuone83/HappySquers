let myCanvas;
let myCanvasContext;
let rectLeftX = 100;
let rectLeftXspeed = 10;
let rectRightX = 750;
let rectRightXspeed = 5;






window.onload = function(){
      myCanvas = document.getElementById("my-canvas");
      myCanvasContext = myCanvas.getContext("2d");


  setInterval(function(){
      moveRectRightX()
      moveRectLeftX();
      drowRects();
  }, 100);

}
function drowRects(){
  myCanvasContext.fillStyle = "green";
  myCanvasContext.fillRect(100,100,myCanvas.width, myCanvas.height);

  //rect left
  myCanvasContext.fillStyle = "#ccc";
  myCanvasContext.fillRect(rectLeftX,(myCanvas.height/2)+25,50,50);

  //rect right
  myCanvasContext.fillStyle = "purple";
  myCanvasContext.fillRect(rectRightX,(myCanvas.height/2)+25,50,50);

  // rect top
  myCanvasContext.fillStyle = "#4286f4";
  myCanvasContext.fillRect(myCanvas.width/2+25,100,50,50)

  //rect bottom
  myCanvasContext.fillStyle = "yellow";
  myCanvasContext.fillRect(myCanvas.width/2+25,(myCanvas.height) - 50,50,50)
}
function moveRectLeftX() {
  rectLeftX += rectLeftXspeed;
  if(rectLeftX > myCanvas.width-50){
    rectLeftXspeed = -rectLeftXspeed;
  }else if(rectLeftX < 101){
    rectLeftXspeed = -rectLeftXspeed;
  }

}
function moveRectRightX() {
  rectRightX -= rectRightXspeed;
  if(rectRightX > myCanvas.width-50){
    rectRightXspeed = -rectRightXspeed;
  }else if(rectRightX < 101){
    rectRightXspeed = -rectRightXspeed;
  }

}
