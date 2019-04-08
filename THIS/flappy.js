function startGame(){
    myGameArea.start();
    myGamePiece = new component(40,40,blue,10,120);
}
 var myGameArea={
     canvas:document.createElement("canvas"),
     start:function(){
         this.canvas.width=500;
         this.canvas.height=500;
         this.context=this.canvas.getContext("2d");
         document.body.insertBefore(this.canvas, document.body.childNodes[0]);

     }
 }

 var myGamePiece;
 function component(width,height,color,x,y){
     this.width=width;
     this.height=height;
     this.color=color;
     this.x=x;
     this.y=y;
     ctx.context=myGameArea.context;
     ctx.fillStyle=color;
     ctx.fillRect=(this.x,this.y,this.width,this.height);
 }