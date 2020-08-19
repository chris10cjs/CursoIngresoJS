/* Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados. */

function mostrar()
{
	var numeroIngresado;
	var numerosDivisores;

	numerosDivisores = 0;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	for(var contador = 1; contador < numeroIngresado; contador++)
	{
		if(numeroIngresado % contador == 0)
		{
			numerosDivisores = numerosDivisores + 1;
			document.write(contador + " ");
		}
	}

	document.write("<br>Cantidad de numeros divisores: " + numerosDivisores);


}