/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{
	var bandera;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	bandera = 0; // podriamos usar contador para que inicie por primera vez
	
	// siempre se inicializan
	// bandera = boolean;
	// contador = variable + constante;
	// acumulador = variable + otraVariable; 

	do
	{
		do
		{
			numeroIngresado = prompt("Ingrese un numero: ");
			numeroIngresado = parseInt(numeroIngresado);
			
			if(bandera == 0)
			{
				numeroMaximo = numeroIngresado;
				numeroMinimo = numeroIngresado;
				bandera = 1;
			}
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}

		}while(isNaN(numeroIngresado));

		respuesta = confirm("desea continuar?");

	} while(respuesta == true);

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
	
}