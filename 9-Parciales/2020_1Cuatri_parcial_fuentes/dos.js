/* Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
 */
function mostrar()
{
  var producto;
  var respuesta;
  var bolsas;
  var precio;
  var porcentaje;
  var descuento;
  var importeTotal;
  var importeFinal;
  var bolsasTotal;

  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var productoBolsasMax;
  var precioMax;
  var productoMax;
  var bandera;

  importeTotal = 0;
  bolsasTotal = 0;
  cantidadArena = 0;
  cantidadCal = 0;
  cantidadCemento = 0;
  bandera = true;

  do
  {
    producto = prompt("Ingrese un producto: ");
    
    while(producto != "arena" && producto != "cal" && producto != "cemento")
    {
      producto = prompt("Error! ingrese un producto: ");
    }
    
    bolsas = prompt("Ingrese cantidad de bolsas: ");
    bolsas = parseInt(bolsas);

    while(bolsas < 0)
    {
      bolsas = prompt("Error! ingrese cantidad de bolsas: ");
      bolsas = parseInt(bolsas);
    }
    
    precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);
    
    while(precio < 0)
    {
      precio = prompt("Error! ingrese el precio: ");
      precio = parseInt(precio);
    }

    importeTotal = importeTotal + precio;
    bolsasTotal = bolsasTotal + bolsas;

    if(bandera == true || precioMax > precio)
    {
      precioMax = precio;
      productoMax = producto;
    }
    
    respuesta = confirm("Desea ingresar otro producto? ");

  }while(respuesta);

  if(bolsasTotal > 30)
  {
    porcentaje = 0.25;
  }
  else
  {
    if(bolsasTotal > 10)
    {
      porcentaje = 0.25;
    }
    else
    {
      porcentaje = 0;
    }
  }

  switch(producto)
  {
    case "arena":
      cantidadArena = cantidadArena + bolsas;
    break;
    case "cal":
      cantidadCal = cantidadCal + bolsas;
    break;
    case "cemento":
      cantidadCemento = cantidadCemento + bolsas;
    break;
  }

  if(cantidadArena > cantidadCal && cantidadArena > cantidadCemento)
  {
    productoBolsasMax = cantidadArena;
  }
  else
  {
    if(cantidadCal > cantidadCemento)
    {
      productoBolsasMax = cantidadCal;
    }
    else
    {
      productoBolsasMax = cantidadCemento;
    }
  }

  descuento = importeTotal * porcentaje;
  importeFinal = importeTotal - descuento;

  alert("El importe total a pagar es de: " + importeTotal);
  alert("El importe a pagar con descuento es de: " + importeFinal);
  alert("El producto con más cantidad de bolsas es: " + productoBolsasMax);
  alert("El tipo de producto más caro es: " + productoMax);

}
