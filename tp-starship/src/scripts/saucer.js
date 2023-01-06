import mobile from './mobile';
import src from'../assets/images/flyingSaucer-petit.png';
export default class saucer extends mobile{
constructor(x,y){
    super(x,y,-3,0,src);



}


move(canv){
    
    if(this.x+mobile.MOBILE_WIDTH>0){
       this.x+=this.dx;
    }
    if(this.x<=0){
 document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)-1000;
    }  
}


   
    
    



movedown(){

    this.x=0;
    this.y+=3;
}

}
