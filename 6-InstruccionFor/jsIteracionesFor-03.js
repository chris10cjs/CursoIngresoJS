/* Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */

function mostrar()
{
	/* 	var repeticiones;
	repeticiones = prompt("ingrese el número de repeticiones");

	for( var contador = 0; contador < repeticiones; contador++)
	{
		alert("Hola UTN FRA");
	} */

	/* 	Enunciado
	b)”sin banderas”
	Se debe ingresar 10:
	nombre
	edad(0 y 115)
	altura(30 y 230)
	sexo
	Dinero(puede ser positivo o negativo, pero debe ser un número)
	CantidadDeHijos(0 y 10)
	despues de validar todos los datos,
	se debe informar:

	1- nombre de la persona con edad más vieja
	2- promedio de altura de las mujeres
	3- nombre de la mujer más joven
	NOTA:pedir datos por "prompt()" y mostrar por console.log(),
	verificar que los datos  exitan antes de mostrarlos */

	var nombre;
	var edad;
	var altura;
	var sexo;
	var dinero;
	var cantidadHijos;
	var contador;

	var acumuladorAlturaMujeres;
	var contadorMujeres;

	var personaEdadMax;
	var nombrePersonaEdadMax;
	var mujerJoven;
	var nombreMujerJoven;
	var promedioAlturaMujeres;

	contador = 0;
	acumuladorAlturaMujeres = 0;
	contadorMujeres = 0;

	while(contador < 3)
	{
		// **ingresos y validaciones
		nombre = prompt("Ingrese nombre: ");

		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);
		while(edad < 0 || edad > 115)
		{
			edad = prompt("Error! ingrese edad: ");
			edad = parseInt(edad);
		}

		altura = prompt("Ingrese altura: ");
		altura = parseInt(altura);
		while(altura < 30 || altura > 230)
		{
			altura = prompt("Error! ingrese altura: ");
			altura = parseInt(altura);
		}

		sexo = prompt("Ingrese sexo: ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error! ingrese sexo: ");
		}

		dinero = prompt("Ingrese dinero: ");
		dinero = parseInt(dinero);
		while(dinero == isNaN(dinero))
		{
			dinero = prompt("Error! ingrese dinero: ");
			dinero = parseInt(dinero);
		}

		cantidadHijos = prompt("Ingrese cantidad de hijos: ");
		cantidadHijos = parseInt(cantidadHijos);
		while(cantidadHijos < 0 || cantidadHijos > 10)
		{
			cantidadHijos = prompt("Error! ingrese cantidad de hijos: ");
			cantidadHijos = parseInt(cantidadHijos);
		}

		//	1- nombre de la persona con edad más vieja
		if(contador == 0 || edad > personaEdadMax)
		{
			personaEdadMax = edad;
			nombrePersonaEdadMax = nombre;
		}

		//	2- promedio de altura de las mujeres
		//	3- nombre de la mujer más joven
		switch(sexo)
		{
			case "f":
				if(acumuladorAlturaMujeres == 0 || edad < mujerJoven)
				{
					mujerJoven = edad;
					nombreMujerJoven = nombre;
				}
				acumuladorAlturaMujeres = acumuladorAlturaMujeres + altura;
				contadorMujeres++;
			break;
		}
		contador++;
	}

	promedioAlturaMujeres = acumuladorAlturaMujeres/contadorMujeres;

	console.log("El nombre de la persona con edad más vieja es: " + nombrePersonaEdadMax);
	console.log("El promedio de altura de las mujeres es: " + promedioAlturaMujeres);
	console.log("El nombre de la mujer más joven es: " + nombreMujerJoven);
}