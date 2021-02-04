var dog, happyDog, database, foodS, foodStock , position;
var dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");  
 
  
}


function setup(){
    createCanvas(500,500);
    database= firebase.database();
    dog = createSprite(450,300,50,50);
    dog.addImage(dogImg.png);
    dog.scale=0.5  ;
     foodStock =  database.ref('food');
    foodStock.on("value",readStock)
}

function draw(){
    background("lightblue");
    
   
    if(keyWentDown(UP_ARROW)){
        
       WriteStock(foodS)
       dog.addImage(happyDog);   
    }
    

   
    
    drawSprites();
    textSize(25);
    fill("black");
    text("food remaining:"+ foodS,170,80);
    text("press UP_ARROW key to feed the dog!" ,170 , 120 )
    
}

function WriteStock(x){
   database.ref("/").update({
       food:x
   })
}
function readStock(data){
    foodS = data.val();
    
}




