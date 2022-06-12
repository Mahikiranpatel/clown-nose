 noseX=0;
 noseY=0;

 img="";

function preload(){
img=loadImage("clown-nose-png-12.png");
}

function setup(){
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modaloed);
poseNet.on('pose',getresult);


}


function draw(){


image(video,0,0,350,300);
image(img,noseX,noseY,30,30);
}

function modaloed(){
    console.log('Posenet is Initialized')
}

function getresult(results){
    if(results.length>0){

        console.log(results);
        console.log('nose x ='+results[0].pose.nose.x);
        console.log('nose y ='+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
    }
}
