/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
  var numeroUno;
  var numeroDos;
  var resultado;

  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  resultado = numeroUno + numeroDos;

  alert("El resultado de la operación es: " + resultado);
}

function restar() {
  var numeroUno;
  var numeroDos;
  var resultado;

  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  resultado = numeroUno - numeroDos;

  alert("El resultado de la operación es: " + resultado);
}

function multiplicar() {
  var numeroUno;
  var numeroDos;
  var resultado;

  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  resultado = numeroUno * numeroDos;

  alert("El resultado de la operación es: " + resultado);
}

function dividir() {
  var numeroUno;
  var numeroDos;
  var resultado;

  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  resultado = numeroUno / numeroDos;

  alert("El resultado de la operación es: " + resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos
