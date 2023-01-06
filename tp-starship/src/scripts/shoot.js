import mobile from './mobile';
import src from'../assets/images/tir.png';
import Game from './game';
import saucer from './saucer';
export default class shoot extends mobile{
    constructor(x,y){
        super(x+mobile.MOBILE_WIDTH,y,8,0,src);
    }
    

    collisionWith(m){
        let a1x= this.x;
        let a1y=this.y;
        let a2x=a1x+mobile.MOBILE_WIDTH;
        let a2y=a1y+mobile.MOBILE_WIDTH;
        let o1x=m.x;
        let o1y=m.y;
        let o2x=o1x+mobile.MOBILE_WIDTH;
        let o2y=o1y+mobile.MOBILE_WIDTH;
        let p1x=Math.max(a1x,o1x);
        let p1y=Math.max(a1y,o1y);
        let p2x=Math.min(a2x,o2x);
        let p2y=Math.min(a2y,o2y);
        return (p1x<p2x & p1y<p2y);
    }



 

 move(canv){
    
    if(this.x<canv.width){
       this.x+=this.dx;
    }

    
}

 
 
 
 collision(secoupes){
 secoupes.forEach(e => {
     if(this.collisionWith(e))
    {
        
     document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)+200;
     e.movedown();
    }
    
    });
 }





 asCollision(sausers){
    return sausers.some(elt=>this.collisionWith(elt))
}






}
