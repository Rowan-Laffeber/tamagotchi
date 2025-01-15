var hunger = 32;
var eatcounter = 0;

hunger_timer()
function hunger_timer(){
    var teller_fuction_hunger = setInterval(function () {
        hunger--;
        document.getElementById("countdown1").innerText = 'hunger ' + hunger;
        if (hunger <= 0) {
            clearInterval(teller_fuction_hunger);
            document.getElementById("countdown1").innerText = "you are dead";
        }
        // else if (hunger < 51){
        //     document.getElementById("speech-bubble").style.display = "block";
        // }else{
        //     document.getElementById("speech-bubble").style.display = "none";
        // }
    }, 1000);
}

function eat() {
    if(hunger > 32){
        hunger = hunger
    } else if (hunger > 30){
        hunger = 32
    } else {
        hunger = hunger + 2
    }
    eatcounter = eatcounter + 1;
    console.log(eatcounter);
    if(eatcounter >= 5){
        animate();
        eatcounter = 0;
    }
    
    document.getElementById("countdown1").innerText = 'hunger ' + hunger;
    hunger_timer()
}



const SPRITE_WIDTH = 130;
const SPRITE_HEIGHT = 130;
const BORDER_WIDTH = 0;
const SPACING_WIDTH = 0;

function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}
var canvas = document
            .getElementById('sprite-levels');
var context = canvas
              .getContext('2d');

var spriteSheetURL = 'assets/img/levels/levels.png';
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

var row = 0;
var col = 0;
function animate() {
    // once we hit the end of a row,
    // move to the next
    if (col === 3) {
        col = 0;
        row += 1;
    }
    // once we finish the last row,
    // start again
    if (row === 2) {
        if (col === 2){
        row = 0;
        col = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = spritePositionToImagePosition(row, col);
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    col += 1;
}

image.onload = function() {
    animate();
};