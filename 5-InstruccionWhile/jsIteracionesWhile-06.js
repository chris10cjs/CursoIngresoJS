/* Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */

function mostrar()
{
	var i; //variable de control
	var acumulador;
	var numeroIngresado;
	var promedio;

	i=0;
	acumulador=0;

	while(i < 5)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		i++;
	}
	
	promedio = acumulador/i;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}