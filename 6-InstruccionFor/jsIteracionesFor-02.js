/* Enunciado:
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1. */

function mostrar()
{
/* 	for(var contador = 10; contador > 0; contador = contador - 1)
	{
		document.write(contador + "<br>");
	} */

/*
	Christian Silvero 1°H
	Enunciado
	a)”bandera a full”
	de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
	sexo
	altura
	edad
	nombre
	se debe informar:
	1-el nombre de la más alta de las mujeres
	2-el nombre del  más viejo de los hombres 
	3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
	NOTA:pedir datos por "prompt()" y mostrar por console.log() */

	var nombre;
	var sexo;
	var altura;
	var edad;

	var alturaMaxMujer;
	var nombreMujerAlta;
	var edadMaxHombre;
	var nombreHombreViejo;
	var primerAdolecente;

	var banderaMujerAlta;
	var banderaHombreViejo;
	var banderaPrimerAdolecente;
	var respuesta;

	banderaMujerAlta = true;
	banderaHombreViejo = true;
	banderaPrimerAdolecente = true;
	alturaMaxMujer = 0;
	edadMaxHombre = 0;

	do
	{
		nombre = prompt("Ingrese su nombre: ");

		sexo = prompt("Ingrese sexo: ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error! ingrese sexo: ");
		}

		altura = prompt("Ingrese altura: ");
		altura = parseInt(altura);

		while(altura < 0)
		{
			altura = prompt("Error! ingrese altura: ");
			altura = parseInt(altura);
		}

		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);

		while(edad < 0 || edad > 99)
		{
			edad = prompt("Error! ingrese edad: ");
			edad = parseInt(edad);
		}

		respuesta = confirm("¿Desea ingresar más datos? ");

		switch(sexo)
		{
			case "f":
				//	1-el nombre de la más alta de las mujeres
				if(banderaMujerAlta == true || altura > alturaMaxMujer)
				{
					alturaMaxMujer = altura;
					nombreMujerAlta = nombre;
					banderaMujerAlta = false;
				}
			break;
			case "m":
				//2-el nombre del  más viejo de los hombres 
				if(banderaHombreViejo == true || edad > edadMaxHombre)
				{
					edadMaxHombre = edad;
					nombreHombreViejo = nombre;
					banderaHombreViejo = false;
				}
			break;
		}

		//3-el nombre del primer adolescente ingresado,
		if(edad > 12 && edad < 18)
		{
			if(banderaPrimerAdolecente == true)
			{
				primerAdolecente = nombre;
				banderaPrimerAdolecente = false;
			}
		}

	}while(respuesta);


	//3- (solo mostrar si y sólo si  hay  algún adolescente)
	if(banderaPrimerAdolecente == false)
	{
		console.log("El nombre del primer adolescente ingresado es " + primerAdolecente);
	}

	console.log("El nombre de la más alta de las mujeres es " + nombreMujerAlta);
	console.log("El nombre del  más viejo de los hombres " + nombreHombreViejo);

}