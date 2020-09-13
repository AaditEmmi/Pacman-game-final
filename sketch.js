var Pacman,  Ghost1, Ghost2, Ghost3;
var PacmanImage, FootballImage, Ghost1Image, Ghost2Image , Ghost3Image ;
var GameState;
var PlayState = 1;
var ENDState = 0;
GameState = PlayState;
var footballgroup1,footballgroup2,footballgroup3;

var score = 0;

function preload(){
PacmanImage = loadImage("images/Pacman (2).jpg");
FootballImage = loadImage("images/Football.png");
Ghost1Image = loadImage("images/Ghost_1.png");
Ghost2Image = loadImage("images/Ghost_2.png");
Ghost3Image = loadImage("images/Ghost_3.jpg");

}

function setup() {
   createCanvas(800,400);
   Pacman = createSprite(100,300,80,90);
   Pacman.addImage(PacmanImage);
   Pacman.scale = 0.4;
   Ghost1 = createSprite(100,380,60,80);
   Ghost1.addImage(Ghost1Image);
   Ghost1.scale = 0.2;
   Ghost2 = createSprite(155,165,70,80);
   Ghost2.addImage(Ghost2Image);
   Ghost2.scale = 0.15;
   Ghost3 = createSprite(135,120,50,40);
   Ghost3.addImage(Ghost3Image);
   Ghost3.scale = 0.15;

    footballgroup1 = new Group();
    footballgroup2 = new Group();
    footballgroup3 = new Group();

 
}

function draw() {
  background(255,255,255);  

  Ghost1.velocityX = Math.round(random(-2,4));
  Ghost1.velocityY = Math.round(random(-3,-1));

  Ghost2.velocityX = Math.round(random(-2,3));
  Ghost2.velocityY = Math.round(random(-2,2));

  Ghost3.velocityX = Math.round(random(-2,3));
  Ghost3.velocityY = Math.round(random(-2,2));

  if(keyDown("up")){
    Pacman.velocityY = -1;
    Pacman.velocityX = 0;
  }

  if(keyDown("down")){
    Pacman.velocityY = 1;
    Pacman.velocityX = 0;
  }


  if(keyDown("left")){
    Pacman.velocityY = 0;
    Pacman.velocityX = -1;
  }
  
  if(keyDown("right")){
    Pacman.velocityX = 1;
    Pacman.velocityY = 0;
  }

  if(Pacman.isTouching(Ghost1) || Pacman.isTouching(Ghost2) || Pacman.isTouching(Ghost3)){

    text("Your Pacman got caught!! ",200,370);

    text("Your Score :" + score, 200,350);

    Pacman.velocityX = 0;
    Pacman.velocityY = 0;

    Ghost1.velocityX = 0;
    Ghost1.velocityX = 0;

    Ghost2.velocityX = 0;
    Ghost2.velocityY = 0;
    
    Ghost3.velocityX = 0;
    Ghost3.velocityY = 0; 
  
  }
   

    if(footballgroup1.isTouching(Pacman)){
      //increase score 
      //destroy football group
      
      score = score + 5;
      footballgroup1.removeSprites();

    }
    if(footballgroup2.isTouching(Pacman)){
      // increase score
      // destory football group 
      
      score = score + 5;
      footballgroup2.removeSprites();
      
    }
    if (footballgroup3.isTouching(Pacman)){
      // increase score
      // destory football group 

      score = score + 5 ;
      footballgroup3.removeSprites();
      
    }
    
    

    text("Score: " + score, 20,30);

  spawnFootballs();
  

  drawSprites();

}

function spawnFootballs(){
  if (frameCount % 60 === 0){
   var Football1 = createSprite(400,100,60,50);
    Football1.addImage(FootballImage);
    Football1.scale =  0.15;
    Football1.velocityX = -3; 

    footballgroup1.add(Football1);
    
    var Football2 = createSprite(450,200,60,50);
    Football2.addImage(FootballImage);
    Football2.scale = 0.15;
    Football2.velocityX = -3;
    
    footballgroup2.add(Football2);
    
    var Football3 = createSprite(500,300,60,50);
    Football3.addImage(FootballImage);
    Football3.scale = 0.15;
    Football3.velocityX = -3;

    footballgroup3.add(Football3);

  }
}


