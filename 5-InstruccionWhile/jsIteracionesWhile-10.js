/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadNumerosPares = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos++;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		if(numeroIngresado % 2 == 0)
		{
			cantidadNumerosPares++;
		}

		promedioNegativos = sumaNegativos / cantidadNegativos;
		promedioNegativos = promedioNegativos.toFixed(2);
		promedioPositivos = sumaPositivos / cantidadPositivos;
		promedioPositivos = promedioPositivos.toFixed(2);
		diferenciaPositivosNegativos = cantidadPositivos - cantidadNegativos;

		respuesta = confirm("desea ingresar otro número? ");

	} while(respuesta == true);

	document.write("la suma de negativos es: " + sumaNegativos + "<br>");
	document.write("la suma de positivos es: " + sumaPositivos + "<br>");
	document.write("la cantidad de negativos es: " + cantidadNegativos + "<br>");
	document.write("la cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write("la cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("la cantidad de numeros pares es: " + cantidadNumerosPares + "<br>");
	document.write("el promedio de numeros negativos es: " + promedioNegativos + "<br>");
	document.write("el promedio de numeros positivos es: " + promedioPositivos + "<br>");
	document.write("la diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + "<br>");
	
}