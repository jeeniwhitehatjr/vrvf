noseX=0;
noseY=0;
difference=0;
rwristX=0;
lwristX=0;
function setup(){
    video =createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550,550);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotresult);
}
function draw(){
    background("#00f7ff");

    document.getElementById("square_side").innerHTML = "width and height of a square will be ="+ difference +"px";
    fill('#a600ff');
    stroke('#a600ff');
    square(noseX, noseY, difference);
}

    function modelLoaded(){
        console.log('poseNet is Initialized!');
    }

    function gotresult(result){
        if(result.length > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
         console.log("noseX = " + noseX+"noseY = "+ noseY);

        lwristX=result[0].pose.leftWrist.x;
        rwristx=result[0].pose.rightWrist.x;
        difference = floor(lwristX - rwristX);

        console.log("leftWrirstX = " + lwristX + " rightWristX = " + rwristX + "difference = " + difference);

    }
    }
