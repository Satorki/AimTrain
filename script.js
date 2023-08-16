// ALL UI PARAMETERS
let ammo = 32;
let armor = 100;
let health = 100;
let kills = 0;

ammoutReload = () => {
    document.getElementById("ammoAmmout").innerHTML = ammo = 32;
    document.getElementById("armorAmmout").innerHTML = armor;
    document.getElementById("healthAmmout").innerHTML = health;
    document.getElementById("killsAmmout").innerHTML = kills = 0;
}


// FIRE FUNCTIONS
fire = () => {
    ammo = ammo - 1;
    if (ammo < 0) {
        document.getElementById("timer").innerHTML = "Out of ammo";
    } else {
        document.getElementById("ammoAmmout").innerHTML = ammo;
    }
}



// ENEMY FUNCTIONS
disapearEnemies = () => {
    document.getElementById("enemy1").style.display = "none";
    document.getElementById("enemy2").style.display = "none";
    document.getElementById("enemy3").style.display = "none";
    document.getElementById("enemy4").style.display = "none";
    document.getElementById("go").style.display = "none";
}

let time = 30;
timerShow = () => {
    if ((time > 0) && (ammo >= 0)) {
        document.getElementById("timer").innerHTML = time + " sec";
        time--;
        let x = Math.floor(Math.random() * 5);
        document.getElementById("enemy" + x).style.display = "block";
    } else if (time === 0){
        document.getElementById("timer").innerHTML = "Time is up";
        document.getElementById("go").style.display = "block";
    } else if (ammo === 0){
        document.getElementById("timer").innerHTML = "Out of ammo";
    }

}

timerShowStart = () => {
    if (time === 30) {
        setInterval(timerShow, 1000);
    } else {
        time = 30;
    }
}


getKills1 = () => {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy1").style.display = "none";
}

getKills2 = () => {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy2").style.display = "none";
}

getKills3 = () => {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy3").style.display = "none";
}

getKills4 = () => {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy4").style.display = "none";
}

enemy = () => {
    document.getElementById("enemy1").addEventListener("click",getKills1);
    document.getElementById("enemy2").addEventListener("click",getKills2);
    document.getElementById("enemy3").addEventListener("click",getKills3);
    document.getElementById("enemy4").addEventListener("click",getKills4);
}
