var botonFut = document.getElementById("botonFut");
var botonBasquet = document.getElementById("botonBasquet");
var botonTennis = document.getElementById("botonTennis");

botonFut.addEventListener("click", mostrarCanchaFut);
botonBasquet.addEventListener("click", mostrarCanchaBasquet);
botonTennis.addEventListener("click", mostrarCanchaTennis);

function mostrarCanchaFut() {
   var futbol = document.getElementById("cancha1");

   if(futbol.style.display == "block"){
      futbol.style.display = "none";
   }else{
      futbol.style.display = "block";
   }
}

function mostrarCanchaBasquet() {
   var basquet = document.getElementById("cancha2");
   if(basquet.style.display == "block"){
      basquet.style.display = "none";
   }else{
      basquet.style.display = "block";
   }
}

function mostrarCanchaTennis() {
   var tennis = document.getElementById("cancha3");

   if(tennis.style.display == "block"){
      tennis.style.display = "none"
   }else{
     tennis.style.display = "block";
   }
}
