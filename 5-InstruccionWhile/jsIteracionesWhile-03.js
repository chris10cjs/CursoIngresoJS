/*
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while (claveIngresada != "utn750") //no quiero que se cumpla
	{
		claveIngresada = prompt("ERROR! ingrese el número clave.");
	}
}