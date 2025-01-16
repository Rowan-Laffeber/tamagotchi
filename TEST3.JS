// start of Deadeye regen
const DeadeyeRegen_WIDTH = 130;
const DeadeyeRegen_HEIGHT = 130;
const DeadeyeRegen_BORDER_WIDTH = 0;
const DeadeyeRegen_SPACING_WIDTH = 0;

function DeadeyeRegenPositionToImage(DeadeyeRegenRow, DeadeyeRegenCol) {
    return {
        x: (
            DeadeyeRegen_BORDER_WIDTH +
            DeadeyeRegenCol * (DeadeyeRegen_SPACING_WIDTH + DeadeyeRegen_WIDTH)
        ),
        y: (
            DeadeyeRegen_BORDER_WIDTH +
            DeadeyeRegenRow * (DeadeyeRegen_SPACING_WIDTH + DeadeyeRegen_HEIGHT)
        )
    }
}

var DeadeyeRegenCanvas = document.getElementById('deadeye-regen');
var DeadeyeRegenContext = DeadeyeRegenCanvas.getContext('2d');

var DeadeyeRegenImage = new Image();
DeadeyeRegenImage.src = "assets/img/regen-levels/regen-level0-32.png";
DeadeyeRegenImage.crossOrigin = true;
DeadeyeRegenCanvas.width = DeadeyeRegen_WIDTH;
DeadeyeRegenCanvas.height = DeadeyeRegen_HEIGHT;

var DeadeyeRegenRow = 0;
var DeadeyeRegenCol = 0;
function animateDeadeyeRegen() {
    // once we hit the end of a row,
    // move to the next
    if (DeadeyeRegenCol === 6) {
        DeadeyeRegenCol = 0;
        DeadeyeRegenRow += 1;
    }
    // once we finish the last row,
    // start again
    if (DeadeyeRegenRow === 5) {
        if (DeadeyeRegenCol === 3){
            DeadeyeRegenRow = 0;
            DeadeyeRegenCol = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = DeadeyeRegenPositionToImage(DeadeyeRegenRow, DeadeyeRegenCol);
    DeadeyeRegenContext.clearRect(
        0,
        0,
        DeadeyeRegenCanvas.width,
        DeadeyeRegenCanvas.height
    );
    DeadeyeRegenContext.drawImage(
        DeadeyeRegenImage,
        position.x,
        position.y,
        DeadeyeRegen_WIDTH,
        DeadeyeRegen_HEIGHT,
        0,
        0,
        DeadeyeRegen_WIDTH,
        DeadeyeRegen_HEIGHT
    );
    DeadeyeRegenCol += 1;
}

DeadeyeRegenImage.onload = function() {
    // animateDeadeyeRegen();
    setInterval(animateDeadeyeRegen, 500);
};
// end of Deadeye regen