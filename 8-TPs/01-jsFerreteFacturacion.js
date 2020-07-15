/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar() {
  var precioProductoUno;
  var precioProductoDos;
  var precioProductoTres;
  var resultado;

  precioProductoUno = txtIdPrecioUno.value;
  precioProductoDos = txtIdPrecioDos.value;
  precioProductoTres = txtIdPrecioTres.value;

  precioProductoUno = parseFloat(precioProductoUno);
  precioProductoDos = parseFloat(precioProductoDos);
  precioProductoTres = parseFloat(precioProductoTres);

  resultado = precioProductoUno + precioProductoDos + precioProductoTres;

  alert("El precio total de los productos es: " + resultado.toFixed(2));
}

function Promedio() {
  var precioProductoUno;
  var precioProductoDos;
  var precioProductoTres;
  var resultado;
  var promedio;

  precioProductoUno = txtIdPrecioUno.value;
  precioProductoDos = txtIdPrecioDos.value;
  precioProductoTres = txtIdPrecioTres.value;

  precioProductoUno = parseFloat(precioProductoUno);
  precioProductoDos = parseFloat(precioProductoDos);
  precioProductoTres = parseFloat(precioProductoTres);

  resultado = precioProductoUno + precioProductoDos + precioProductoTres;
  promedio = resultado / 3;

  alert("El promedio de los productos es: " + promedio.toFixed(2));
}

function PrecioFinal() {
  var precioProductoUno;
  var precioProductoDos;
  var precioProductoTres;
  var resultado;
  var finalMasIva;

  precioProductoUno = txtIdPrecioUno.value;
  precioProductoDos = txtIdPrecioDos.value;
  precioProductoTres = txtIdPrecioTres.value;

  precioProductoUno = parseFloat(precioProductoUno);
  precioProductoDos = parseFloat(precioProductoDos);
  precioProductoTres = parseFloat(precioProductoTres);

  resultado = precioProductoUno + precioProductoDos + precioProductoTres;
  finalMasIva = resultado * 1.21;

  alert("El precio final más IVA es: " + finalMasIva.toFixed(2));
}
