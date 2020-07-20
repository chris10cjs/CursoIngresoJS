/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento() {
  /*las variables son destructivas
  var nombre; (declaración)
  nombre = "Chris"; (inicialización)
  nombre = "Javier"; (reasignación)
  */

  var importe;
  var descuento;

  importe = txtIdImporte.value;
  importe = parseInt(txtIdImporte.value);

  descuento = importe * 0.25;

  //alert("literal");
  alert("El descuento del importe es: " + descuento);

  txtIdResultado.value = importe - descuento;
}

//txtIdImporte
//txtIdResultado
