/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	var i; //variable de control
	i = 0; //inicializar la variable de control (por lo gral inicia en 0)

	while (i < 10) //condicion de continuidad de bucle
	{
		//sentencias que hagan que la condicion sea falsa
		i = i + 1; //contador
		//sentencias que se van a repetir
		alert (i);
	}
}