/*
SILVERO CHRISTIAN 1°H
ejercicio 01:
  se ingresa nombre del producto, el importe y el porcentaje de aumento a aplicar(por prompt).
  y semuestra el siguient mensaje(por alert):
  "el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"
*/

function mostrar() {
  var producto;
  var importe;
  var porcentaje;
  var aumento;
  var importeTotal;

  producto = prompt("Ingrese un producto");
  importe = prompt("Ingrese un importe");
  importe = parseInt(importe);

  porcentaje = prompt("Ingrese un porcentaje de aumento");
  porcentaje = parseInt(porcentaje);

  aumento = (importe * porcentaje) / 100;
  importeTotal = importe + aumento;

  alert(
    "el producto " +
      producto +
      " cuesta $" +
      importe +
      " sin aumento, tiene aumento de $" +
      porcentaje +
      " y el precio final es: $" +
      importeTotal +
      ", gracias por su compra"
  );
}
