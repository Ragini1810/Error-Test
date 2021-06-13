var dog1img
var dog1


function preload() {

hallway = loadImage("Images/Hallway.jpg")
livingRoom = loadImage("Images/LivingRoom.png")
kitchen = loadImage("Images/Kitchen.jpg")
bathroom = loadImage("Images/Bathroom.webp")
bedroom1 = loadImage("Images/Bedroom1.jpg")
bedroom2 = loadImage("Images/Bedroom2.jpg")
bedroom3 = loadImage("Images/Bedroom3.jpg")
dog1img = loadImage ("Images/Labrador10.png")
cat = loadImage("Images/Cat.png")
mouse = loadImage("Images/Mouse.png")


}

function setup() {
  createCanvas(1300, 650);
dog1 = createSprite(650,600)
dog1.addImage(dog1img)
}

function draw() {
  background(hallway);

 

  drawSprites();

}