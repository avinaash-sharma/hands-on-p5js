const density = "avi na s h";
let asciiDiv;

// let uploadedImage;
let video;
// function preload(){
//   uploadedImage =  loadImage("name.jpg");
// }

function setup() {
  // put setup code here
  // createCanvas(350, 400);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(68, 48);
  asciiDiv = createDiv();
}
function draw(){ 
  // put drawing code here
  background(0);
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(251);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
  // image(uploadedImage,0,0,width,height);

  // let w = width / uploadedImage.width;
  // let h = height / uploadedImage.height;
  video.loadPixels();
  let asciiImage = "";
  for(let j = 0; j < video.height; j++){
    // let row='';
    
  for(let i = 0; i< video.width; i++){
        const pixelIndex = (i + j * video.width) * 4;
        // console.log("🚀 ~ file: sketch.js ~ line 27 ~ draw ~ pixelIndex", pixelIndex)
        
        const r = video.pixels[pixelIndex + 0];
        const g = video.pixels[pixelIndex + 1];
        const b = video.pixels[pixelIndex + 2];
        const average = (r+g+b)/3;
        // noStroke();
        colorMode(HSB, 255);
        // let valueGiven = brightness(density); 
        // fill(255);
        // square(i * w, j * h, w);
        
        const lengthOfDensity = density.length;
        const charIndex = floor(map(average, 0,255,lengthOfDensity,0));
        const valueHolder = density.charAt(charIndex);
        // if(valueHolder == ' ') row += '&nbsp;'
        // else row += valueHolder;
        if(valueHolder == ' ') asciiImage += '&nbsp;'
        else asciiImage += valueHolder;

        textSize(90);
        // textAlign(CENTER,CENTER)
        // text("charIndex",i * w + w, j * h * 0.5);
        
    }
    asciiImage += '</br>';
    // createDiv(row)
    // console.log(row)
    
  }
 asciiDiv.html(asciiImage);




}