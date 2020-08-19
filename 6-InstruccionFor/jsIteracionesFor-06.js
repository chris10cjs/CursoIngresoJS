/* Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */

function mostrar()
{
	var numeroIngresado;
	var numerosPares;

	numerosPares = 0;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	for(var contador = 1; contador < numeroIngresado; contador++)
	{
		if(contador % 2 == 0)
		{
			numerosPares = numerosPares + 1;
			document.write(contador + " ");
		}
	}

	document.write("<br>Cantidad de numeros pares: " + numerosPares);
}