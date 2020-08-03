/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	alert(numeroSecreto); //test
}

function verificar()
{
	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado == numeroSecreto)
	{
		contadorIntentos++;
		
		switch(contadorIntentos)
		{
			case 1:
				alert("Usted es un Psíquico");
			break;
			case 2:
				alert("Excelente percepción");
			break;
			case 3:
				alert("Esto es suerte");
			break;
			case 4:
				alert("Excelente técnica");
			break;
			case 5:
				alert("Usted está en la media");
			break;
			default:
				if(contadorIntentos < 10)
				{
					alert("Falta técnica");
				}
				else
				{
					alert("Afortunado en el amor!!");
				}
		}
	}
	else
	{
		contadorIntentos++;
		alert("Error! sigue intentando..");
	}

	txtIdIntentos.value = contadorIntentos;
	
}