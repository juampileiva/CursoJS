/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let numero
  

  numero= prompt (" ingrese numero")

while( numero > 9 || numero < 0 || isNaN (numero)){

  numero = prompt (" incorrecta")
}
alert("correcto")
}
