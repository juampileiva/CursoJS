/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let numero1;
  let numero2;
  let suma;
  //tmb puede ser parseInt(document.getElementById("txtNumeroUno").value) y se hace todo en 1 linea
  numero1 = document.getElementById("txtNumeroUno").value;
  numero1 = parseInt(numero1);
  numero2 = document.getElementById("txtNumeroDos").value;
  numero2 = parseInt(numero2);
  suma = numero1 + numero2;
  alert("la suma es " + suma);
}