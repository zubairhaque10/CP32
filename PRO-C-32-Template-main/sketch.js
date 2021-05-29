const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png"
var hour;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12)
    { text("Time : "+ hour%12 + " PM", 50,100);
 }
 else if(hour==0){ text("Time : 12 AM",100,100);
 }
 else{ text("Time : "+ hour%12 + " AM", 50,100);
 }
}

    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
         var responseJSON = await response.json()
         var datetime = responseJSON.datetime
         var hour = datetime.slice(11,13)
    
         if(hour >= 05 && hour <= 07){
         bg = "sunrise1.png";
         }
         else if(hour >= 07 && hour <= 09){
            bg = "sunrise2.png";  
         }
         else if(hour >= 09 && hour <= 11){
         bg = "sunrise3.png";  
      }
      else if(hour >= 11 && hour <= 13){
        bg = "sunrise4.png";  
     }
     else if(hour >= 13 && hour <=15){
        bg = "sunrise5.png";  
     }
     else if(hour >= 15 && hour <= 17){
        bg = "sunrise6.png";  
     }
     else if(hour >= 17 && hour <= 19){
        bg = "sunset1.png";  
     }
     else if(hour >= 19 && hour <= 21){
        bg = "sunset2.png";  
     }
     else if(hour >= 21 && hour <= 23){
        bg = "sunset3.png";  
     }
     else if(hour >= 23 && hour <= 01){
        bg = "sunset4.png";  
     }
     else if(hour >= 01 && hour <= 03){
        bg = "sunset5.png";  
     }
     else if(hour >= 03 && hour <= 05){
        bg = "sunset6.png";  
     }



         backgroundImg = loadImage(bg)
         console.log(backgroundImg)
        
    }