/*
SILVERO CHRISTIAN 1°H
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar() {
  var edad;

  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (edad > 12 && edad < 18) {
    alert("Es adolecente");
  } else if (edad < 13) {
    alert("Es un niño");
  } else {
    alert("Es mayor de edad");
  }
}
