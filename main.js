var canvas=new fabric.Canvas("myCanvas");
 player_x=10;
 player_y=10;

 block_w=30;
 block_h=30;

 player_img="";
 block_img="";

 function showboy(){
     fabric.Image.fromURL("player.png",function(Img){
         player_img=Img;

         player_img.scaleToWidth(150);
         player_img.scaleToHeight(140);
         player_img.set({
             top:player_y,
             left:player_x,
         });
         canvas.add(player_img);
     });
 }

 function showblock(getimg){
    fabric.Image.fromURL(getimg,function(Img){
        block_img=Img;

        block_img.scaleToWidth(block_w);
        block_img.scaleToHeight(block_h);
        block_img.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_img);
    });
}

window.addEventListener("keydown",Key_down);
function Key_down(e){
    key_code=e.keyCode;
    console.log(key_code);
    
    if(key_code=="65"){
        console.log("a");
        showblock("cloud.jpg");    
    }

    if(key_code=="66"){
        console.log("b");
        showblock("dark_green.png");
    }

    if(key_code=="67"){
        console.log("c");
        showblock("ground.png");
    }

    if(key_code=="68"){
        console.log("d");
        showblock("light_green.png");
    }

    if(key_code=="69"){
        console.log("e");
        showblock("roof.jpg");
    }

    if(key_code=="70"){
        console.log("f");
        showblock("trunk.jpg");
    }

    if(key_code=="71"){
        console.log("g");
        showblock("unique.png");
    }

    if(key_code=="72"){
        console.log("h");
        showblock("wall.jpg");
    }
    if(key_code=="73"){
        console.log("i");
        showblock("yellow_wall.png");
    }

    if(key_code=="187" && e.shiftKey==true){
        console.log("plus");
        block_h=block_h+10;
        block_w=block_w+10;
        document.getElementById("Width").innerHTML=block_w;
        document.getElementById("Height").innerHTML=block_h;
    }

    if(key_code=="189" && e.shiftKey==true){
        console.log("minus");
        block_h=block_h-10;
        block_w=block_w-10;
        document.getElementById("Width").innerHTML=block_w;
        document.getElementById("Height").innerHTML=block_h;
    }

    if(key_code=="38"){
        console.log("up");
        up();
    }

    if(key_code=="40"){
        console.log("down");
        down();
    }

    if(key_code=="37"){
        console.log("left");
        left();
    }

    if(key_code=="39"){
       console.log("right");
       right();
    }
    
}

function up(){
  if(player_y>0){
    player_y=player_y-block_h;
 canvas.remove(player_img);
 showboy();
 }
}

function down(){
    if(player_y<500){
      player_y=player_y+block_h;
   canvas.remove(player_img);
   showboy();
   }
  }

  function left(){
    if(player_x>0){
      player_x=player_x-block_w;
   canvas.remove(player_img);
   showboy();
   }
  }

  function right(){
    if(player_x<900){
      player_x=player_x+block_w;
   canvas.remove(player_img);
   showboy();
   }
  }