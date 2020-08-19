/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		respuesta = confirm("Desea ingresar otro numero?");

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado; 
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}