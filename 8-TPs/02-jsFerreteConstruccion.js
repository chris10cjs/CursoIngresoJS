/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  var largoDelTerreno;
  var anchoDelTerreno;
  var perimetro;
  var resultado;

  largoDelTerreno = txtIdLargo.value;
  anchoDelTerreno = txtIdAncho.value;
  largoDelTerreno = parseFloat(largoDelTerreno);
  anchoDelTerreno = parseFloat(anchoDelTerreno);

  perimetro = 2 * largoDelTerreno + 2 * anchoDelTerreno;
  resultado = perimetro * 3;

  alert("La cantidad de alambre a comprar es: " + resultado.toFixed(2));
}

function Circulo() {
  var radioDelTerreno;
  var perimetro;
  var resultado;

  largoDelTerreno = txtIdLargo.value;
  anchoDelTerreno = txtIdAncho.value;
  largoDelTerreno = parseFloat(largoDelTerreno);
  anchoDelTerreno = parseFloat(anchoDelTerreno);

  perimetro = 2 * Math.PI * radioDelTerreno;
  resultado = perimetro * 3;

  alert("La cantidad de alambre a comprar es: " + resultado.toFixed(2));
}

function Materiales() {
  var largoDelTerreno;
  var anchoDelTerreno;
  var cantidadDeCemento;
  var cantidadDeCal;

  largoDelTerreno = txtIdLargo.value;
  anchoDelTerreno = txtIdAncho.value;
  largoDelTerreno = parseFloat(largoDelTerreno);
  anchoDelTerreno = parseFloat(anchoDelTerreno);

  cantidadDeCemento = largoDelTerreno * anchoDelTerreno * 2;
  cantidadDeCal = largoDelTerreno * anchoDelTerreno * 3;

  alert(
    "La cantidad de cemento es: " +
      cantidadDeCemento +
      " y la cantidad de cal es: " +
      cantidadDeCal
  );
}
