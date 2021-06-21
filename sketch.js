var gamestate = "wait"




function preload(){

bucket = loadImage("images/bucket.jpeg");
chair = loadImage("images/chair.jpg");
chest = loadImage("images/chest.png");
coat = loadImage("images/coat.jpeg");
fan = loadImage("images/fan.jpeg");
giant1 = loadImage("images/giant1.jpeg");
giant2 = loadImage("images/giant2.jpeg");
glove = loadImage("images/glove.png");
mat = loadImage("images/mat.jpeg");
monster1 = loadImage("images/monster1.png");
monster2 = loadImage("images/monster2.png");
pencil = loadImage("images/pencil.png");
pillow = loadImage("images/pillow.jpeg");
pirate1 = loadImage("images/pirate1.jpeg");
pirate2 = loadImage("images/pirate2.jpeg");
pirate3 = loadImage("images/pirate3.jpeg");
sandcastle = loadImage("images/sandcastle.jpeg");
scarf = loadImage("images/scarf.jpeg");
starfish = loadImage("images/starfish.jpeg");
sunglass = loadImage("images/sunglass.png");
teddybear = loadImage("images/teddybear.png");
vase = loadImage("images/vase.jpeg");
cave2 = loadImage("images/cave2.jpeg");
diamond = loadImage("images/diamond.jpeg");
sound1 = loadSound("success.mp3");
cave3 = loadImage("images/cave.jpeg");
star = loadImage("images/star.jpeg");
sound2 = loadSound("winning.wav")
}

function setup(){

createCanvas(1500,800);
bucket1 = createSprite(random(200,1300), random(200,600),10,10);
bucket1.addImage(bucket);
bucket1.scale = 0.3;

chair1 = createSprite(random(200,1300), random(200,600),10,10);
chair1.addImage(chair);
chair1.scale=0.1;

chest1 = createSprite(random(200,1300), random(200,600),10,10);
chest1.addImage(chest);
chest1.scale = 0.2

coat1 = createSprite(random(200,1300), random(200,600),10,10);
coat1.addImage(coat);
coat1.scale = 0.1

fan1= createSprite(random(200,1300), random(200,600),10,10);
fan1.addImage(fan);
fan1.scale =0.3

giant3= createSprite(random(200,1300), random(200,600),10,10);
giant3.addImage(giant1);
giant3.scale = 0.4;


giant4= createSprite(random(200,1300), random(200,600),10,10);
giant4.addImage(giant2);
giant4.scale = 0.3

glove1= createSprite(random(200,1300), random(200,600),10,10);
glove1.addImage(glove);
glove1.scale = 0.1;

mat1= createSprite(random(200,1300), random(200,600),10,10);
mat1.addImage(mat);
mat1.scale =0.1

monster3= createSprite(random(200,1300), random(200,600),10,10);
monster3.addImage(monster1);
monster3.scale = 0.05;

monster4= createSprite(random(200,1300), random(200,600),10,10);
monster4.addImage(monster2);
monster4.scale =0.1;

pencil1= createSprite(random(200,1300), random(200,600),10,10);
pencil1.addImage(pencil);
pencil1.scale = 0.3;

pillow1= createSprite(random(200,1300), random(200,600),10,10);
pillow1.addImage(pillow);
pillow1.scale = 0.1;

pirate4= createSprite(random(200,1300), random(200,600),10,10);
pirate4.addImage(pirate1);
pirate4.scale = 0.1;

pirate5= createSprite(random(200,1300), random(200,600),10,10);
pirate5.addImage(pirate2);
pirate5.scale = 0.3;

pirate6= createSprite(random(200,1300), random(200,600),10,10);
pirate6.addImage(pirate3);
pirate6.scale = 0.1;

sandcastle1= createSprite(random(200,1300), random(200,600),10,10);
sandcastle1.addImage(sandcastle);
sandcastle1.scale = 0.1;

scarf1= createSprite(random(200,1300), random(200,600),10,10);
scarf1.addImage(scarf);
scarf1.scale = 0.3;

starfish1= createSprite(random(200,1300), random(200,600),10,10);
starfish1.addImage(starfish);
starfish1.scale = 0.3;

sunglass1= createSprite(random(200,1300), random(200,600),10,10);
sunglass1.addImage(sunglass);
sunglass1.scale = 0.3;

teddybear1= createSprite(random(200,1300), random(200,600),10,10);
teddybear1.addImage(teddybear);
teddybear1.scale = 0.2;

vase1= createSprite(random(200,1300), random(200,600),10,10);
vase1.addImage(vase);
vase1.scale = 0.3;

diamond1 = createSprite(600,50,10,10);
diamond1.addImage(diamond);
diamond1.scale = 0.3;
diamond1.visible = false;

diamond2 = createSprite(800,50,10,10);
diamond2.addImage(diamond);
diamond2.scale = 0.3;
diamond2.visible = false;

diamond3 = createSprite(1000,50,10,10);
diamond3.addImage(diamond);
diamond3.scale = 0.3;
diamond3.visible = false;
}

function draw(){
if(gamestate==="wait"){

background(cave3);
textSize(30);
fill("white");
text("HIDDEN TREASURE",700, 70);
text("*Find These Objects*", 700, 150);
image(chest,800,300,50,50);
image(giant1, 800, 400,50,50 );
image(giant2,800,500,50,50);
text("PRESS SPACE TO START!", 600,700);

if(keyDown("space")){
gamestate = "play";
}

}



if(gamestate==="end"){

background(star)
fill("white")
text("-by Sannyukta Biradar!", 800, 500, 10, 10);
image(diamond,600,300,100,100);
image(diamond,800,300,100,100);
image(diamond,1000,300,100,100);
sound2.play();

}


if(gamestate==="play"){

    background(cave2);

if(mousePressedOver(chest1)){
diamond1.visible = true;
sound1.play()
}

if(mousePressedOver(giant3)){
diamond2.visible = true;
sound1.play()
}
if(mousePressedOver(giant4)){
diamond3.visible = true;
sound1.play()
}

if(diamond1.visible===true&& diamond2.visible === true && diamond3.visible === true){
gamestate = "end";
}



drawSprites()

}



}