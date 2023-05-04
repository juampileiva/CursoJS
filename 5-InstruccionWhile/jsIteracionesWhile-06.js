function mostrar() {
  let i = 0;
  let promedio;
  let suma;
let total = 0;

  while (i  < 5) {
    
    total += parseInt(prompt(" ingrese 1 numero"));
    
    document.getElementById("txtSuma").value = total;
   document.getElementById("txtPromedio").value = total / 5;
    i++
  }
  
}

//   let promedio;
//   let suma;

//   num1 = parseInt(prompt(" ingrese 1 numero"));

//   suma = num1 + num2 + num3 + num4 + num5;
//   promedio = suma / 5;

//   document.getElementById("txtSuma").value = suma;
//   document.getElementById("txtPromedio").value = promedio;
// }
