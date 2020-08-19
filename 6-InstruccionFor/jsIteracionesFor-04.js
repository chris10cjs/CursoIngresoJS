/* Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'. */

function mostrar()
{
/* 	var repeticiones;

	for(var contador = 0; ;contador++)
	{
		repeticiones = prompt("Repeticiones ");
		repeticiones = repeticiones.toUpperCase();
		
		if(repeticiones == "BREAK")
		{
			break;
		}
	} */

/* 	Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log() */

	var raza;
	var peso;
	var temperatura;
	var edad;
	var peligroExtincion;
	var respuesta;
	var acumuladorEdad;
	var contadorAnimales;
	var promedioTotalEdad;
	var pesoMax;
	var razaPesoMax;
	var temperaturaMax;

	respuesta = true;
	acumuladorEdad = 0;
	contadorAnimales = 0;
	pesoMax = 0;
	temperaturaMax = 0;

	do
	{
		//*ingresos y validaciones
		raza = prompt("Indique raza: ");
	
		peso = prompt("Indique peso: ");
		peso = parseInt(peso);
	
		temperatura = prompt("Indique temperatura: ");
		temperatura = parseInt(temperatura);
	
		edad = prompt("Indique edad: ");
		edad = parseInt(edad);
	
		peligroExtincion = prompt("Indique si está en peligro de extinción: ");
		while(peligroExtincion != "si" && peligroExtincion != "no")
		{
			peligroExtincion = prompt("Error! indique si está en peligro de extinción: ");
		}
		//2-la raza del más pesado
		if(contadorAnimales == 0 || peso > pesoMax)
		{
			pesoMax = peso;
			razaPesoMax = raza;
		}
		
		//3-la temperatura máxima ingresada de los animales en extinción
		switch(peligroExtincion)
		{
			case "si":
				if(contadorAnimales == 0 || temperatura > temperaturaMax)
				{
					temperaturaMax = temperatura;
				}
				break;
			}
			
		//1-edad total
		acumuladorEdad = acumuladorEdad + edad;
		contadorAnimales++;

		//*ingreso de cantidad de animales indeterminada
		respuesta = confirm("¿Desea ingresar más animales? ");

	} while(respuesta);

	//1-el promedio de edad total
	promedioTotalEdad = acumuladorEdad / contadorAnimales;

	console.log("El promedio total de edad de los animales es: " + promedioTotalEdad);
	console.log("La raza del más pesado es: " + razaPesoMax);
	console.log("La temperatura máxima ingresada de los animales en extinción es: " + temperaturaMax);

}