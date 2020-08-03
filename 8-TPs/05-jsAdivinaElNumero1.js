/*Al comenzar el juego generamos un número secreto del 1 al 100, en la pantalla del juego dispondremos de un cuadro de texto para ingresar un número y un botón “Verificar”, si el número ingresado es el mismo que el número secreto se dará por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var diferencia;

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
    contadorIntentos ++;
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos")
  }
  else
  {
    if(numeroIngresado < numeroSecreto)
    {
      diferencia = numeroSecreto - numeroIngresado;
      contadorIntentos ++;
      alert("Falta " + diferencia + " para llegar al numero secreto");
    }
    else
    {
      diferencia = numeroIngresado - numeroSecreto;
      contadorIntentos ++;
      alert("Se pasó " + diferencia + " del numero secreto");
    }
  }
  
  txtIdIntentos.value = contadorIntentos;
}