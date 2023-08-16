let a = 99;

ammoAmmoutReload = () => {
    document.getElementById("ammoAmmout").innerHTML = a;
}

fire = () => {
    a = a - 1;
    return document.getElementById("ammoAmmout").innerHTML = a;
}