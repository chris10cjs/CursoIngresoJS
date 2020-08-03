/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var i;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	i = 0;
	acumulador = 0;
	respuesta = true; //forzar a ejecutarse 1 vez


	while(respuesta == true) //variable de estado
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		//acumulador = acumulador + numeroIngresado;
		acumulador += numeroIngresado;
		i++;

		respuesta = confirm("Desea ingresar otro numero?");
	}

	promedio = acumulador / i;
	promedio = promedio.toFixed(2);

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}