import s from'../assets/images/vaisseau-ballon-petit.png';
import mobile from'./mobile';
const MoveState = {  NONE : 1, UP : 2, DOWN : 3};
export default class starship extends mobile{


constructor(x,y){
    super(x,y,0,8,s);
    
    this.mooving=MoveState.NONE;
    
    
}




getup(){
    return this.mooving==MoveState.UP; 
}
getdown(){
    return  this.mooving==MoveState.DOWN; 

}
moveUp(){
    this.mooving=MoveState.UP;
    this.dy=-Math.abs(this.dy);
}
moveDown(){
    this.mooving=MoveState.DOWN;
    this.dy= + Math.abs(this.dy);
}

stopMoving(){

    this.mooving=MoveState.NONE;
}




move(canv) {     

    if (this.getup()) {
      this.y = Math.max(0, this.y + this.dy);
      
    }
    if (this.getdown()) {
      this.y = Math.min(canv.height - mobile.MOBILE_WIDTH, this.y + this.dy);
    
      

    }
  }



     
    
     
  
      
      



}
