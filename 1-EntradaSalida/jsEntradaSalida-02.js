/*
SILVERO CHRISTIAN
ejercicio 03:
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, el mensaje deberia ser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $280 ,el iva es de $79,8 y el precio final con IVA es $459,8"
*/

function mostrar() {
  var importeUno;
  var importeDos;
  var porcentaje;
  var importeTotal;
  var descuento;
  var precioTotalConDescuento;
  var iva;
  var precioFinal;

  importeUno = prompt("Ingrese el primer importe");
  importeUno = parseInt(importeUno);
  importeDos = prompt("Ingrese el segundo importe");
  importeDos = parseInt(importeDos);
  porcentaje = prompt("Ingrese el porcentaje de descuento");
  porcentaje = parseInt(porcentaje);

  importeTotal = importeUno + importeDos;
  descuento = (importeTotal * porcentaje) / 100;
  precioTotalConDescuento = importeTotal - descuento;
  iva = precioTotalConDescuento * 0.21;
  precioFinal = precioTotalConDescuento + iva;

  alert(
    "los productos cuestan $" +
      importeUno +
      " y $" +
      importeDos +
      " , sumados son $" +
      importeTotal +
      " ,tienen un descuento de $" +
      descuento +
      " pesos, el precio total con descuento es $" +
      precioTotalConDescuento +
      ",el iva es de $" +
      iva +
      " y el precio final con IVA es $" +
      precioFinal
  );
}
