/*
Christian Silvero 1°H

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino.
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	// -------- PUNTO A - EDAD ------------

	edadIngresada = prompt("Ingrese su edad: ");
	edadIngresada = parseInt(edadIngresada);
	
	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Error! reingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
	}

	txtIdEdad.value = edadIngresada;

	// -------- PUNTO B - SEXO ------------

	sexoIngresado = prompt("Ingrese su sexo: ");
	sexoIngresado = sexoIngresado.toUpperCase();
	
	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Error! reingrese su sexo: ");
	}
	
	txtIdSexo.value = sexoIngresado;
	
	// -------- PUNTO C - ESTADO CIVIL ------------
	
	estadoCivilIngresado = prompt("Ingrese su estado civil: ");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado < 1 && estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Error! reingrese su estado civil: ");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	switch (estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorsiado";
			break;
		default:
			estadoCivilIngresado = "Viudo";
			break;
	}

	txtIdEstadoCivil.value = estadoCivilIngresado;

	// -------- PUNTO D - SUELDO BRUTO ------------	

	sueldoBruto = prompt("Ingrese su sueldo bruto: ");
	sueldoBruto = parseInt(sueldoBruto);

	while(sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Error! reingrese su sueldo bruto: ");
		sueldoBruto = parseInt(sueldoBruto);
	}

	txtIdSueldo.value = sueldoBruto;

	// -------- PUNTO E - LEGAJO ------------	

	numeroLegajo = prompt("Ingrese su legajo: ");
	numeroLegajo = parseInt(numeroLegajo);

	while(numeroLegajo < 1000 && numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Error! reingrese su legajo: ");
		numeroLegajo = parseInt(numeroLegajo);
	}

	txtIdLegajo.value = numeroLegajo;

	// -------- PUNTO F - NACIONALIDAD ------------	

	nacionalidad = prompt("Ingrese su nacionalidad: ");
	nacionalidad = nacionalidad.toUpperCase();

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Error! reingrese su nacionalidad: ");
	}

	txtIdNacionalidad.value = nacionalidad; 
}

