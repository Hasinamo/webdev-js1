
const nimi = prompt("Mikä sinun nimesi on?");

const numero = Math.floor(Math.random() * 4) + 1;

let tupa;

if (numero === 1) {
    tupa = "Rohkelikko";
} else if (numero === 2) {
    tupa = "Luihuinen";
} else if (numero === 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}

document.getElementById("tulos").textContent =
    nimi + ", sinä olet " + tupa + ".";
