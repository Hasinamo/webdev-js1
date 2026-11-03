
const maara = parseInt(prompt("Montako kertaa heitetään noppaa?"));

let summa = 0;

for (let i = 0; i < maara; i++) {
    const silmaluku = Math.floor(Math.random() * 6) + 1;
    summa = summa + silmaluku;
}

document.getElementById("tulos").textContent =
    "Nopanheittojen summa on: " + summa;
