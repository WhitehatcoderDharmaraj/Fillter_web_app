nose_x=0;
nose_y=0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/YSY5GF7F/download.p');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

nose_x=results[0].pose.nose.x-10;
nose_y=results[0].pose.nose.y-5;
console.log("nose x = "+nose_x+" and nose y = "+nose_y)
    }
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function draw(){
image(video,0,0,300,300);
/*fill("red");
stroke("red");
circle(nose_x,nose_y,20);*/
image(clown_nose,nose_x,nose_y,20,20);
}

function action(){
save('myfilterimage.png');
}