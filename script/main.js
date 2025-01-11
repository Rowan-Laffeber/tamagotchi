var hunger = 100;
var energy = 100;
var deadeye = 100;
hunger_timer()
energy_timer()
deadeye_timer()
function eat() {
    if(hunger > 100){
        hunger = hunger
    } else if (hunger > 95){
        hunger = 100
    } else {
        hunger = hunger + 5
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
var sun = -50;
var moon = -50;
day()
function day(){
    var teller_fuction_sun = setInterval(function () {
        sun=sun + 10;
        document.getElementById("sun").style.bottom = sun + 'px';
        moon=moon - 10;
        document.getElementById("moon").style.bottom = moon + 'px';
        if (sun > 600){
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
        sun=sun - 10;
        document.getElementById("sun").style.bottom = sun + 'px';
        moon=moon + 10;
        document.getElementById("moon").style.bottom = moon + 'px';
        if (moon > 600){
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
var cloud1 = 200;
var teller_fuction_cloud = setInterval(function () {
    cloud1=cloud1 + 10;
    if (cloud1 < 1540){
        document.getElementById("cloud1").style.left = cloud1 + 'px';
    } else{
        cloud1 = -250;
        document.getElementById("cloud1").style.left = cloud1 + 'px';
    }

}, 250);
var cloud2 = 1000;
var teller_fuction_cloud = setInterval(function () {
    cloud2=cloud2 + 10;
    if (cloud2 < 1540){
        document.getElementById("cloud2").style.left = cloud2 + 'px';
    } else{
        cloud2 = -250;
        document.getElementById("cloud2").style.left = cloud2 + 'px';
    }

}, 250);
var cloud3 = 750;
var teller_fuction_cloud = setInterval(function () {
    cloud3=cloud3 + 10;
    if (cloud3 < 1540){
        document.getElementById("cloud3").style.left = cloud3 + 'px';
    } else{
        cloud3 = -250;
        document.getElementById("cloud3").style.left = cloud3 + 'px';
    }

}, 250);
var cloud4 = 100;
var teller_fuction_cloud = setInterval(function () {
    cloud4=cloud4 + 10;
    if (cloud4 < 1540){
        document.getElementById("cloud4").style.left = cloud4 + 'px';
    } else{
        cloud4 = -250;
        document.getElementById("cloud4").style.left = cloud4 + 'px';
    }

}, 250);
var cloud5 = 800;
var teller_fuction_cloud = setInterval(function () {
    cloud5=cloud5 + 10;
    if (cloud5 < 1540){
        document.getElementById("cloud5").style.left = cloud5 + 'px';
    } else{
        cloud5 = -250;
        document.getElementById("cloud5").style.left = cloud5 + 'px';
    }

}, 250);
var cloud6 = 1400;
var teller_fuction_cloud = setInterval(function () {
    cloud6=cloud6 + 10;
    if (cloud6 < 1540){
        document.getElementById("cloud6").style.left = cloud6 + 'px';
    } else{
        cloud6 = -250;
        document.getElementById("cloud6").style.left = cloud6 + 'px';
    }

}, 250);

// function insert_arthur(){
//     var src = document.getElementById("Arthur");
//     var img = document.createElement("img");
//     img.src = "ArthurMorgan/ArthurMorgan-right.png";
// }
// insert_arthur();