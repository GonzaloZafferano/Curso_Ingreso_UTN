/*
AUTOR: ZAFFERANO GONZALO
CONSIGNA:
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10"

*/
function mostrar() 
{
    var primerNumero;
    var segundoNumero;
    var mensajeResultado;
    
    primerNumero = prompt("Inserte un primer numero:");
    segundoNumero = prompt("Inserte un segundo numero:");
    
    if (primerNumero == segundoNumero) 
    {
        mensajeResultado = primerNumero + segundoNumero; 
    }
    else 
    {
        primerNumero = parseFloat(primerNumero);
        segundoNumero = parseFloat(segundoNumero);

        if (primerNumero > segundoNumero) 
        {
            mensajeResultado = primerNumero - segundoNumero;
            
            if (mensajeResultado > 10) 
            {
                mensajeResultado = "La resta es " + mensajeResultado + " y superó el 10.";
            }
        }
        else 
        {
            mensajeResultado = primerNumero + segundoNumero; //suma
        }
    }
    alert(mensajeResultado);
}
