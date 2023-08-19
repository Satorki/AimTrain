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

// document.getElementById('parentOfElementToBeRedrawn').style.display = 'none';
// document.getElementById('parentOfElementToBeRedrawn').style.display = 'block';
// document.getElementById("battle:active").style.cursor = "url("./ui/crosshairshoot1.png") 20 20, auto";


// FIRE FUNCTIONS
fire = () => {
    let x = Math.floor(Math.random() * 3) + 1;
    let link = "/ui/crosshairshoot" + x + ".png";
    ammo = ammo - 1;
    if (ammo < 0) {
        document.getElementById("timer").innerHTML = "Out of ammo";
    } else {
        document.getElementById("ammoAmmout").innerHTML = ammo;
        document.getElementById("battle").style.cursor = 'url('+link+') 20 20, auto';
    }
    setTimeout(function(){
        document.getElementById("battle").style.cursor = 'url("./ui/crosshair1.png") 20 20,auto';}, 100)

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
        let x = Math.floor(Math.random() * 5)+1;
        let show = document.getElementById("enemy" + x);
        show.style.display = "block";

        setTimeout(function(){
                show.innerHTML = '<img src="./enemy/ct2fire1.png">';
            }, 1000);
        
                // if (armor > 0) {
                //     armor = armor - 25
                //     health = health - 12;
                // } else {
                //     health = health - 30;
                // }
                // document.getElementById("armorAmmout").innerHTML = armor;
                // document.getElementById("healthAmmout").innerHTML = health;
        
               
        // if (health <= 0) {
        //     return document.getElementById("healthAmmo").innerHTML = "GAME OVER";
        // }













        

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
    if (ammo > 0) {
    kills = kills + 1;
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy1").style.display = "none";
    }
}

getKills2 = () => {
    if (ammo > 0) {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy2").style.display = "none";          
    }

}

getKills3 = () => {
    if (ammo > 0) {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy3").style.display = "none";
    }
}

getKills4 = () => {
    if (ammo > 0) {
    kills = kills + 1
    document.getElementById("killsAmmout").innerHTML = kills;
    document.getElementById("enemy4").style.display = "none";
    }
}


enemy = () => {
    document.getElementById("enemy1").addEventListener("click",getKills1);
    document.getElementById("enemy2").addEventListener("click",getKills2);
    document.getElementById("enemy3").addEventListener("click",getKills3);
    document.getElementById("enemy4").addEventListener("click",getKills4);
}