/*
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
  var edad;

  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if (!(edad > 12 && edad < 18))
  {
    alert("No es adolecente");
  }

  /*

	if (edad < 13 || edad > 17) {
		alert("No es adolecente");
	}

	if (edad > 12 && edad < 18) {
  } else {
    alert("No es adolecente");
	}

	*/
}
