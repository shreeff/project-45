var player
var playerImage 
var coinGroup;
var coinImage;  
function preload(){
playerImage = loadAnimation("images/player_2.png","images/player_3.png","images/player_4.png");
coinImage = loadImage("images/coins.png");
}



function setup() 
{
  createCanvas(600,600);
  player = createSprite(300,300)
  player.addAnimation("player_running",playerImage)
  coinGroup = new Group();



}

function draw() 
{
background(51);

drawSprites();
handleCoins();
}
function handleCoins(){

var coin = createSprite(250,50);
coin.addImage(coinImage)
coinGroup.add(coin)

}
