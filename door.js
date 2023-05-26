image="";
status=""
function preload(){
    img=loadImage('IMG_6921.jpeg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detetcting Objects";
}
function modelLoaded(){
    console.log("Model Is Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
        console.log(results);
}