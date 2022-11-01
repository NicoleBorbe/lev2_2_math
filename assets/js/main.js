function fenster() {
    let number = window.prompt("Geben Sie eine Zahl zwischen 1 und 10 ein:");
    console.log(number);
};
fenster();

function random() {
    let number = window.prompt;
    let randomNum1_10 = Math.ceil(Math.random() * 10);
    console.log(randomNum1_10);
    if (randomNum1_10 == number.value) {
        console.log("Du hast gewonnen! Du hast richtig geraten.");
    } else {
        console.log("Du hast leider verloren! Die richtige Zahl lautet " + randomNum1_10);
    } 
};
random();