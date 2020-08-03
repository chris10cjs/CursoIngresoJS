/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/

function mostrar()
{
	var i; //variable de control
	i = 10; //inicializar la variable de control (por lo gral inicia en 0)

	while (i > 0) //condicion de continuidad de bucle
	{
		//sentencias que se van a repetir
		console.log (i);
		//sentencias que hagan que la condicion sea falsa
		i = i - 1; //contador
	}
}