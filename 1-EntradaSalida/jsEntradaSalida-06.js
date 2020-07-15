/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar() {
  var numeroUno;
  var numeroDos;
  var suma;

  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);

  suma = numeroUno + numeroDos;

  alert(suma);
}
