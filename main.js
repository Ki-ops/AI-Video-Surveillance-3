video=""
status=""
objects=[]

function preload(){
video=createVideo("video.mp4")
video.hide();
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
}



function getresults(error,results){
if(error){
    console.log(error)
}

else
{console.log(results)
objects=results
}

}

function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:Detecting Objects"
}

function modelLoaded(){
    status=true;
    video.loop();
    video.speed(1)
    video.volume(0)
    

}
function draw(){
    image(video,0,0,480,380);
    if(status != ""){
        objectDetector.detect(video,getresults)
        for(i=0;i<objects.length;i++){
            console.log("objects detected")
    document.getElementById("status").innerHTML="Status:Objects Detected"
    
    document.getElementById("number_of_objects").innerHTML="Number of Objects Detected are: "+objects.length;
    fill("black")
    text(objects[i].label,objects[i].x+20,objects[i].y+20)
    noFill()
    stroke("black")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    }