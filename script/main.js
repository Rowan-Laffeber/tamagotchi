var hunger = 100;
var energy = 100;
var deadeye = 100;
hunger_timer()
energy_timer()
deadeye_timer()
var eatcounter = 0;
document.getElementById("hungerlevel1").style.display = "block";
var sleepcounter = 0;
document.getElementById("energylevel1").style.display = "block";
var smokecounter = 0;
document.getElementById("deadeyelevel1").style.display = "block";
function eat() {
    if(hunger > 100){
        hunger = hunger
    } else if (hunger > 95){
        hunger = 100
    } else {
        hunger = hunger + 5
    }
    eatcounter = eatcounter + 1;
    if(eatcounter >= 70){
        document.getElementById("hungerlevel8").style.display = "block";
    } else if (eatcounter >= 60){
        document.getElementById("hungerlevel7").style.display = "block";
    } else if (eatcounter >= 50){
        document.getElementById("hungerlevel6").style.display = "block";
    } else if (eatcounter >= 40){
        document.getElementById("hungerlevel5").style.display = "block";
    } else if (eatcounter >= 30){
        document.getElementById("hungerlevel4").style.display = "block";
    } else if (eatcounter >= 20){
        document.getElementById("hungerlevel3").style.display = "block";
    } else if (eatcounter >= 10){
        document.getElementById("hungerlevel2").style.display = "block";
    }
    document.getElementById("countdown1").innerText = 'hunger ' + hunger;
    clearInterval(teller_fuction_hunger);
    hunger_timer()
}
function sleep() {
    if(energy > 100){
        energy = energy
    } else if (energy > 95){
        energy = 100
    } else {
        energy = energy + 5
    }
    sleepcounter = sleepcounter + 1;
    if(sleepcounter >= 70){
        document.getElementById("energylevel8").style.display = "block";
    } else if (sleepcounter >= 60){
        document.getElementById("energylevel7").style.display = "block";
    } else if (sleepcounter >= 50){
        document.getElementById("energylevel6").style.display = "block";
    } else if (sleepcounter >= 40){
        document.getElementById("energylevel5").style.display = "block";
    } else if (sleepcounter >= 30){
        document.getElementById("energylevel4").style.display = "block";
    } else if (sleepcounter >= 20){
        document.getElementById("energylevel3").style.display = "block";
    } else if (sleepcounter >= 10){
        document.getElementById("energylevel2").style.display = "block";
    }
    document.getElementById("countdown2").innerText = 'energy ' + energy;
    clearInterval(teller_fuction_energy);
    energy_timer()
}
function smoke() {
    if(deadeye > 100){
        deadeye = deadeye
    } else if (deadeye > 95){
        deadeye = 100
    } else {
        deadeye = deadeye + 5
    }
    smokecounter = smokecounter + 1;
    if(smokecounter >= 70){
        document.getElementById("deadeyelevel8").style.display = "block";
    } else if (smokecounter >= 60){
        document.getElementById("deadeyelevel7").style.display = "block";
    } else if (smokecounter >= 50){
        document.getElementById("deadeyelevel6").style.display = "block";
    } else if (smokecounter >= 40){
        document.getElementById("deadeyelevel5").style.display = "block";
    } else if (smokecounter >= 30){
        document.getElementById("deadeyelevel4").style.display = "block";
    } else if (smokecounter >= 20){
        document.getElementById("deadeyelevel3").style.display = "block";
    } else if (smokecounter >= 10){
        document.getElementById("deadeyelevel2").style.display = "block";
    }
    document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
    clearInterval(teller_fuction_deadeye);
    deadeye_timer()
}
function hunger_timer(){
    var teller_fuction_hunger = setInterval(function () {
        hunger--;
        document.getElementById("countdown1").innerText = 'hunger ' + hunger;
        if (hunger <= 0) {
            clearInterval(teller_fuction_hunger);
            document.getElementById("countdown1").innerText = "you are dead";
        }
        else if (hunger < 51){
            document.getElementById("speech-bubble").style.display = "block";
        }else{
            document.getElementById("speech-bubble").style.display = "none";
        }
    }, 1000);
}

function energy_timer(){
    var teller_fuction_energy = setInterval(function () {
        energy--;
        document.getElementById("countdown2").innerText = 'energy ' + energy;
        if (energy <= 0) {
            clearInterval(teller_fuction_energy);
            document.getElementById("countdown2").innerText = "you are dead";
        }
    }, 3000);
}
function deadeye_timer(){
    var teller_fuction_deadeye = setInterval(function () {
        deadeye--;
        document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
        if (deadeye <= 0) {
            clearInterval(teller_fuction_deadeye);
            document.getElementById("countdown3").innerText = "deadeye is drained";
        }
    }, 5000);
}
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
window.addEventListener("BackgroundMusic",
    () => {
        const backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.volume = 100;
            console.log("Play");

    });
// function insert_arthur(){
//     var src = document.getElementById("Arthur");
//     var img = document.createElement("img");
//     img.src = "ArthurMorgan/ArthurMorgan-right.png";
// }
// insert_arthur();
// end clouds