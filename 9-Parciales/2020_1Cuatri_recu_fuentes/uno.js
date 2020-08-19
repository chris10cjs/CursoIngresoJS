/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol"), 
el precio (validar entre 100 y 300), 
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar()
{
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var contador;
	var bandera;
	var unidadesjabon;
	var fabricanteJabon;

	bandera = true;
	
	for(contador = 0; contador < 3; contador++)
	{
		producto = prompt("Ingrese un producto: ");
		producto = producto.toLowerCase();

		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		{
			producto = prompt("Error!! reingrese un producto: ");
			producto = producto.toLowerCase();
		}

		precio = prompt("Ingrese un precio: ");
		precio = parseInt(precio);

		while(precio < 100 || precio > 300)
		{
			precio = prompt("Error!! reingrese un precio: ");
			precio = parseInt(precio);	
		}

		unidades = prompt("Ingrese cantidad: ");
		unidades = parseInt(unidades);

		while(unidades < 0 || unidades > 1000)
		{
			unidades = prompt("Ingrese cantidad: ");
			unidades = parseInt(unidades);
		}

		marca = prompt("Ingrese marca: ");
		fabricante = prompt("Ingrese fabricante: ");

		switch(producto)
		{
			case "jabon":
				if(bandera = true || precio > precioMaximo)
				{
					precioMaximo = precio;
					unidadesjabon = unidades;
					fabricanteJabon = fabricante;
				}
				bandera = false;
			break;
		}
	}

	alert("Del jabón más caro, la cantidad es " + unidadesjabon + " del fabricante " + fabricanteJabon);



}
