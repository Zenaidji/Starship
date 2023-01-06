import starship from './starship.js';
import mobile from'./mobile';
import saucer from './saucer';
import shoot from './shoot';

export default class Game {




    constructor(canvas){
        this.canvas=canvas;
        this.context=this.canvas.getContext('2d');
        this.starship=new starship(40,this.canvas.height/2);
         this.secoupes=new Array();
         this.shoots=Array();
         this.request=null;

    }



    addsaucer() {
    const secoupe=new saucer(this.canvas.width,this.alea(this.canvas.height-mobile.MOBILE_WIDTH));
        this.secoupes.push(secoupe);

    }

    addshoot() {
        const tir =new shoot(this.starship.x,this.starship.y+15);
            this.shoots.push(tir);
    
        }




    alea(n) {
        return Math.floor(n*Math.random()+1);
       }


    moveAndDraw (){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        //faire bouger le vessau
        this.starship.move(this.canvas);
        this.starship.draw(this.context);
        //changer les positions des secoupes
        this.shoots.forEach(e => {e.move(this.canvas);});
        this.secoupes.forEach(e => e.move(this.canvas));
        //metre à jour le score et verfier les collision
        this.shoots.forEach(e=>(e.collision(this.secoupes)));
          //faire disparaitre les tire qui entre en collision avec une secoupes
        this.shoots=this.shoots.filter(e =>!(e.asCollision(this.secoupes)));
        //faire disparaitre les secoupes qui sort du canvas
        this.secoupes=this.secoupes.filter(e =>e.x>0 && e.y < this.canvas.height);
        this.secoupes.forEach(e => e.draw(this.context));
        this.shoots.forEach(e => e.draw(this.context));
       
                    /**
        this.shoots.forEach(e=> { 
            e.move(this.canvas);
            e.draw(this.context);
         });**/

        
         this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));


       
       
       
    }
       KeydownactionHandler(event){
           switch (event.key){
           case "ArrowUp":
           case  "Up":
               this.starship.moveUp();
               break;
            case " ":
            case "spacebar":
                this.addshoot();
                break;

           case "ArrowDown":
           case  "Down":
               this.starship.moveDown();
               break;
            
            default: return;
    
           }
           event.preventDefault(); 
    
       }

       keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowDown":
            case "Down":
            case "ArrowUp":
            case "Up":
            
                this.starship.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();



    }
    


       
        
    

}



