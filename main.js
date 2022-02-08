//c-116 starts here

noseX=0;
noseY=0;




function preload(){
clown_nose=loadImage('https://i.postimg.cc/QC38h9F0/clown-nose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function modelLoaded(){
    console.log("Model Loaded!!!");
}
function gotPose(result){
if(result.length>0){
console.log(result);
console.log("Nose x="+result[0].pose.nose.x);
console.log("Nose y="+result[0].pose.nose.y);
noseX=result[0].pose.nose.x-15;
noseY=result[0].pose.nose.y-15;
}
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
save("myclownSelfie.png");
}


