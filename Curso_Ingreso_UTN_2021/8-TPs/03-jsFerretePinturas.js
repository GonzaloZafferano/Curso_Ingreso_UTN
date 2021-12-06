/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Formula:
    //(0 °C × 9/5) + 32 = 32 °F
    //(0 °F − 32) × 5/9 = -17.78 °C

    //declaracion de variables a utilizar
	var temperaturaEnFahrenheit, temperaturaEnCentigrados, mensaje;

    //inicializacion de variables:
    temperaturaEnFahrenheit = parseFloat (document.getElementById("txtIdTemperatura").value);

    temperaturaEnCentigrados = (temperaturaEnFahrenheit - 32) * 5/9;

    //redondeo el resultado a solo 2 decimales:
    temperaturaEnCentigrados = temperaturaEnCentigrados.toFixed(2);

    //inicializacion y concatenacion de mensaje:
    mensaje = temperaturaEnFahrenheit;
    mensaje +="° Fahrenheit es equivalentes a °";
    mensaje += temperaturaEnCentigrados;
    mensaje += "° Centigrados";

    alert(mensaje);

}

function CentigradosFahrenheit () 
{
	//Formula:
    //(0 °C × 9/5) + 32 = 32 °F
    //(0 °F − 32) × 5/9 = -17.78 °C

    //variables a utilizar:
	var temperaturaEnFahrenheit, temperaturaEnCentigrados, mensaje;

    //inicializacion de variables:
    temperaturaEnCentigrados = parseFloat (document.getElementById("txtIdTemperatura").value);

    temperaturaEnFahrenheit = (temperaturaEnCentigrados * 9 / 5) +32;

    //redondeo el resultado a solo 2 decimales:
    temperaturaEnFahrenheit = temperaturaEnFahrenheit.toFixed(2);

    //inicializacion y concatenacion de mensaje:
    mensaje = temperaturaEnCentigrados;
    mensaje+= "° Centigrados es equivalentes a ";
    mensaje += temperaturaEnFahrenheit;
    mensaje+= "° Fahrenheit";

    alert(mensaje);

}
