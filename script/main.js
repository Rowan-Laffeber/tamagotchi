// start of health
var health = 32;
health_timer();
var eatcounter = 0;
var HealthLevel = 1;

function eat() {
    if(health > 32){
        health = 32;
    } else if (health > 30){
        health = 32;
    } else {
        health = health + 2;
    }
    eatcounter = eatcounter + 1;
    console.log(eatcounter);
    if(eatcounter >= 5){
        HealthLevel = HealthLevel + 1;
        eatcounter = 0;
        if (HealthLevel > 8){
            HealthLevel = 8;
        }else {
            animateHealthLevel();
            console.log('next health level');
        }
        console.log('HealthLevel = ' + HealthLevel);
    }
    document.getElementById("countdown1").innerText = 'health ' + health;
    clearInterval(teller_function_health); ///vragen Kelvin
    health_timer();
}
function health_timer(){
    var teller_function_health = setInterval(function () {
        health--;
        document.getElementById("countdown1").innerText = 'health ' + health;
        if (health <= 0) {
            clearInterval(teller_function_health);
            document.getElementById("countdown1").innerText = "you are dead";
        }
        else if (health < 16){
            document.getElementById("speech-bubble").style.display = "block";

        }else{
            document.getElementById("speech-bubble").style.display = "none";
        }
    }, 1000);
}
// start health levels
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

var HealthLevelCanvas = document.getElementById('health-level');
var HealthLevelContext = HealthLevelCanvas.getContext('2d');

var HealthLevelImage = new Image();
HealthLevelImage.src = "assets/img/levels/levels.png";
HealthLevelImage.crossOrigin = "true";
HealthLevelCanvas.width = HealthLevel_WIDTH;
HealthLevelCanvas.height = HealthLevel_HEIGHT;

var HealthLevelRow = 0;
var HealthLevelCol = 0;
function animateHealthLevel() {
    if (HealthLevelCol === 3) {
        HealthLevelCol = 0;
        HealthLevelRow += 1;
    }
    if (HealthLevelRow === 2) {
        if (HealthLevelCol === 2){
            HealthLevelRow = 0;
            HealthLevelCol = 0;
        }
    }


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
// end health levels

// start health core
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

var HealthCoreCanvas = document.getElementById('health-core');
var HealthCoreContext = HealthCoreCanvas.getContext('2d');

var HealthCoreImage = new Image();
HealthCoreImage.src = "assets/img/stats-middle-icon/heart-core.png";
HealthCoreImage.crossOrigin = "true";
HealthCoreCanvas.width = HealthCore_WIDTH;
HealthCoreCanvas.height = HealthCore_HEIGHT;

var HealthCoreRow = 0;
var HealthCoreCol = 0;
function animateHealthCore() {
    if (HealthCoreCol === 3) {
        HealthCoreCol = 0;
        HealthCoreRow += 1;
    }
    if (HealthCoreRow === 2) {
        if (HealthCoreCol === 1){
        HealthCoreRow = 0;
        HealthCoreCol = 0;
        }
    }


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
// end health core

// start of health regen
const HealthRegen_WIDTH = 130;
const HealthRegen_HEIGHT = 130;
const HealthRegen_BORDER_WIDTH = 0;
const HealthRegen_SPACING_WIDTH = 0;

function HealthRegenPositionToImage(HealthRegenRow, HealthRegenCol) {
    return {
        x: (
            HealthRegen_BORDER_WIDTH +
            HealthRegenCol * (HealthRegen_SPACING_WIDTH + HealthRegen_WIDTH)
        ),
        y: (
            HealthRegen_BORDER_WIDTH +
            HealthRegenRow * (HealthRegen_SPACING_WIDTH + HealthRegen_HEIGHT)
        )
    }
}

var HealthRegenCanvas = document.getElementById('health-regen');
var HealthRegenContext = HealthRegenCanvas.getContext('2d');

var HealthRegenImage = new Image();
HealthRegenImage.src = "assets/img/regen-levels/regen-level0-32.png";
HealthRegenImage.crossOrigin = "true";
HealthRegenCanvas.width = HealthRegen_WIDTH;
HealthRegenCanvas.height = HealthRegen_HEIGHT;

var HealthRegenRow = 0;
var HealthRegenCol = 0;
function animateHealthRegen() {
    if (HealthLevel === 1){
        if (HealthRegenCol === 5){
            HealthRegenRow = 0;
            HealthRegenCol = 0;
        }
    } else if (HealthRegenCol === 6) {
        HealthRegenCol = 0;
        HealthRegenRow += 1;
    }
    if (HealthLevel === 2){
        if (HealthRegenRow === 1) {
            if (HealthRegenCol === 3){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    } else if (HealthLevel === 3){
        if (HealthRegenRow === 2) {
            if (HealthRegenCol === 1){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    } else if (HealthLevel === 4){
        if (HealthRegenRow === 2) {
            if (HealthRegenCol === 5){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    } else if (HealthLevel === 5){
        if (HealthRegenRow === 3) {
            if (HealthRegenCol === 3){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    } else if (HealthLevel === 6){
        if (HealthRegenRow === 4) {
            if (HealthRegenCol === 1){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    } else if (HealthLevel === 7){
        if (HealthRegenRow === 4) {
            if (HealthRegenCol === 5){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    } else if (HealthLevel === 8){
        if (HealthRegenRow === 5) {
            if (HealthRegenCol === 3){
                HealthRegenRow = 0;
                HealthRegenCol = 0;
            }
        }
    }
    var position = HealthRegenPositionToImage(HealthRegenRow, HealthRegenCol);
    HealthRegenContext.clearRect(
        0,
        0,
        HealthRegenCanvas.width,
        HealthRegenCanvas.height
    );
    HealthRegenContext.drawImage(
        HealthRegenImage,
        position.x,
        position.y,
        HealthRegen_WIDTH,
        HealthRegen_HEIGHT,
        0,
        0,
        HealthRegen_WIDTH,
        HealthRegen_HEIGHT
    );
    HealthRegenCol += 1;
}

HealthRegenImage.onload = function() {
    // animateHealthRegen();
    setInterval(animateHealthRegen, 500);
};
// end of health regen
// end of health

// start of energy
var energy = 32;
energy_timer();
var sleepcounter = 0;
var EnergyLevel = 1;

function sleep() {
    if(energy > 32){
        energy = 32;
    } else if (energy > 30){
        energy = 32;
    } else {
        energy = energy + 2;
    }
    sleepcounter = sleepcounter + 1;
    console.log(sleepcounter);
    if(sleepcounter >= 5){
        EnergyLevel = EnergyLevel + 1;
        sleepcounter = 0;
        if (EnergyLevel > 8){
            EnergyLevel = 8;
        } else {
            animateEnergyLevel();
            console.log('next energy level');
        }
        console.log('EnergyLevel = ' + EnergyLevel);
    }
    document.getElementById("countdown2").innerText = 'energy ' + energy;
    clearInterval(teller_function_energy); /// vragen Kelvin
    energy_timer();
}
function energy_timer(){
    var teller_function_energy = setInterval(function () {
        energy--;
        document.getElementById("countdown2").innerText = 'energy ' + energy;
        if (energy <= 0) {
            clearInterval(teller_function_energy);
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

var EnergyLevelCanvas = document.getElementById('energy-level');
var EnergyLevelContext = EnergyLevelCanvas.getContext('2d');

var EnergyLevelImage = new Image();
EnergyLevelImage.src = "assets/img/levels/levels.png";
EnergyLevelImage.crossOrigin = "true";
EnergyLevelCanvas.width = EnergyLevel_WIDTH;
EnergyLevelCanvas.height = EnergyLevel_HEIGHT;

var EnergyLevelRow = 0;
var EnergyLevelCol = 0;
function animateEnergyLevel() {
    if (EnergyLevelCol === 3) {
        EnergyLevelCol = 0;
        EnergyLevelRow += 1;
    }
    if (EnergyLevelRow === 2) {
        if (EnergyLevelCol === 2){
        EnergyLevelRow = 0;
        EnergyLevelCol = 0;
        }
    }


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
// end energy levels

// start energy core
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

var EnergyCoreCanvas = document.getElementById('energy-core');
var EnergyCoreContext = EnergyCoreCanvas.getContext('2d');

var EnergyCoreImage = new Image();
EnergyCoreImage.src = "assets/img/stats-middle-icon/energy-core.png";
EnergyCoreImage.crossOrigin = "true";
EnergyCoreCanvas.width = EnergyCore_WIDTH;
EnergyCoreCanvas.height = EnergyCore_HEIGHT;

var EnergyCoreRow = 0;
var EnergyCoreCol = 0;
function animateEnergyCore() {
    if (EnergyCoreCol === 3) {
        EnergyCoreCol = 0;
        EnergyCoreRow += 1;
    }
    if (EnergyCoreRow === 2) {
        if (EnergyCoreCol === 2){
        EnergyCoreRow = 0;
        EnergyCoreCol = 0;
        }
    }


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
// end energy core

// start of Energy regen
const EnergyRegen_WIDTH = 130;
const EnergyRegen_HEIGHT = 130;
const EnergyRegen_BORDER_WIDTH = 0;
const EnergyRegen_SPACING_WIDTH = 0;

function EnergyRegenPositionToImage(EnergyRegenRow, EnergyRegenCol) {
    return {
        x: (
            EnergyRegen_BORDER_WIDTH +
            EnergyRegenCol * (EnergyRegen_SPACING_WIDTH + EnergyRegen_WIDTH)
        ),
        y: (
            EnergyRegen_BORDER_WIDTH +
            EnergyRegenRow * (EnergyRegen_SPACING_WIDTH + EnergyRegen_HEIGHT)
        )
    }
}

var EnergyRegenCanvas = document.getElementById('energy-regen');
var EnergyRegenContext = EnergyRegenCanvas.getContext('2d');

var EnergyRegenImage = new Image();
EnergyRegenImage.src = "assets/img/regen-levels/regen-level0-32.png";
EnergyRegenImage.crossOrigin = "true";
EnergyRegenCanvas.width = EnergyRegen_WIDTH;
EnergyRegenCanvas.height = EnergyRegen_HEIGHT;

var EnergyRegenRow = 0;
var EnergyRegenCol = 0;
function animateEnergyRegen() {
    if (EnergyLevel === 1){
        if (EnergyRegenCol === 5){
            EnergyRegenRow = 0;
            EnergyRegenCol = 0;
        }
    } else if (EnergyRegenCol === 6) {
        EnergyRegenCol = 0;
        EnergyRegenRow += 1;
    }
    if (EnergyLevel === 2){
        if (EnergyRegenRow === 1) {
            if (EnergyRegenCol === 3){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    } else if (EnergyLevel === 3){
        if (EnergyRegenRow === 2) {
            if (EnergyRegenCol === 1){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    } else if (EnergyLevel === 4){
        if (EnergyRegenRow === 2) {
            if (EnergyRegenCol === 5){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    } else if (EnergyLevel === 5){
        if (EnergyRegenRow === 3) {
            if (EnergyRegenCol === 3){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    } else if (EnergyLevel === 6){
        if (EnergyRegenRow === 4) {
            if (EnergyRegenCol === 1){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    } else if (EnergyLevel === 7){
        if (EnergyRegenRow === 4) {
            if (EnergyRegenCol === 5){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    } else if (EnergyLevel === 8){
        if (EnergyRegenRow === 5) {
            if (EnergyRegenCol === 3){
                EnergyRegenRow = 0;
                EnergyRegenCol = 0;
            }
        }
    }


    var position = EnergyRegenPositionToImage(EnergyRegenRow, EnergyRegenCol);
    EnergyRegenContext.clearRect(
        0,
        0,
        EnergyRegenCanvas.width,
        EnergyRegenCanvas.height
    );
    EnergyRegenContext.drawImage(
        EnergyRegenImage,
        position.x,
        position.y,
        EnergyRegen_WIDTH,
        EnergyRegen_HEIGHT,
        0,
        0,
        EnergyRegen_WIDTH,
        EnergyRegen_HEIGHT
    );
    EnergyRegenCol += 1;
}

EnergyRegenImage.onload = function() {
    // animateEnergyRegen();
    setInterval(animateEnergyRegen, 500);
};
// end of Energy regen

// end of energy

// start of deadeye
var deadeye = 32;
deadeye_timer();
var smokecounter = 0;
var DeadeyeLevel = 1;

function smoke() {
    if(deadeye > 32){
        deadeye = 32;
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
            console.log('next deadeye level');
        }
        console.log('deadeye level = ' + DeadeyeLevel);
    }
    document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
    clearInterval(teller_function_deadeye); /// vragen Kelvin
    deadeye_timer();
}

function deadeye_timer(){
    var teller_function_deadeye = setInterval(function () {
        deadeye--;
        document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
        if (deadeye <= 0) {
            clearInterval(teller_function_deadeye);
            document.getElementById("countdown3").innerText = "deadeye is drained";
        }
    }, 5000);
}
// deadeye level start
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

var DeadeyeLevelCanvas = document.getElementById('deadeye-level');
var DeadeyeLevelContext = DeadeyeLevelCanvas.getContext('2d');

var DeadeyeLevelImage = new Image();
DeadeyeLevelImage.src = "assets/img/levels/levels.png";
DeadeyeLevelImage.crossOrigin = "true";
DeadeyeLevelCanvas.width = DeadeyeLevel_WIDTH;
DeadeyeLevelCanvas.height = DeadeyeLevel_HEIGHT;

var DeadeyeLevelRow = 0;
var DeadeyeLevelCol = 0;
function animateDeadeyeLevel() {
    if (DeadeyeLevelCol === 3) {
        DeadeyeLevelCol = 0;
        DeadeyeLevelRow += 1;
    }
    if (DeadeyeLevelRow === 2) {
        if (DeadeyeLevelCol === 2){
        DeadeyeLevelRow = 0;
        DeadeyeLevelCol = 0;
        }
    }


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

// deadeye level end

// deadeye core start
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

var DeadeyeCoreCanvas = document.getElementById('deadeye-core');
var DeadeyeCoreContext = DeadeyeCoreCanvas.getContext('2d');

var DeadeyeCoreImage = new Image();
DeadeyeCoreImage.src = "assets/img/stats-middle-icon/deadeye-core.png";
DeadeyeCoreImage.crossOrigin = "true";
DeadeyeCoreCanvas.width = DeadeyeCore_WIDTH;
DeadeyeCoreCanvas.height = DeadeyeCore_HEIGHT;

var DeadeyeCoreRow = 0;
var DeadeyeCoreCol = 0;
function animateDeadeyeCore() {
    if (DeadeyeCoreCol === 3) {
        DeadeyeCoreCol = 0;
        DeadeyeCoreRow += 1;
    }
    if (DeadeyeCoreRow === 2) {
        DeadeyeCoreRow = 0;
        DeadeyeCoreCol = 0;
    }


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

// deadeye core end

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
DeadeyeRegenImage.crossOrigin = "true";
DeadeyeRegenCanvas.width = DeadeyeRegen_WIDTH;
DeadeyeRegenCanvas.height = DeadeyeRegen_HEIGHT;

var DeadeyeRegenRow = 0;
var DeadeyeRegenCol = 0;
function animateDeadeyeRegen() {
    if (DeadeyeLevel === 1){
        if (DeadeyeRegenCol === 5){
            DeadeyeRegenRow = 0;
            DeadeyeRegenCol = 0;
        }
    } else if (DeadeyeRegenCol === 6) {
        DeadeyeRegenCol = 0;
        DeadeyeRegenRow += 1;
    }
    if (DeadeyeLevel === 2){
        if (DeadeyeRegenRow === 1) {
            if (DeadeyeRegenCol === 3){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    } else if (DeadeyeLevel === 3){
        if (DeadeyeRegenRow === 2) {
            if (DeadeyeRegenCol === 1){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    } else if (DeadeyeLevel === 4){
        if (DeadeyeRegenRow === 2) {
            if (DeadeyeRegenCol === 5){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    } else if (DeadeyeLevel === 5){
        if (DeadeyeRegenRow === 3) {
            if (DeadeyeRegenCol === 3){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    } else if (DeadeyeLevel === 6){
        if (DeadeyeRegenRow === 4) {
            if (DeadeyeRegenCol === 1){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    } else if (DeadeyeLevel === 7){
        if (DeadeyeRegenRow === 4) {
            if (DeadeyeRegenCol === 5){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    } else if (DeadeyeLevel === 8){
        if (DeadeyeRegenRow === 5) {
            if (DeadeyeRegenCol === 3){
                DeadeyeRegenRow = 0;
                DeadeyeRegenCol = 0;
            }
        }
    }


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

// end of deadeye

// start daynight
var sun = -3.125;
var moon = -3.125;
day()
function day(){
    var teller_function_sun = setInterval(function () {
        sun=sun + 0.625;
        document.getElementById("sun").style.bottom = sun + 'em';
        moon=moon - 0.625;
        document.getElementById("moon").style.bottom = moon + 'em';
        if (sun > 37.5){
            document.getElementById("body").style.backgroundColor = "skyblue";
            clearInterval(teller_function_sun);
            var teller_function_day = setInterval(function () {

                if (teller_function_day > 3){
                    clearInterval(teller_function_day)
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
    var teller_function_moon = setInterval(function () {
        sun=sun - 0.625;
        document.getElementById("sun").style.bottom = sun + 'em';
        moon=moon + 0.625;
        document.getElementById("moon").style.bottom = moon + 'em';
        if (moon > 37.5){
            document.getElementById("body").style.backgroundColor = "#10103c";

            clearInterval(teller_function_moon);
            var teller_function_night = setInterval(function () {

                if (teller_function_night > 3){
                    clearInterval(teller_function_night)
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
var Clouds = [
    { id: "cloud1", left: 12.5 },
    { id: "cloud2", left: 62.5 },
    { id: "cloud3", left: 46.875 },
    { id: "cloud4", left: 6.25 },
    { id: "cloud5", left: 50 },
    { id: "cloud6", left: 87.5 }
];
function updateCloud(CloudEach){
    CloudEach.left += 0.625;
    if (CloudEach.left < 96.25) {
        document.getElementById(CloudEach.id).style.left = CloudEach.left + 'em';
    } else {
        CloudEach.left = -15.625;
        document.getElementById(CloudEach.id).style.left = CloudEach.left + 'em';
    }
}
var CloudCounter = setInterval(function () {
    Clouds.forEach(updateCloud);
}, 250);
// end clouds
// start music
const startButton = document.getElementById('startBtn');
const Box = document.getElementById('Box');
const backgroundMusic = document.getElementById('backgroundMusic');
const body = document.body;

startButton.addEventListener('click', () => {
    backgroundMusic.play();
    Box.classList.add('hidden');
    body.style.filter = 'none';
});
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
ArthurCanvas.width = Arthur_WIDTH;
ArthurCanvas.height = Arthur_HEIGHT;

var ArthurRow = 0;
var ArthurCol = 0;
function animateArthur() {
    if (ArthurCol === 3) {
        ArthurCol = 0;
        ArthurRow += 1;
    }
    if (ArthurRow === 2) {
        ArthurRow = 0;
    }
    
    
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