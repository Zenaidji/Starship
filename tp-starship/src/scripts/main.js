
// importation de l'instance de Game créée dans Game.js
import Game from './game.js';
import starship from './starship.js';
import mobile from './mobile';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    const canvas = document.getElementById("stars");
    const game=new Game(canvas);
    document.getElementById('nouvelleSoucoupe').addEventListener("click",() => game.addsaucer());
    document.activeElement.blur();
    game.moveAndDraw();
    window.addEventListener('keydown',game.KeydownactionHandler.bind(game));
   
    window.addEventListener('keyup',game.keyUpActionHandler.bind(game));
   
 
  
   
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
