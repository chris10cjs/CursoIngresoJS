/* Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */

function mostrar()
{
	var repeticiones;

	for(contador = 0; ;contador++)
	{
		repeticiones = prompt("ingrese un número: ");
		
		if(repeticiones == 9)
		{
			break;
		}
	}

}