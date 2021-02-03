//p5 .js is horrible and doesn't want the loadSound to actually WORK, lterally everything else is fine
lWrist=""
song="";
function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);

  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    lWrist = results[0].pose.leftWrist.y;
    rWrist = results[0].pose.righttWrist.y;
  }
}
function preload(){
  song =  loadSound("music.mp3")
}
function play(){
  if(lWrist>200){
  song.play()
  song.setVolume(1)
  song.rate(1)}
  if(rWrist>200){
    song.play()
    song.setVolume(1)
    song.rate(1.5)
  }
}

