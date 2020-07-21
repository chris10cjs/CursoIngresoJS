/*SILVERO CHRISTIAN 1°H
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar() {
  var numero;
  numero = Math.floor(Math.random() * 10) + 1;

  if (numero == 9 && numero == 10) {
    alert(numero + " EXELENTE");
  } else if (numero > 3) {
    alert(numero + " APROBÓ");
  } else {
    alert(numero + " Vamos, la próxima se puede");
  }
}
