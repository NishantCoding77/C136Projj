status = "";
video = "";


function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocoSSD',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectName = document.getElementById("inputbox").value;


}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;

}

function draw(){
    image(video,0,0,380,380);
}