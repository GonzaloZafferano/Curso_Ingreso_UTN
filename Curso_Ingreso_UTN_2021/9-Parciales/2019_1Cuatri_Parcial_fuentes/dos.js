/*
AUTOR: ZAFFERANO GONZALO
CONSIGNA:
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que 
sumados son xx kilos y el promedio de peso xx ".

*/

function mostrar()
{
    var personaUno,personaDos,pesoUno,pesoDos,sumaPesos,promedioPesos,mensaje;

    personaUno=prompt("Estimado, ingrese por favor su nombre: ");
    pesoUno=parseFloat(prompt("Por favor, "+personaUno+" ingrese su peso expresado en Kilos."));
    personaDos=prompt("Estimado, ingrese por favor su nombre: ");
    pesoDos=parseFloat(prompt("Por favor, "+personaDos+" ingrese su peso expresado en Kilos."));

    sumaPesos=pesoUno+pesoDos;
    promedioPesos=sumaPesos/2;

    mensaje="Ustedes se llaman ";
    mensaje+=personaUno;
    mensaje+=" y ";
    mensaje+=personaDos;
    mensaje+=". Pesan ";
    mensaje+=pesoUno;
    mensaje+=" y ";
    mensaje+=pesoDos;
    mensaje+=" kilos, que sumados son: ";
    mensaje+=sumaPesos;
    mensaje+=" kilos, y el promedio de pesos es: ";
    mensaje+=promedioPesos;
    mensaje+=" kilos.";

    alert(mensaje);


}
