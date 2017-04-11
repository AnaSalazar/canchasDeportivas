var botonFut = document.getElementById("botonFut");
var botonBasquet = document.getElementById("botonBasquet");
var botonTennis = document.getElementById("botonTennis");

botonFut.addEventListener("click", mostrarCanchaFut);
botonBasquet.addEventListener("click", mostrarCanchaBasquet);
botonTennis.addEventListener("click", mostrarCanchaTennis);

function mostrarCanchaFut() {
   var futbol = document.getElementById("cancha1");
   futbol.style.display = "block";
}

function mostrarCanchaBasquet() {
   var basquet = document.getElementById("cancha2");
   basquet.style.display = "block";
}

function mostrarCanchaTennis() {
   var tennis = document.getElementById("cancha3");
   tennis.style.display = "block";
}
