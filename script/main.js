// start of Health
let Health = 32;
HealthTimer();
let EatCounter = 0;
let HealthLevel = 1;

function eat() {
    if(Health > 32){
        Health = 32;
    } else if (Health > 30){
        Health = 32;
    } else {
        Health = Health + 2;
    }
    EatCounter = EatCounter + 1;
    console.log(EatCounter);
    if(EatCounter >= 5){
        HealthLevel = HealthLevel + 1;
        EatCounter = 0;
        if (HealthLevel > 8){
            HealthLevel = 8;
        }else {
            AnimateHealthLevel();
            console.log('next Health level');
        }
        console.log('HealthLevel = ' + HealthLevel);
    }
    document.getElementById("CountDown1").innerText = 'Health ' + Health;
    clearInterval(TellerFunctionHealth); ///vragen Kelvin
    HealthTimer();
}
function HealthTimer(){
    let TellerFunctionHealth = setInterval(function () {
        Health--;
        document.getElementById("CountDown1").innerText = 'Health ' + Health;
        if (Health <= 0) {
            clearInterval(TellerFunctionHealth);
            document.getElementById("CountDown1").innerText = "you are dead";
        } else if (Health < 16) {
            document.getElementById("SpeechBubble").style.display = "block";

        } else {
            document.getElementById("SpeechBubble").style.display = "none";
        }
    }, 1000);
}
// start Health levels
const HealthLevelWidth = 130;
const HealthLevelHeight = 130;
const HealthLevelBorderWidth = 0;
const HealthLevelSpacingWidth = 0;

function HealthLevelPositionToImage(HealthLevelRow, HealthLevelCol) {
    return {
        x: (
            HealthLevelBorderWidth +
            HealthLevelCol * (HealthLevelSpacingWidth + HealthLevelWidth)
        ),
        y: (
            HealthLevelBorderWidth +
            HealthLevelRow * (HealthLevelSpacingWidth + HealthLevelHeight)
        )
    }
}

let HealthLevelCanvas = document.getElementById('HealthLevel');
let HealthLevelContext = HealthLevelCanvas.getContext('2d');

let HealthLevelImage = new Image();
HealthLevelImage.src = "assets/img/levels/levels.png";
HealthLevelImage.crossOrigin = "true";
HealthLevelCanvas.width = HealthLevelWidth;
HealthLevelCanvas.height = HealthLevelHeight;

let HealthLevelRow = 0;
let HealthLevelCol = 0;

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


    const position = HealthLevelPositionToImage(HealthLevelRow, HealthLevelCol);
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
        HealthLevelWidth,
        HealthLevelHeight,
        0,
        0,
        HealthLevelWidth,
        HealthLevelHeight
    );
    HealthLevelCol += 1;
}

HealthLevelImage.onload = function() {
    animateHealthLevel();
};
// end Health levels

// start Health core
const HealthCoreWidth = 70;
const HealthCoreHeight = 70;
const HealthCoreBorderWidth = 0;
const HealthCoreSpacingWidth = 0;

function HealthCorePositionToImage(HealthCoreRow, HealthCoreCol) {
    return {
        x: (
            HealthCoreBorderWidth +
            HealthCoreCol * (HealthCoreSpacingWidth + HealthCoreWidth)
        ),
        y: (
            HealthCoreBorderWidth +
            HealthCoreRow * (HealthCoreSpacingWidth + HealthCoreHeight)
        )
    }
}

let HealthCoreCanvas = document.getElementById('HealthCore');
let HealthCoreContext = HealthCoreCanvas.getContext('2d');

let HealthCoreImage = new Image();
HealthCoreImage.src = "assets/img/stats-middle-icon/heart-core.png";
HealthCoreImage.crossOrigin = "true";
HealthCoreCanvas.width = HealthCoreWidth;
HealthCoreCanvas.height = HealthCoreHeight;

let HealthCoreRow = 0;
let HealthCoreCol = 0;

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


    const position = HealthCorePositionToImage(HealthCoreRow, HealthCoreCol);
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
        HealthCoreWidth,
        HealthCoreHeight,
        0,
        0,
        HealthCoreWidth,
        HealthCoreHeight
    );
    HealthCoreCol += 1;
}

HealthCoreImage.onload = function() {
    // animateHealthCore();
    setInterval(animateHealthCore, 500);
};
// end Health core

// start of Health regen
const HealthRegenWidth = 130;
const HealthRegenHeight = 130;
const HealthRegenBorderWidth = 0;
const HealthRegenSpacingWidth = 0;

function HealthRegenPositionToImage(HealthRegenRow, HealthRegenCol) {
    return {
        x: (
            HealthRegenWidth +
            HealthRegenCol * (HealthRegenWidth + HealthRegenWidth)
        ),
        y: (
            HealthRegenBorderWidth +
            HealthRegenRow * (HealthRegenSpacingWidth + HealthRegenHeight)
        )
    }
}

let HealthRegenCanvas = document.getElementById('HealthRegen');
let HealthRegenContext = HealthRegenCanvas.getContext('2d');

let HealthRegenImage = new Image();
HealthRegenImage.src = "assets/img/regen-levels/regen-level0-32.png";
HealthRegenImage.crossOrigin = "true";
HealthRegenCanvas.width = HealthRegenWidth;
HealthRegenCanvas.height = HealthRegenHeight;

let HealthRegenRow = 0;
let HealthRegenCol = 0;

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
    const position = HealthRegenPositionToImage(HealthRegenRow, HealthRegenCol);
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
        HealthRegenWidth,
        HealthRegenHeight,
        0,
        0,
        HealthRegenWidth,
        HealthRegenHeight
    );
    HealthRegenCol += 1;
}

HealthRegenImage.onload = function() {
    // animateHealthRegen();
    setInterval(animateHealthRegen, 500);
};
// end of Health regen
// end of Health

// start of Energy
let Energy = 32;
EnergyTimer();
let SleepCounter = 0;
let EnergyLevel = 1;

function sleep() {
    if(Energy > 32){
        Energy = 32;
    } else if (Energy > 30){
        Energy = 32;
    } else {
        Energy = Energy + 2;
    }
    SleepCounter = SleepCounter + 1;
    console.log(SleepCounter);
    if(SleepCounter >= 5){
        EnergyLevel = EnergyLevel + 1;
        SleepCounter = 0;
        if (EnergyLevel > 8){
            EnergyLevel = 8;
        } else {
            animateEnergyLevel();
            console.log('next Energy level');
        }
        console.log('EnergyLevel = ' + EnergyLevel);
    }
    document.getElementById("CountDown2").innerText = 'Energy ' + Energy;
    clearInterval(TellerFunctionEnergy); /// vragen Kelvin
    EnergyTimer();
}
function EnergyTimer(){
    let TellerFunctionEnergy = setInterval(function () {
        Energy--;
        document.getElementById("CountDown2").innerText = 'Energy ' + Energy;
        if (Energy <= 0) {
            clearInterval(TellerFunctionEnergy);
            document.getElementById("CountDown2").innerText = "you are dead";
        }
    }, 3000);
}

const EnergyLevelWidth = 130;
const EnergyLevelHeight = 130;
const EnergyLevelBorderWidth = 0;
const EnergyLevelSpacingWidth = 0;

function EnergyLevelPositionToImage(EnergyLevelRow, EnergyLevelCol) {
    return {
        x: (
            EnergyLevelBorderWidth +
            EnergyLevelCol * (EnergyLevelSpacingWidth + EnergyLevelWidth)
        ),
        y: (
            EnergyLevelBorderWidth +
            EnergyLevelRow * (EnergyLevelSpacingWidth + EnergyLevelHeight)
        )
    }
}

let EnergyLevelCanvas = document.getElementById('EnergyLevel');
let EnergyLevelContext = EnergyLevelCanvas.getContext('2d');

let EnergyLevelImage = new Image();
EnergyLevelImage.src = "assets/img/levels/levels.png";
EnergyLevelImage.crossOrigin = "true";
EnergyLevelCanvas.width = EnergyLevelWidth;
EnergyLevelCanvas.height = EnergyLevelHeight;

let EnergyLevelRow = 0;
let EnergyLevelCol = 0;

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


    const position = EnergyLevelPositionToImage(EnergyLevelRow, EnergyLevelCol);
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
        EnergyLevelWidth,
        EnergyLevelHeight,
        0,
        0,
        EnergyLevelWidth,
        EnergyLevelHeight
    );
    EnergyLevelCol += 1;
}

EnergyLevelImage.onload = function() {
    animateEnergyLevel();
};
// end Energy levels

// start Energy core
const EnergyCoreWidth = 70;
const EnergyCoreHeight = 70;
const EnergyCoreBorderWidth = 0;
const EnergyCoreSpacingWidth = 0;

function EnergyCorePositionToImage(EnergyCoreRow, EnergyCoreCol) {
    return {
        x: (
            EnergyCoreBorderWidth +
            EnergyCoreCol * (EnergyCoreSpacingWidth + EnergyCoreWidth)
        ),
        y: (
            EnergyCoreBorderWidth +
            EnergyCoreRow * (EnergyCoreSpacingWidth + EnergyCoreHeight)
        )
    }
}

let EnergyCoreCanvas = document.getElementById('EnergyCore');
let EnergyCoreContext = EnergyCoreCanvas.getContext('2d');

let EnergyCoreImage = new Image();
EnergyCoreImage.src = "assets/img/stats-middle-icon/Energy-core.png";
EnergyCoreImage.crossOrigin = "true";
EnergyCoreCanvas.width = EnergyCoreWidth;
EnergyCoreCanvas.height = EnergyCoreHeight;

let EnergyCoreRow = 0;
let EnergyCoreCol = 0;

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


    const position = EnergyCorePositionToImage(EnergyCoreRow, EnergyCoreCol);
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
        EnergyCoreWidth,
        EnergyCoreHeight,
        0,
        0,
        EnergyCoreWidth,
        EnergyCoreHeight
    );
    EnergyCoreCol += 1;
}

EnergyCoreImage.onload = function() {
    // animateEnergyCore();
    setInterval(animateEnergyCore, 500);
};
// end Energy core

// start of Energy regen
const EnergyRegenWidth = 130;
const EnergyRegenHeight = 130;
const EnergyRegenBorderWidth = 0;
const EnergyRegenSpacingWidth = 0;

function EnergyRegenPositionToImage(EnergyRegenRow, EnergyRegenCol) {
    return {
        x: (
            EnergyRegenBorderWidth +
            EnergyRegenCol * (EnergyRegenSpacingWidth + EnergyRegenWidth)
        ),
        y: (
            EnergyRegenBorderWidth +
            EnergyRegenRow * (EnergyRegenSpacingWidth + EnergyRegenHeight)
        )
    }
}

let EnergyRegenCanvas = document.getElementById('EnergyRegen');
let EnergyRegenContext = EnergyRegenCanvas.getContext('2d');

let EnergyRegenImage = new Image();
EnergyRegenImage.src = "assets/img/regen-levels/regen-level0-32.png";
EnergyRegenImage.crossOrigin = "true";
EnergyRegenCanvas.width = EnergyRegenWidth;
EnergyRegenCanvas.height = EnergyRegenHeight;

let EnergyRegenRow = 0;
let EnergyRegenCol = 0;

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


    let position = EnergyRegenPositionToImage(EnergyRegenRow, EnergyRegenCol);
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
        EnergyRegenWidth,
        EnergyRegenHeight,
        0,
        0,
        EnergyRegenWidth,
        EnergyRegenHeight
    );
    EnergyRegenCol += 1;
}

EnergyRegenImage.onload = function() {
    // animateEnergyRegen();
    setInterval(animateEnergyRegen, 500);
};
// end of Energy regen

// end of Energy

// start of Deadeye
let Deadeye = 32;
DeadeyeTimer();
let SmokeCounter = 0;
let DeadeyeLevel = 1;

function Smoke() {
    if(Deadeye > 32){
        Deadeye = 32;
    } else if (Deadeye > 30){
        Deadeye = 32;
    } else {
        Deadeye = Deadeye + 2;
    }
    SmokeCounter = SmokeCounter + 1;
    console.log(SmokeCounter);
    if(SmokeCounter >= 5){
        DeadeyeLevel = DeadeyeLevel + 1;
        SmokeCounter = 0;
        if (DeadeyeLevel > 8){
            DeadeyeLevel = 8;
        }else {
            animateDeadeyeLevel();
            console.log('next Deadeye level');
        }
        console.log('Deadeye level = ' + DeadeyeLevel);
    }
    document.getElementById("CountDown3").innerText = 'Deadeye ' + Deadeye;
    clearInterval(TellerFunctionDeadeye); /// vragen Kelvin
    DeadeyeTimer();
}

function DeadeyeTimer(){
    let TellerFunctionDeadeye = setInterval(function () {
        Deadeye--;
        document.getElementById("CountDown3").innerText = 'Deadeye ' + Deadeye;
        if (Deadeye <= 0) {
            clearInterval(TellerFunctionDeadeye);
            document.getElementById("CountDown3").innerText = "Deadeye is drained";
        }
    }, 5000);
}
// Deadeye level start
const DeadeyeLevelWidth = 130;
const DeadeyeLevelHeight = 130;
const DeadeyeLevelBorderWidth = 0;
const DeadeyeLevelSpacingWidth = 0;

function DeadeyeLevelPositionToImage(DeadeyeLevelRow, DeadeyeLevelCol) {
    return {
        x: (
            DeadeyeLevelBorderWidth +
            DeadeyeLevelCol * (DeadeyeLevelSpacingWidth + DeadeyeLevelWidth)
        ),
        y: (
            DeadeyeLevelBorderWidth +
            DeadeyeLevelRow * (DeadeyeLevelSpacingWidth + DeadeyeLevelHeight)
        )
    }
}

let DeadeyeLevelCanvas = document.getElementById('DeadeyeLevel');
let DeadeyeLevelContext = DeadeyeLevelCanvas.getContext('2d');

let DeadeyeLevelImage = new Image();
DeadeyeLevelImage.src = "assets/img/levels/levels.png";
DeadeyeLevelImage.crossOrigin = "true";
DeadeyeLevelCanvas.width = DeadeyeLevelWidth;
DeadeyeLevelCanvas.height = DeadeyeLevelHeight;

let DeadeyeLevelRow = 0;
let DeadeyeLevelCol = 0;

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


    let position = DeadeyeLevelPositionToImage(DeadeyeLevelRow, DeadeyeLevelCol);
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
        DeadeyeLevelWidth,
        DeadeyeLevelHeight,
        0,
        0,
        DeadeyeLevelWidth,
        DeadeyeLevelHeight
    );
    DeadeyeLevelCol += 1;
}

DeadeyeLevelImage.onload = function() {
    animateDeadeyeLevel();
};

// Deadeye level end

// Deadeye core start
const DeadeyeCoreWidth = 70;
const DeadeyeCoreHeight = 70;
const DeadeyeCoreBorderWidth = 0;
const DeadeyeCoreSpacingWidth = 0;

function DeadeyeCorePositionToImage(DeadeyeCoreRow, DeadeyeCoreCol) {
    return {
        x: (
            DeadeyeCoreBorderWidth +
            DeadeyeCoreCol * (DeadeyeCoreSpacingWidth + DeadeyeCoreWidth)
        ),
        y: (
            DeadeyeCoreBorderWidth +
            DeadeyeCoreRow * (DeadeyeCoreSpacingWidth + DeadeyeCoreHeight)
        )
    }
}

let DeadeyeCoreCanvas = document.getElementById('DeadeyeCore');
let DeadeyeCoreContext = DeadeyeCoreCanvas.getContext('2d');

let DeadeyeCoreImage = new Image();
DeadeyeCoreImage.src = "assets/img/stats-middle-icon/Deadeye-core.png";
DeadeyeCoreImage.crossOrigin = "true";
DeadeyeCoreCanvas.width = DeadeyeCoreWidth;
DeadeyeCoreCanvas.height = DeadeyeCoreHeight;

let DeadeyeCoreRow = 0;
let DeadeyeCoreCol = 0;

function animateDeadeyeCore() {
    if (DeadeyeCoreCol === 3) {
        DeadeyeCoreCol = 0;
        DeadeyeCoreRow += 1;
    }
    if (DeadeyeCoreRow === 2) {
        DeadeyeCoreRow = 0;
        DeadeyeCoreCol = 0;
    }


    let position = DeadeyeCorePositionToImage(DeadeyeCoreRow, DeadeyeCoreCol);
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
        DeadeyeCoreWidth,
        DeadeyeCoreHeight,
        0,
        0,
        DeadeyeCoreWidth,
        DeadeyeCoreHeight
    );
    DeadeyeCoreCol += 1;
}

DeadeyeCoreImage.onload = function() {
    // animateDeadeyeCore();
    setInterval(animateDeadeyeCore, 500);
};

// Deadeye core end

// start of Deadeye regen
const DeadeyeRegenWidth = 130;
const DeadeyeRegenHeight = 130;
const DeadeyeRegenBorderWidth = 0;
const DeadeyeRegenSpacingWidth = 0;

function DeadeyeRegenPositionToImage(DeadeyeRegenRow, DeadeyeRegenCol) {
    return {
        x: (
            DeadeyeRegenBorderWidth +
            DeadeyeRegenCol * (DeadeyeRegenSpacingWidth + DeadeyeRegenWidth)
        ),
        y: (
            DeadeyeRegenBorderWidth +
            DeadeyeRegenRow * (DeadeyeRegenSpacingWidth+ DeadeyeRegenHeight)
        )
    }
}

let DeadeyeRegenCanvas = document.getElementById('DeadeyeRegen');
let DeadeyeRegenContext = DeadeyeRegenCanvas.getContext('2d');

let DeadeyeRegenImage = new Image();
DeadeyeRegenImage.src = "assets/img/regen-levels/regen-level0-32.png";
DeadeyeRegenImage.crossOrigin = "true";
DeadeyeRegenCanvas.width = DeadeyeRegenWidth;
DeadeyeRegenCanvas.height = DeadeyeRegenHeight;

let DeadeyeRegenRow = 0;
let DeadeyeRegenCol = 0;

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


    const position = DeadeyeRegenPositionToImage(DeadeyeRegenRow, DeadeyeRegenCol);
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
        DeadeyeRegenWidth,
        DeadeyeRegenHeight,
        0,
        0,
        DeadeyeRegenWidth,
        DeadeyeRegenHeight
    );
    DeadeyeRegenCol += 1;
}

DeadeyeRegenImage.onload = function() {
    // animateDeadeyeRegen();
    setInterval(animateDeadeyeRegen, 500);
};
// end of Deadeye regen

// end of Deadeye

// start daynight
let Sun = -3.125;
let Moon = -3.125;
Day()
function Day(){
    let TellerFunctionSun = setInterval(function () {
        Sun = Sun + 0.625;
        document.getElementById("Sun").style.bottom = Sun + 'em';
        Moon = Moon - 0.625;
        document.getElementById("Moon").style.bottom = Moon + 'em';
        if (Sun > 37.5) {
            document.getElementById("body").style.backgroundColor = "skyblue";
            clearInterval(TellerFunctionSun);
            let TellerFunctionDay = setInterval(function () {

                if (TellerFunctionDay > 3) {
                    clearInterval(TellerFunctionDay)
                    Night()
                }

            }, 3000);
        } else if (Moon > 3.125) {
            document.getElementById("body").style.backgroundColor = "#10103c";
        } else if (Sun < 3.125) {
            document.getElementById("body").style.backgroundColor = "#ea9087";
        } else if (Sun > 3.125) {
            document.getElementById("body").style.backgroundColor = "skyblue";
        } else if (Sun < 0) {
            document.getElementById("body").style.backgroundColor = "#10103c";

        }

    }, 150);
}
function Night(){
    const TellerFunctionMoon = setInterval(function () {
        Sun = Sun - 0.625;
        document.getElementById("Sun").style.bottom = Sun + 'em';
        Moon = Moon + 0.625;
        document.getElementById("Moon").style.bottom = Moon + 'em';
        if (Moon > 37.5) {
            document.getElementById("body").style.backgroundColor = "#10103c";

            clearInterval(TellerFunctionMoon);
            let TellerFunctionNight = setInterval(function () {

                if (TellerFunctionNight > 3) {
                    clearInterval(TellerFunctionNight)
                    Day()
                }

            }, 3000);
        } else if (Sun > 3.125) {
            document.getElementById("body").style.backgroundColor = "skyblue";
        } else if (Moon < 3.125) {
            document.getElementById("body").style.backgroundColor = "orange";
        } else if (Moon > 3.125) {
            document.getElementById("body").style.backgroundColor = "#10103c";
        } else if (Moon < 0) {
            document.getElementById("body").style.backgroundColor = "skyblue";
        }

    }, 150);
}
// end daynight
// start clouds
let Clouds = [
    {id: "Cloud1", left: 12.5},
    {id: "Cloud2", left: 62.5},
    {id: "Cloud3", left: 46.875},
    {id: "Cloud4", left: 6.25},
    {id: "Cloud5", left: 50},
    {id: "Cloud6", left: 87.5}
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

let CloudCounter = setInterval(function () {
    Clouds.forEach(updateCloud);
}, 250);
// end clouds
// start music
const StartButton = document.getElementById('StartBtn');
const Box = document.getElementById('Box');
const BackgroundMusic = document.getElementById('BackgroundMusic');
const body = document.body;

StartButton.addEventListener('click', () => {
    BackgroundMusic.play();
    Box.classList.add('hidden');
    body.style.filter = 'none';
});
// end music
// Sprite Arthur

const ArthurWidth = 320;
const ArthurHeight = 320;
const ArthurBorderWidth = 0;
const ArthurSpacingWidth = 0;

function arthurPositionToImage(ArthurRow, ArthurCol) {
    return {
        x: (
            ArthurBorderWidth +
            ArthurCol * (ArthurSpacingWidth + ArthurWidth)
        ),
        y: (
            ArthurSpacingWidth +
            ArthurRow * (ArthurSpacingWidth + ArthurHeight)
        )
    }
}

let ArthurCanvas = document.getElementById('ArthurCanvas');
let ArthurContext = ArthurCanvas.getContext('2d');

let ArthurImage = new Image();
ArthurImage.src = "assets/img/Arthur-Morgan/Arthur-Morgan-sprite1.png";
ArthurCanvas.width = ArthurWidth;
ArthurCanvas.height = ArthurHeight;

let ArthurRow = 0;
let ArthurCol = 0;

function animateArthur() {
    if (ArthurCol === 3) {
        ArthurCol = 0;
        ArthurRow += 1;
    }
    if (ArthurRow === 2) {
        ArthurRow = 0;
    }


    let position = arthurPositionToImage(ArthurRow, ArthurCol);
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
        ArthurWidth,
        ArthurHeight,
        0,
        0,
        ArthurWidth,
        ArthurHeight
    );
    ArthurCol += 1;
}

ArthurImage.onload = function() {
    setInterval(animateArthur, 500);
};
// end arthur