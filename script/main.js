var hunger = 100;
var energy = 100;
var deadeye = 100;
hunger_timer()
energy_timer()
deadeye_timer()
function eat() {
    hunger = hunger + 5;
    document.getElementById("countdown1").innerText = 'hunger ' + hunger;
    hunger_timer()
}
function sleep() {
    energy = 100;
    document.getElementById("countdown2").innerText = 'energy ' + energy;
    energy_timer()
}
function smoke() {
    deadeye = 100;
    document.getElementById("countdown3").innerText = 'deadeye ' + deadeye;
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


// function insert_arthur(){
//     var src = document.getElementById("Arthur");
//     var img = document.createElement("img");
//     img.src = "ArthurMorgan/ArthurMorgan-right.png";
// }
// insert_arthur();