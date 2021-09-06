var officeImage, officeSprite;
var sherlockImage,sherlockSprite;
var telephoneImage, telephoneSprite;
var buttonSprite, buttonImage;
var textBoxSprite, textBoxImage;
var phoneRingSprite, phoneRingImage;

function preload(){

  officeImage = loadImage("images/office.jpeg");
  sherlockImage = loadImage("images/William Gillette - Wikipedia (1).png");
  telephoneImage = loadImage("images/telephone.png");
  buttonImage = loadImage("images/button.png");
  textBoxImage = loadImage("images/text box.png");
  phoneRingImage = loadImage("images/phoneRing.png");
}

function setup(){

  createCanvas(1001, 800);
  officeSprite = createSprite(width/2, height/2, width, height);
  officeSprite.addImage("office", officeImage);
  officeSprite.scale = 1.18;

  sherlockSprite = createSprite(945, 500);
  sherlockSprite.addImage("sherlock", sherlockImage);
  sherlockSprite.scale = 1;

  telephoneSprite = createSprite(450, 405);
  telephoneSprite.addImage("telephone", telephoneImage);
  telephoneSprite.scale = 0.09;

  buttonSprite = createSprite(940, 80);
  buttonSprite.addImage("button", buttonImage);
  buttonSprite.scale = 0.2;

  textBoxSprite = createSprite(width/2, 200);
  textBoxSprite.addImage("text", textBoxImage);
  textBoxSprite.scale = 0.8;

  phoneRingSprite = createSprite(width/2 - 145, 190);
  phoneRingSprite.addImage("phone", phoneRingImage);
  phoneRingSprite.scale = 0.3;
}

function draw(){

  background("black");
  
    
  
  if(mousePressedOver(buttonSprite)){

   destroySprites();
  }










  drawSprites();
  textSize(15);
  fill("white");
  text("speaker : ", textBoxSprite.x - 55, textBoxSprite.y - 25);

  text("hello, i am diana and i am talking", textBoxSprite.x - 65, textBoxSprite.y + 2);
  text("from manchesters lane.", textBoxSprite.x - 65, textBoxSprite.y + 20);
  text("There is a murder in my neighbour...", textBoxSprite.x - 75, textBoxSprite.y + 40);
  text("hhh..house no. 3", textBoxSprite.x - 75, textBoxSprite.y + 60);
}

function destroySprites(){


  officeSprite.destroy();
  sherlockSprite.destroy();
  telephoneSprite.destroy();
  buttonSprite.destroy();
  textBoxSprite.destroy();
  text.destroy();
  phoneRingSprite.destroy();


}