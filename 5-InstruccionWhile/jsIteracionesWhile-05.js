/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let sexo
  
   sexo = prompt(" mencione su sexo, F o M")
   
   while( sexo != "f" &&  sexo != "m" ){

      sexo = prompt("incorrecto").
      }
   document.getElementById("txtSexo").value = sexo
}
