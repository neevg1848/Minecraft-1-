var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var blockHeight = 30;
var blockWidth = 30;

var player_object = "";
var block_object = "";


function playerUpdate(){
   fabric.Image.fromURl("player.png", function(Img){
       player_object = Img;
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({
           left: player_x,
           top: player_y
       });

       canvas.add(player_object);
   }); 
}


function blockUpdate(getImage){
    fabric.Image.fromUrl(getImage, function(Img){
        block_object = Img;
        block_object.scaleToWidth(blockWidth);
        block_object.scaleToHeight(blockHeight);
        block_object.set({
           left: player_x,
           top: player_y
       });

       canvas.add(block_object);
    })
}