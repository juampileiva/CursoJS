/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1
    let numero2
    let suma
numero1 = document.getElementById ("txtNumeroUno").value;

numero1 = parseInt(numero1)
//cuando pones parseint te cambia a numero . porque sino te queda 2 + 3 = 23. y de esta manera te lo cambia a numero y te pone el resultado original
numero2 = document.getElementById ("txtNumeroDos").value;
numero2 = parseInt(numero2)
   suma = numero1 + numero2 

alert("la suma es: " + suma  )
    




}

