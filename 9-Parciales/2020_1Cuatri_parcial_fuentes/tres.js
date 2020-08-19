/* Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
  var nombre;
  var edad;
  var sexo;
  var estadoCivil;
  var temperatura;
  var respuesta;

  var contadorPersona;
  var temperaturaMax;
  var personaTemperaturaMax;
  var contadorMayoresEdadViudos;
  var contadorTerceraEdad;
  var contadorEdadHombresViudos;
  var contadorEdadHombresSolteros;

  var contadorPersona = 0;
  var temperaturaMax = 0;
  var contadorMayoresEdadViudos = 0;
  var contadorTerceraEdad = 0;
  var contadorEdadHombresViudos = 0;
  var contadorEdadHombresSolteros = 0;
  
  do
  {
    nombre = prompt("Ingrese nombre: ");

    edad = prompt("Ingrese edad: ");
    edad = parseInt(edad);

    sexo = prompt("Ingrese sexo: ");
    while(sexo != "f" && sexo!= "m")
    {
      sexo = prompt("Error! ingrese sexo: ");
    }

    estadoCivil = prompt("Ingrese estado civil: ");
    while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
    {
      estadoCivil = prompt("Error! ingrese estado civil: ");
    }

    temperatura = prompt("Ingrese temperatura corportal: ");
    temperatura = parseInt(temperatura);

    //a) El nombre de la persona con mas temperatura.
    if(contadorPersona == 0 || temperatura > temperaturaMax)
    {
      temperaturaMax = temperatura;
      personaTemperaturaMax = nombre;
    }

    //b) Cuantos mayores de edad estan viudos
    //c) La cantidad de hombres que hay solteros o viudos.
    switch(estadoCivil)
    {
      case "viudo":
        if(edad > 17)
        {
          contadorMayoresEdadViudos++;
        }
        if(sexo == "m")
        {
          contadorEdadHombresViudos++;
        }
      break;
      case "soltero":
      if(sexo == "m")
      {
        contadorEdadHombresSolteros++;
      }
      break;
    }

    //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
    if(edad > 60 && temperatura > 38)
    {
      contadorTerceraEdad++;
    }

    respuesta = confirm("Desea ingresar otra persona? ");
  }while(respuesta);

  console.log("El nombre de la persona con mas temperatura es " + personaTemperaturaMax);
  console.log("La cantidad de mayores de edad viudos son: " + contadorMayoresEdadViudos);
  console.log("la cantidad de hombres que hay solteros son: " + contadorEdadHombresSolteros + " y la de viudos son: " + contadorEdadHombresViudos);
  console.log("La cantidad de personas de la tercera edad con más de 38 de temperatura son: " + contadorTerceraEdad);


  
}
