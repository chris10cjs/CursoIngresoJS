/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados() {
  var temperaturaFahrenheit;
  var temperaturaCentigrado;

  temperaturaFahrenheit = txtIdTemperatura.value;
  temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

  temperaturaCentigrado = ((temperaturaFahrenheit - 32) * 5) / 9;

  alert(
    temperaturaFahrenheit +
      " Fahrenheit son " +
      temperaturaCentigrado.toFixed(1) +
      " centígrados"
  );
}

function CentigradosFahrenheit() {
  var temperaturaFahrenheit;
  var temperaturaCentigrado;

  temperaturaCentigrado = txtIdTemperatura.value;
  temperaturaCentigrado = parseFloat(temperaturaCentigrado);

  temperaturaFahrenheit = (temperaturaCentigrado * 9) / 5 + 32;

  alert(
    temperaturaCentigrado +
      " centígrados son " +
      temperaturaFahrenheit.toFixed(1) +
      " Fahrenheit"
  );
}

// Fórmula (1 °F − 32) × 5 / 9 = -17.22 °C
// Fórmula (1 °C × 9 / 5) + 32 = 33.8 °F
