
const luku1 = parseInt(prompt("Anna ensimmäinen kokonaisluku:"));
const luku2 = parseInt(prompt("Anna toinen kokonaisluku:"));
const luku3 = parseInt(prompt("Anna kolmas kokonaisluku:"));

const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const keskiarvo = summa / 3;

document.getElementById("tulos").innerHTML =
    "Summa: " + summa + "<br>" +
    "Tulo: " + tulo + "<br>" +
    "Keskiarvo: " + keskiarvo;
