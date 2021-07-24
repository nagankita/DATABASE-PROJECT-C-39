//Create variables here
var food;
function preload()
{
	//load images here
  dogHappy=loadImage("images/dogImg1.png")
  dogSad=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  database.ref('food').on("value",readPosition)

  dog=createSprite(400,400,50,50)
  dog.addImage(dogSad)
  dog.scale=0.4
}


function draw() {  
background(0)
  drawSprites();
  //add styles here
textSize(20)
text("food remaining:" +food,300,200)
text("press up arrow key, to feed the dog",100,50)

if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.4
}
if(keyWentDown(UP_ARROW)){
  food--
  writeStock(food);
}
}
function readPosition(data){
  food=data.val()

}

function writeStock(data){
database.ref('/').update({
  food:data
})
}
