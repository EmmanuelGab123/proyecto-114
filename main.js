var nose_x = 0
var nose_y = 0
function preload(){
    imagen = loadImage('https://i.postimg.cc/T33r6S4h/lentesitos.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nose_x,nose_y,20);
    image(imagen,nose_x,nose_y,70,70);
}
function take_snapshot(){
    save("Tu_recuerdo_en_RobloxCity.png");
}
//classifier = ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log("Modelo cargado");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nose_x = results[0].pose.nose.x-35;
        nose_y = results[0].pose.nose.y-45;
    }
}