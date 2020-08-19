/* Christian Silvero 1°H
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
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
	var bandera;
	
	var unidadesAlcohol;
	var fabricanteAlcohol;
	var precioMinimoAlcohol;

	var acumuladorAlcohol;
	var acumuladorJabon;
	var acumuladorBarbijo;
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;

	var contadorMasUnidades;
	var productoMasUnidades;
	var promedio;

	bandera = true;
	acumuladorAlcohol = 0;
	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	contadorMasUnidades = 0;
	
	for(var contador = 0; contador < 5; contador++)
	{
		producto = prompt("Ingrese un producto: ");
		producto = producto == null ? '' : producto.toLowerCase(); //operador ternario

		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		{
			producto = prompt("Error! ingrese un producto: ");
			producto = producto == null ? '' : producto.toLowerCase();
		}

		precio = prompt("Ingrese un precio: ");
		precio = precio == null && precio ? '' : parseInt(precio);

		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = prompt("Error!! reingrese un precio: ");
			precio = precio == null ? '' : parseInt(precio);	
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
			case "alcohol":
				if(bandera = true || precio < precioMinimoAlcohol)
				{
					precioMinimoAlcohol = precio;
					unidadesAlcohol = unidades;
					fabricanteAlcohol = fabricante;
				}
				if(bandera = true || unidades > acumuladorAlcohol)
				{
					acumuladorAlcohol = acumuladorAlcohol + unidades;
				}
				contadorAlcohol++;
			break;
			case "jabon":
				if(bandera = true || unidades > acumuladorJabon)
				{
					acumuladorJabon = acumuladorJabon + unidades;
				}
				contadorJabon++;
			break;
			case "barbijo":
				if(bandera = true || unidades > acumuladorBarbijo)
				{
					acumuladorBarbijo = acumuladorBarbijo + unidades;
				}
				contadorBarbijo++;
				break;
			}
		bandera = false;
	}

	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
	{
		productoMasUnidades = acumuladorAlcohol;
		contadorMasUnidades = contadorAlcohol;
	}
	else
	{
		if(acumuladorJabon > acumuladorBarbijo)
		{
			productoMasUnidades = acumuladorJabon;
			contadorMasUnidades = contadorJabon;
		}
		else
		{
			productoMasUnidades = acumuladorBarbijo;
			contadorMasUnidades = contadorBarbijo;
		}
	}

	promedio = productoMasUnidades / contadorMasUnidades;

	alert("Del alcohol más barato, la cantidad es " + unidadesAlcohol + " del fabricante " + fabricanteAlcohol);
	alert("Del tipo de producto con más unidades el promedio es: " + promedio);
	alert("La cantidad de jabones es: " + acumuladorJabon);
}
