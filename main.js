var model_load;


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#your_webcam");

function take_picture(){
Webcam.snap(function(picture_storage){
document.getElementById("your_picture").innerHTML = "<img id='actual_picture' src = '"+ picture_storage+"'>";
});
}

console.log("ml5 version:", ml5.version);


model_load = ml5.imageClassifier("https://storage.googleapis.com/tm-model/2yuz97DCk/model.json", model_loaded);

function model_loaded(){
    console.log("Wow it worked");
}