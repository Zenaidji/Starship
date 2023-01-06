

export default class mobile{
    static MOBILE_WIDTH =48;

    constructor(x,y,dx=0,dy=0,src){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.src=src;
    this.image=this.createImage(src);
    
    
        }


    
      
      draw(context){
          context.drawImage(this.image,this.x,this.y);
      }
     

      move(canv){
        let cy=canv.height;
        let  cx=canv.width;
        if (this.x+mobile.MOBILE_WIDTH >=cx || this.x<0){
            this.dx=-this.dx;
        }
        if (this.y+mobile.MOBILE_WIDTH >=cy || this.y<0){
            this.dy=-this.dy;
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        }

      createImage(src){
        const image=new Image();
        image.src=this.src;
        image.width=mobile.MOBILE_WIDTH;
        return image;
        }
 


    } 
