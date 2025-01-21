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
            animateHealthLevel();
            console.log('next Health level');
        }
        console.log('healthlevel = ' + healthlevel);
    }
    document.getElementById("countdown1").innerText = 'hunger ' + hunger;
    clearInterval(teller_fuction_hunger);
    hunger_timer();
}
function hunger_timer(){
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
// start Health levels
const HealthLevel_WIDTH = 130;
const HealthLevel_HEIGHT = 130;
const HealthLevel_BORDER_WIDTH = 0;
const HealthLevel_SPACING_WIDTH = 0;

function HealthLevelPositionToImage(HealthLevelRow, HealthLevelCol) {
    return {
        x: (
            HealthLevel_BORDER_WIDTH +
            HealthLevelCol * (HealthLevel_SPACING_WIDTH + HealthLevel_WIDTH)
        ),
        y: (
            HealthLevel_BORDER_WIDTH +
            HealthLevelRow * (HealthLevel_SPACING_WIDTH + HealthLevel_HEIGHT)
        )
    }
}

var HealthLevelCanvas = document.getElementById('Health-level');
var HealthLevelContext = HealthLevelCanvas.getContext('2d');

var HealthLevelImage = new Image();
HealthLevelImage.src = "assets/img/levels/levels.png";
HealthLevelImage.crossOrigin = true;
HealthLevelCanvas.width = HealthLevel_WIDTH;
HealthLevelCanvas.height = HealthLevel_HEIGHT;

var HealthLevelRow = 0;
var HealthLevelCol = 0;
function animateHealthLevel() {
    // once we hit the end of a row,
    // move to the next
    if (HealthLevelCol === 3) {
        HealthLevelCol = 0;
        HealthLevelRow += 1;
    }
    // once we finish the last row,
    // start again
    if (HealthLevelRow === 2) {
        if (HealthLevelCol === 2){
            HealthLevelRow = 0;
            HealthLevelCol = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = HealthLevelPositionToImage(HealthLevelRow, HealthLevelCol);
    HealthLevelContext.clearRect(
        0,
        0,
        HealthLevelCanvas.width,
        HealthLevelCanvas.height
    );
    HealthLevelContext.drawImage(
        HealthLevelImage,
        position.x,
        position.y,
        HealthLevel_WIDTH,
        HealthLevel_HEIGHT,
        0,
        0,
        HealthLevel_WIDTH,
        HealthLevel_HEIGHT
    );
    HealthLevelCol += 1;
}

HealthLevelImage.onload = function() {
    animateHealthLevel();
};
// end Health levels

// start Health core
const HealthCore_WIDTH = 70;
const HealthCore_HEIGHT = 70;
const HealthCore_BORDER_WIDTH = 0;
const HealthCore_SPACING_WIDTH = 0;

function HealthCorePositionToImage(HealthCoreRow, HealthCoreCol) {
    return {
        x: (
            HealthCore_BORDER_WIDTH +
            HealthCoreCol * (HealthCore_SPACING_WIDTH + HealthCore_WIDTH)
        ),
        y: (
            HealthCore_BORDER_WIDTH +
            HealthCoreRow * (HealthCore_SPACING_WIDTH + HealthCore_HEIGHT)
        )
    }
}

var HealthCoreCanvas = document.getElementById('Health-core');
var HealthCoreContext = HealthCoreCanvas.getContext('2d');

var HealthCoreImage = new Image();
HealthCoreImage.src = "assets/img/stats-middle-icon/heart-core.png";
HealthCoreImage.crossOrigin = true;
HealthCoreCanvas.width = HealthCore_WIDTH;
HealthCoreCanvas.height = HealthCore_HEIGHT;

var HealthCoreRow = 0;
var HealthCoreCol = 0;
function animateHealthCore() {
    // once we hit the end of a row,
    // move to the next
    if (HealthCoreCol === 3) {
        HealthCoreCol = 0;
        HealthCoreRow += 1;
    }
    // once we finish the last row,
    // start again
    if (HealthCoreRow === 2) {
        if (HealthCoreCol === 1){
        HealthCoreRow = 0;
        HealthCoreCol = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = HealthCorePositionToImage(HealthCoreRow, HealthCoreCol);
    HealthCoreContext.clearRect(
        0,
        0,
        HealthCoreCanvas.width,
        HealthCoreCanvas.height
    );
    HealthCoreContext.drawImage(
        HealthCoreImage,
        position.x,
        position.y,
        HealthCore_WIDTH,
        HealthCore_HEIGHT,
        0,
        0,
        HealthCore_WIDTH,
        HealthCore_HEIGHT
    );
    HealthCoreCol += 1;
}

HealthCoreImage.onload = function() {
    // animateHealthCore();
    setInterval(animateHealthCore, 500);
};
// end Health core

// end of hunger

// start of Energy
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
            animateEnergyLevel();
            console.log('next Energy level');
        }
        console.log('energylevel = ' + energylevel);
    }
    document.getElementById("countdown2").innerText = 'Energy ' + energy;
    clearInterval(teller_fuction_energy);
    energy_timer();
}
function energy_timer(){
    var teller_fuction_energy = setInterval(function () {
        energy--;
        document.getElementById("countdown2").innerText = 'Energy ' + energy;
        if (energy <= 0) {
            clearInterval(teller_fuction_energy);
            document.getElementById("countdown2").innerText = "you are dead";
        }
    }, 3000);
}

const EnergyLevel_WIDTH = 130;
const EnergyLevel_HEIGHT = 130;
const EnergyLevel_BORDER_WIDTH = 0;
const EnergyLevel_SPACING_WIDTH = 0;

function EnergyLevelPositionToImage(EnergyLevelRow, EnergyLevelCol) {
    return {
        x: (
            EnergyLevel_BORDER_WIDTH +
            EnergyLevelCol * (EnergyLevel_SPACING_WIDTH + EnergyLevel_WIDTH)
        ),
        y: (
            EnergyLevel_BORDER_WIDTH +
            EnergyLevelRow * (EnergyLevel_SPACING_WIDTH + EnergyLevel_HEIGHT)
        )
    }
}

var EnergyLevelCanvas = document.getElementById('Energy-level');
var EnergyLevelContext = EnergyLevelCanvas.getContext('2d');

var EnergyLevelImage = new Image();
EnergyLevelImage.src = "assets/img/levels/levels.png";
EnergyLevelImage.crossOrigin = true;
EnergyLevelCanvas.width = EnergyLevel_WIDTH;
EnergyLevelCanvas.height = EnergyLevel_HEIGHT;

var EnergyLevelRow = 0;
var EnergyLevelCol = 0;
function animateEnergyLevel() {
    // once we hit the end of a row,
    // move to the next
    if (EnergyLevelCol === 3) {
        EnergyLevelCol = 0;
        EnergyLevelRow += 1;
    }
    // once we finish the last row,
    // start again
    if (EnergyLevelRow === 2) {
        if (EnergyLevelCol === 2){
        EnergyLevelRow = 0;
        EnergyLevelCol = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = EnergyLevelPositionToImage(EnergyLevelRow, EnergyLevelCol);
    EnergyLevelContext.clearRect(
        0,
        0,
        EnergyLevelCanvas.width,
        EnergyLevelCanvas.height
    );
    EnergyLevelContext.drawImage(
        EnergyLevelImage,
        position.x,
        position.y,
        EnergyLevel_WIDTH,
        EnergyLevel_HEIGHT,
        0,
        0,
        EnergyLevel_WIDTH,
        EnergyLevel_HEIGHT
    );
    EnergyLevelCol += 1;
}

EnergyLevelImage.onload = function() {
    animateEnergyLevel();
};
// end Energy levels

// start Energy core
const EnergyCore_WIDTH = 70;
const EnergyCore_HEIGHT = 70;
const EnergyCore_BORDER_WIDTH = 0;
const EnergyCore_SPACING_WIDTH = 0;

function EnergyCorePositionToImage(EnergyCoreRow, EnergyCoreCol) {
    return {
        x: (
            EnergyCore_BORDER_WIDTH +
            EnergyCoreCol * (EnergyCore_SPACING_WIDTH + EnergyCore_WIDTH)
        ),
        y: (
            EnergyCore_BORDER_WIDTH +
            EnergyCoreRow * (EnergyCore_SPACING_WIDTH + EnergyCore_HEIGHT)
        )
    }
}

var EnergyCoreCanvas = document.getElementById('Energy-core');
var EnergyCoreContext = EnergyCoreCanvas.getContext('2d');

var EnergyCoreImage = new Image();
EnergyCoreImage.src = "assets/img/stats-middle-icon/Energy-core.png";
EnergyCoreImage.crossOrigin = true;
EnergyCoreCanvas.width = EnergyCore_WIDTH;
EnergyCoreCanvas.height = EnergyCore_HEIGHT;

var EnergyCoreRow = 0;
var EnergyCoreCol = 0;
function animateEnergyCore() {
    // once we hit the end of a row,
    // move to the next
    if (EnergyCoreCol === 3) {
        EnergyCoreCol = 0;
        EnergyCoreRow += 1;
    }
    // once we finish the last row,
    // start again
    if (EnergyCoreRow === 2) {
        if (EnergyCoreCol === 2){
        EnergyCoreRow = 0;
        EnergyCoreCol = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = EnergyCorePositionToImage(EnergyCoreRow, EnergyCoreCol);
    EnergyCoreContext.clearRect(
        0,
        0,
        EnergyCoreCanvas.width,
        EnergyCoreCanvas.height
    );
    EnergyCoreContext.drawImage(
        EnergyCoreImage,
        position.x,
        position.y,
        EnergyCore_WIDTH,
        EnergyCore_HEIGHT,
        0,
        0,
        EnergyCore_WIDTH,
        EnergyCore_HEIGHT
    );
    EnergyCoreCol += 1;
}

EnergyCoreImage.onload = function() {
    // animateEnergyCore();
    setInterval(animateEnergyCore, 500);
};
// end Energy core

// end of Energy

// start of Deadeye
var deadeye = 32;
deadeye_timer();
var smokecounter = 0;
var DeadeyeLevel = 1;

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
        DeadeyeLevel = DeadeyeLevel + 1;
        smokecounter = 0;
        if (DeadeyeLevel > 8){
            DeadeyeLevel = 8;
        }else {
            animateDeadeyeLevel();
            console.log('next Deadeye level');
        }
        console.log('Deadeye level = ' + DeadeyeLevel);
    }
    document.getElementById("countdown3").innerText = 'Deadeye ' + deadeye;
    clearInterval(teller_fuction_deadeye);
    deadeye_timer();
}

function deadeye_timer(){
    var teller_fuction_deadeye = setInterval(function () {
        deadeye--;
        document.getElementById("countdown3").innerText = 'Deadeye ' + deadeye;
        if (deadeye <= 0) {
            clearInterval(teller_fuction_deadeye);
            document.getElementById("countdown3").innerText = "Deadeye is drained";
        }
    }, 5000);
}
// Deadeye level start
const DeadeyeLevel_WIDTH = 130;
const DeadeyeLevel_HEIGHT = 130;
const DeadeyeLevel_BORDER_WIDTH = 0;
const DeadeyeLevel_SPACING_WIDTH = 0;

function DeadeyeLevelPositionToImage(DeadeyeLevelRow, DeadeyeLevelCol) {
    return {
        x: (
            DeadeyeLevel_BORDER_WIDTH +
            DeadeyeLevelCol * (DeadeyeLevel_SPACING_WIDTH + DeadeyeLevel_WIDTH)
        ),
        y: (
            DeadeyeLevel_BORDER_WIDTH +
            DeadeyeLevelRow * (DeadeyeLevel_SPACING_WIDTH + DeadeyeLevel_HEIGHT)
        )
    }
}

var DeadeyeLevelCanvas = document.getElementById('Deadeye-level');
var DeadeyeLevelContext = DeadeyeLevelCanvas.getContext('2d');

var DeadeyeLevelImage = new Image();
DeadeyeLevelImage.src = "assets/img/levels/levels.png";
DeadeyeLevelImage.crossOrigin = true;
DeadeyeLevelCanvas.width = DeadeyeLevel_WIDTH;
DeadeyeLevelCanvas.height = DeadeyeLevel_HEIGHT;

var DeadeyeLevelRow = 0;
var DeadeyeLevelCol = 0;
function animateDeadeyeLevel() {
    // once we hit the end of a row,
    // move to the next
    if (DeadeyeLevelCol === 3) {
        DeadeyeLevelCol = 0;
        DeadeyeLevelRow += 1;
    }
    // once we finish the last row,
    // start again
    if (DeadeyeLevelRow === 2) {
        if (DeadeyeLevelCol === 2){
        DeadeyeLevelRow = 0;
        DeadeyeLevelCol = 0;
        }
    }
    
    // make an image position using the 
    // current row and colum
    var position = DeadeyeLevelPositionToImage(DeadeyeLevelRow, DeadeyeLevelCol);
    DeadeyeLevelContext.clearRect(
        0,
        0,
        DeadeyeLevelCanvas.width,
        DeadeyeLevelCanvas.height
    );
    DeadeyeLevelContext.drawImage(
        DeadeyeLevelImage,
        position.x,
        position.y,
        DeadeyeLevel_WIDTH,
        DeadeyeLevel_HEIGHT,
        0,
        0,
        DeadeyeLevel_WIDTH,
        DeadeyeLevel_HEIGHT
    );
    DeadeyeLevelCol += 1;
}

DeadeyeLevelImage.onload = function() {
    animateDeadeyeLevel();
};

// Deadeye level end

// Deadeye core start
const DeadeyeCore_WIDTH = 70;
const DeadeyeCore_HEIGHT = 70;
const DeadeyeCore_BORDER_WIDTH = 0;
const DeadeyeCore_SPACING_WIDTH = 0;

function DeadeyeCorePositionToImage(DeadeyeCoreRow, DeadeyeCoreCol) {
    return {
        x: (
            DeadeyeCore_BORDER_WIDTH +
            DeadeyeCoreCol * (DeadeyeCore_SPACING_WIDTH + DeadeyeCore_WIDTH)
        ),
        y: (
            DeadeyeCore_BORDER_WIDTH +
            DeadeyeCoreRow * (DeadeyeCore_SPACING_WIDTH + DeadeyeCore_HEIGHT)
        )
    }
}

var DeadeyeCoreCanvas = document.getElementById('Deadeye-core');
var DeadeyeCoreContext = DeadeyeCoreCanvas.getContext('2d');

var DeadeyeCoreImage = new Image();
DeadeyeCoreImage.src = "assets/img/stats-middle-icon/Deadeye-core.png";
DeadeyeCoreImage.crossOrigin = true;
DeadeyeCoreCanvas.width = DeadeyeCore_WIDTH;
DeadeyeCoreCanvas.height = DeadeyeCore_HEIGHT;

var DeadeyeCoreRow = 0;
var DeadeyeCoreCol = 0;
function animateDeadeyeCore() {
    // once we hit the end of a row,
    // move to the next
    if (DeadeyeCoreCol === 3) {
        DeadeyeCoreCol = 0;
        DeadeyeCoreRow += 1;
    }
    // once we finish the last row,
    // start again
    if (DeadeyeCoreRow === 2) {
        DeadeyeCoreRow = 0;
        DeadeyeCoreCol = 0;
    }
    
    // make an image position using the 
    // current row and colum
    var position = DeadeyeCorePositionToImage(DeadeyeCoreRow, DeadeyeCoreCol);
    DeadeyeCoreContext.clearRect(
        0,
        0,
        DeadeyeCoreCanvas.width,
        DeadeyeCoreCanvas.height
    );
    DeadeyeCoreContext.drawImage(
        DeadeyeCoreImage,
        position.x,
        position.y,
        DeadeyeCore_WIDTH,
        DeadeyeCore_HEIGHT,
        0,
        0,
        DeadeyeCore_WIDTH,
        DeadeyeCore_HEIGHT
    );
    DeadeyeCoreCol += 1;
}

DeadeyeCoreImage.onload = function() {
    // animateDeadeyeCore();
    setInterval(animateDeadeyeCore, 500);
};

// Deadeye core end

// end of Deadeye

// start daynight
var sun = -3.125;
var moon = -3.125;
day()
function day(){
    var teller_fuction_sun = setInterval(function () {
        sun=sun + 0.625;
        document.getElementById("Sun").style.bottom = sun + 'em';
        moon=moon - 0.625;
        document.getElementById("Moon").style.bottom = moon + 'em';
        if (sun > 37.5){
            document.getElementById("body").style.backgroundColor = "skyblue";
            clearInterval(teller_fuction_sun);
            var teller_fuction_day = setInterval(function () {

                if (teller_fuction_day > 3){
                    clearInterval(teller_fuction_day)
                    night()   
                }
        
            }, 3000);
        } else if (moon >  3.125){
            document.getElementById("body").style.backgroundColor = "#10103c";
        } else if (sun <  3.125){
            document.getElementById("body").style.backgroundColor = "#ea9087";
        } else if (sun > 3.125){
            document.getElementById("body").style.backgroundColor = "skyblue";
        } else if( sun < 0){
            document.getElementById("body").style.backgroundColor = "#10103c";

        }

    }, 150);
}
function night(){
    var teller_fuction_moon = setInterval(function () {
        sun=sun - 0.625;
        document.getElementById("Sun").style.bottom = sun + 'em';
        moon=moon + 0.625;
        document.getElementById("Moon").style.bottom = moon + 'em';
        if (moon > 37.5){
            document.getElementById("body").style.backgroundColor = "#10103c";

            clearInterval(teller_fuction_moon);
            var teller_fuction_night = setInterval(function () {

                if (teller_fuction_night > 3){
                    clearInterval(teller_fuction_night)
                    day()   
                }
        
            }, 3000);
        } else if (sun >  3.125){
            document.getElementById("body").style.backgroundColor = "skyblue";
        } else if (moon <  3.125){
            document.getElementById("body").style.backgroundColor = "orange";
        } else if (moon >  3.125){
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

const Arthur_WIDTH = 320;
const Arthur_HEIGHT = 320;
const Arthur_BORDER_WIDTH = 0;
const Arthur_SPACING_WIDTH = 0;

function arthurPositionToImage(ArthurRow, ArthurCol) {
    return {
        x: (
            Arthur_BORDER_WIDTH +
            ArthurCol * (Arthur_SPACING_WIDTH + Arthur_WIDTH)
        ),
        y: (
            Arthur_SPACING_WIDTH +
            ArthurRow * (Arthur_SPACING_WIDTH + Arthur_HEIGHT)
        )
    }
}

var ArthurCanvas = document.getElementById('ArthurCanvas');
var ArthurContext = ArthurCanvas.getContext('2d');

var ArthurImage = new Image();
ArthurImage.src = "assets/img/Arthur-Morgan/Arthur-Morgan-sprite1.png";
ArthurImage.crossOrigin = true;
ArthurCanvas.width = Arthur_WIDTH;
ArthurCanvas.height = Arthur_HEIGHT;

var ArthurRow = 0;
var ArthurCol = 0;
function animateArthur() {
    // once we hit the end of a row,
    // move to the next
    if (ArthurCol === 3) {
        ArthurCol = 0;
        ArthurRow += 1;
    }
    // once we finish the last row,
    // start again
    if (ArthurRow === 2) {
        ArthurRow = 0;
    }
    
    // make an image position using the 
    // current row and colum
    var position = arthurPositionToImage(ArthurRow, ArthurCol);
    ArthurContext.clearRect(
        0,
        0,
        ArthurCanvas.width,
        ArthurCanvas.height
    );
    ArthurContext.drawImage(
        ArthurImage,
        position.x,
        position.y,
        Arthur_WIDTH,
        Arthur_HEIGHT,
        0,
        0,
        Arthur_WIDTH,
        Arthur_HEIGHT
    );
    ArthurCol += 1;
}

ArthurImage.onload = function() {
    setInterval(animateArthur, 500);
};
// end arthur
