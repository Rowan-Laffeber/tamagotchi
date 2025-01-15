// start of hunger
var hunger = 32;
hunger_timer();
var eatcounter = 0;
var healthlevel = 1;

function eat() {
    if(hunger > 32){
        hunger = hunger;
    } else if (hunger > 30){
        hunger = 32;
    } else {
        hunger = hunger + 2;
    }
    eatcounter = eatcounter + 1;
    console.log(eatcounter);
    if(eatcounter >= 5){
        healthlevel = healthlevel + 1;
        eatcounter = 0;
        if (healthlevel > 8){
            healthlevel = 8;
        }else {
            animate();
            console.log('next health level');
        }
        console.log('healthlevel = ' + healthlevel);
    }
    document.getElementById("countdown1").innerText = 'hunger ' + hunger;
    hunger_timer();
}
function hunger_timer(){
    clearInterval(teller_fuction_hunger);
    var teller_fuction_hunger = setInterval(function () {
        hunger--;
        document.getElementById("countdown1").innerText = 'hunger ' + hunger;
        if (hunger <= 0) {
            clearInterval(teller_fuction_hunger);
            document.getElementById("countdown1").innerText = "you are dead";
        }
        else if (hunger < 16){
            document.getElementById("speech-bubble").style.display = "block";
        }else{
            document.getElementById("speech-bubble").style.display = "none";
        }
    }, 1000);
}

// const SPRITE_WIDTH = 130;
// const SPRITE_HEIGHT = 130;
// const BORDER_WIDTH = 0;
// const SPACING_WIDTH = 0;

// function spritePositionToImagePosition(row, col) {
//     return {
//         x: (
//             BORDER_WIDTH +
//             col * (SPACING_WIDTH + SPRITE_WIDTH)
//         ),
//         y: (
//             BORDER_WIDTH +
//             row * (SPACING_WIDTH + SPRITE_HEIGHT)
//         )
//     }
// }

// var canvas = document
//             .getElementById('hunger-level');
// var context = canvas
//               .getContext('2d');

// var spriteSheetURL = 'assets/img/levels/levels.png';
// var image = new Image();
// image.src = spriteSheetURL;
// image.crossOrigin = true;

// var row = 0;
// var col = 0;
// function animate() {
//     // once we hit the end of a row,
//     // move to the next
//     if (col === 3) {
//         col = 0;
//         row += 1;
//     }
//     // once we finish the last row,
//     // start again
//     if (row === 2) {
//         if (col === 2){
//         row = 0;
//         col = 0;
//         }
//     }
    
//     // make an image position using the 
//     // current row and colum
//     var position = spritePositionToImagePosition(row, col);
//     context.clearRect(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//     );
//     context.drawImage(
//         image,
//         position.x,
//         position.y,
//         SPRITE_WIDTH,
//         SPRITE_HEIGHT,
//         0,
//         0,
//         SPRITE_WIDTH,
//         SPRITE_HEIGHT
//     );
//     col += 1;
// }

// image.onload = function() {
//     animate();
// };
// end of hunger
// start of energy
var energy = 32;
energy_timer();
var sleepcounter = 0;
var energylevel = 1;

function sleep() {
    if(energy > 32){
        energy = energy;
    } else if (energy > 30){
        energy = 32;
    } else {
        energy = energy + 2;
    }
    sleepcounter = sleepcounter + 1;
    console.log(sleepcounter);
    if(sleepcounter >= 5){
        energylevel = energylevel + 1;
        sleepcounter = 0;
        if (energylevel > 8){
            energylevel = 8;
        } else {
            animate();
            console.log('next energy level');
        }
        console.log('energylevel = ' + energylevel);
    }
    document.getElementById("countdown2").innerText = 'energy ' + energy;
    energy_timer();
}
function energy_timer(){
    clearInterval(teller_fuction_energy);
    var teller_fuction_energy = setInterval(function () {
        energy--;
        document.getElementById("countdown2").innerText = 'energy ' + energy;
        if (energy <= 0) {
            clearInterval(teller_fuction_energy);
            document.getElementById("countdown2").innerText = "you are dead";
        }
    }, 3000);
}
// const SPRITE_WIDTH = 130;
// const SPRITE_HEIGHT = 130;
// const BORDER_WIDTH = 0;
// const SPACING_WIDTH = 0;

// function spritePositionToImagePosition(row, col) {
//     return {
//         x: (
//             BORDER_WIDTH +
//             col * (SPACING_WIDTH + SPRITE_WIDTH)
//         ),
//         y: (
//             BORDER_WIDTH +
//             row * (SPACING_WIDTH + SPRITE_HEIGHT)
//         )
//     }
// }

// var canvas = document
//             .getElementById('energy-level');
// var context = canvas
//               .getContext('2d');

// var spriteSheetURL = 'assets/img/levels/levels.png';
// var image = new Image();
// image.src = spriteSheetURL;
// image.crossOrigin = true;

// var row = 0;
// var col = 0;
// function animate() {
//     // once we hit the end of a row,
//     // move to the next
//     if (col === 3) {
//         col = 0;
//         row += 1;
//     }
//     // once we finish the last row,
//     // start again
//     if (row === 2) {
//         if (col === 2){
//         row = 0;
//         col = 0;
//         }
//     }
    
//     // make an image position using the 
//     // current row and colum
//     var position = spritePositionToImagePosition(row, col);
//     context.clearRect(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//     );
//     context.drawImage(
//         image,
//         position.x,
//         position.y,
//         SPRITE_WIDTH,
//         SPRITE_HEIGHT,
//         0,
//         0,
//         SPRITE_WIDTH,
//         SPRITE_HEIGHT
//     );
//     col += 1;
// }

// image.onload = function() {
//     animate();
// };
// end of energy

// start of deadeye
var deadeye = 32;
deadeye_timer();
var smokecounter = 0;
var deadeyelevel = 1;

function smoke() {
    if(deadeye > 32){
        deadeye = deadeye;
    } else if (deadeye > 30){
        deadeye = 32;
    } else {
        deadeye = deadeye + 2;
    }
    smokecounter = smokecounter + 1;
    console.log(smokecounter);
    if(smokecounter >= 5){
        deadeyelevel = deadeyelevel + 1;
        smokecounter = 0;
        if (deadeyelevel > 8){
            deadeyelevel = 8;
        }else {
            animate();
            console.log('next deadeye level');
        }
        console.log('deadeye level = ' + deadeyelevel);
    }
    document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
    deadeye_timer();
}

function deadeye_timer(){
    clearInterval(teller_fuction_deadeye);
    var teller_fuction_deadeye = setInterval(function () {
        deadeye--;
        document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
        if (deadeye <= 0) {
            clearInterval(teller_fuction_deadeye);
            document.getElementById("countdown3").innerText = "deadeye is drained";
        }
    }, 5000);
}
// const SPRITE_WIDTH = 130;
// const SPRITE_HEIGHT = 130;
// const BORDER_WIDTH = 0;
// const SPACING_WIDTH = 0;

// function spritePositionToImagePosition(row, col) {
//     return {
//         x: (
//             BORDER_WIDTH +
//             col * (SPACING_WIDTH + SPRITE_WIDTH)
//         ),
//         y: (
//             BORDER_WIDTH +
//             row * (SPACING_WIDTH + SPRITE_HEIGHT)
//         )
//     }
// }

// var canvas = document
//             .getElementById('deadeye-level');
// var context = canvas
//               .getContext('2d');

// var spriteSheetURL = 'assets/img/levels/levels.png';
// var image = new Image();
// image.src = spriteSheetURL;
// image.crossOrigin = true;

// var row = 0;
// var col = 0;
// function animate() {
//     // once we hit the end of a row,
//     // move to the next
//     if (col === 3) {
//         col = 0;
//         row += 1;
//     }
//     // once we finish the last row,
//     // start again
//     if (row === 2) {
//         if (col === 2){
//         row = 0;
//         col = 0;
//         }
//     }
    
//     // make an image position using the 
//     // current row and colum
//     var position = spritePositionToImagePosition(row, col);
//     context.clearRect(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//     );
//     context.drawImage(
//         image,
//         position.x,
//         position.y,
//         SPRITE_WIDTH,
//         SPRITE_HEIGHT,
//         0,
//         0,
//         SPRITE_WIDTH,
//         SPRITE_HEIGHT
//     );
//     col += 1;
// }

// image.onload = function() {
//     animate();
// };
// end of deadeye

// start daynight
var sun = -3.125;
var moon = -3.125;
day()
function day(){
    var teller_fuction_sun = setInterval(function () {
        sun=sun + 0.625;
        document.getElementById("sun").style.bottom = sun + 'em';
        moon=moon - 0.625;
        document.getElementById("moon").style.bottom = moon + 'em';
        if (sun > 37.5){
            document.getElementById("body").style.backgroundColor = "skyblue";
            clearInterval(teller_fuction_sun);
            var teller_fuction_day = setInterval(function () {

                if (teller_fuction_day > 3){
                    clearInterval(teller_fuction_day)
                    night()   
                }
        
            }, 3000);
        } else if (moon > 50){
            document.getElementById("body").style.backgroundColor = "#10103c";
        } else if (sun < 50){
            document.getElementById("body").style.backgroundColor = "#ea9087";
        } else if (sun > 50){
            document.getElementById("body").style.backgroundColor = "skyblue";
        } else if( sun < 0){
            document.getElementById("body").style.backgroundColor = "#10103c";

        }

    }, 150);
}
function night(){
    var teller_fuction_moon = setInterval(function () {
        sun=sun - 0.625;
        document.getElementById("sun").style.bottom = sun + 'em';
        moon=moon + 0.625;
        document.getElementById("moon").style.bottom = moon + 'em';
        if (moon > 37.5){
            document.getElementById("body").style.backgroundColor = "#10103c";

            clearInterval(teller_fuction_moon);
            var teller_fuction_night = setInterval(function () {

                if (teller_fuction_night > 3){
                    clearInterval(teller_fuction_night)
                    day()   
                }
        
            }, 3000);
        } else if (sun > 50){
            document.getElementById("body").style.backgroundColor = "skyblue";
        } else if (moon < 50){
            document.getElementById("body").style.backgroundColor = "orange";
        } else if (moon > 50){
            document.getElementById("body").style.backgroundColor = "#10103c";
        } else if( moon < 0){
            document.getElementById("body").style.backgroundColor = "skyblue";
        } 

    }, 150);
}
// end daynight
// start clouds
var cloud1 = 12.5;
var teller_fuction_cloud1 = setInterval(function () {
    cloud1=cloud1 + 0.625 ;
    if (cloud1 < 96.25){
        document.getElementById("cloud1").style.left = cloud1 + 'em';
    } else{
        cloud1 = -15.625;
        document.getElementById("cloud1").style.left = cloud1 + 'em';
    }

}, 250);
var cloud2 = 62.5;
var teller_fuction_cloud2 = setInterval(function () {
    cloud2=cloud2 + 0.625 ;
    if (cloud2 < 96.25){
        document.getElementById("cloud2").style.left = cloud2 + 'em';
    } else{
        cloud2 = -15.625;
        document.getElementById("cloud2").style.left = cloud2 + 'em';
    }

}, 250);
var cloud3 = 46.875;
var teller_fuction_cloud3 = setInterval(function () {
    cloud3=cloud3 + 0.625 ;
    if (cloud3 < 96.25){
        document.getElementById("cloud3").style.left = cloud3 + 'em';
    } else{
        cloud3 = -15.625;
        document.getElementById("cloud3").style.left = cloud3 + 'em';
    }

}, 250);
var cloud4 = 6.25;
var teller_fuction_cloud4 = setInterval(function () {
    cloud4=cloud4 + 0.625 ;
    if (cloud4 < 96.25){
        document.getElementById("cloud4").style.left = cloud4 + 'em';
    } else{
        cloud4 = -15.625;
        document.getElementById("cloud4").style.left = cloud4 + 'em';
    }

}, 250);
var cloud5 = 50;
var teller_fuction_cloud5 = setInterval(function () {
    cloud5=cloud5 + 0.625 ;
    if (cloud5 < 96.25){
        document.getElementById("cloud5").style.left = cloud5 + 'em';
    } else{
        cloud5 = -15.625;
        document.getElementById("cloud5").style.left = cloud5 + 'em';
    }

}, 250);
var cloud6 = 87.5;
var teller_fuction_cloud6 = setInterval(function () {
    cloud6=cloud6 + 0.625 ;
    if (cloud6 < 96.25){
        document.getElementById("cloud6").style.left = cloud6 + 'em';
    } else{
        cloud6 = -15.625;
        document.getElementById("cloud6").style.left = cloud6 + 'em';
    }
}, 250);
// end clouds
// start music
window.addEventListener("BackgroundMusic",
    () => {
        const backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.volume = 100;
            console.log("Play");

    });
window.onload = function() {
    const audio = document.getElementById('backgroundMusic');
    audio.muted = false;
};
// end music
// Sprite Arthur

const SPRITE_WIDTH = 320;
const SPRITE_HEIGHT = 320;
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
            .getElementById('spriteCanvas');
var context = canvas
              .getContext('2d');

var spriteSheetURL = 'assets/img/Arthur-Morgan/Arthur-Morgan-sprite1.png';
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
        row = 0;
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
    setInterval(animate, 500);
};
// end arthur
