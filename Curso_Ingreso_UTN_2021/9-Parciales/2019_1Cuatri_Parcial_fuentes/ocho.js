/*
Autor: Gonzalo Zafferano
consigna:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedioPositivos de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)

*/function mostrar() 
{
    var letra;
    var numero;
    var respueta;
    var numeroMaximo;
    var numeroMinimo;
    var letraNumeroMaximo;
    var letraNumeroMinimo;
    var banderaDelPrimero;
    var contadorPositivos;
    var contadorPares;
    var contadorImpares;
    var contadorCeros;
    var acumuladorPositivos;
    var acumuladorNegativos;
    var promedioPositivos;
    //var mensaje;

    promedioPositivos=0;
    contadorPositivos = 0;
    contadorCeros = 0;
    contadorImpares = 0;
    contadorPares = 0;
    acumuladorNegativos = 0;
    acumuladorPositivos = 0;
    banderaDelPrimero = 0;
    respueta = 's';

    while (respueta == 's') 
    {
        letra = prompt("Por favor, ingrese una letra");
        numero = prompt("Por favor, ingrese un numero");
        numero = parseInt(numero);

        while (numero > 100 || numero < -100) 
        {
            numero = prompt("Numero invalido. Por favor, ingrese un numero valido");
            numero = parseInt(numero);
        }

        if (banderaDelPrimero == 0) 
        {
            banderaDelPrimero = 1;
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraNumeroMaximo = letra;
            letraNumeroMinimo = letra;
        }
        else
        {
            if (numero > numeroMaximo) 
            {
                numeroMaximo = numero;
                letraNumeroMaximo = letra;
            }
            else 
            {
                if (numero < numeroMinimo) 
                {
                    numeroMinimo = numero;
                    letraNumeroMinimo = letra;
                }
            }
        }

        if (numero % 2 == 0) 
        {
            contadorPares++;
        }
        else 
        {
            contadorImpares++;
        }

        if (numero >= 0) 
        {
            acumuladorPositivos += numero;
            contadorPositivos++;
        }
        else 
        {
            acumuladorNegativos += numero;
        }

        if (numero == 0) 
        {
            contadorCeros++;
        }

        respueta=prompt("Presione 's' para continuar");
    }

    if(contadorPositivos!=0)
    {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    }

document.write("A- La cantidad de numeros pares es: " + contadorPares + "<br>");
document.write("B- La cantidad de numeros impares es: " + contadorImpares + "<br>");
document.write("C- La cantidad de ceros es: " + contadorCeros + "<br>");
document.write("D- El promedioPositivos de todos los numeros positivos ingresados es: " + promedioPositivos + "<br>");
document.write("E- La suma de todos los numeros negativos es: " + acumuladorNegativos + "<br>");
document.write("F1- El numero maximo es " + numeroMaximo + " y su letra es: " + letraNumeroMaximo + "<br>");
document.write("F2- El numero minimo es " + numeroMinimo + " y su letra es: " + letraNumeroMinimo + "<br>");



    /*

    mensaje = "A- La cantidad de numeros pares es: " + contadorPares;
    mensaje += "\nB- La cantidad de numeros impares es: " + contadorImpares;
    mensaje += "\nC- La cantidad de ceros es: " + contadorCeros;
    mensaje += "\nD- El promedioPositivos de todos los numeros positivos ingresados es: " + promedioPositivos;
    mensaje += "\nE- La suma de todos los numeros negativos es: " + acumuladorNegativos;
    mensaje += "\nF1- El numero maximo es " + numeroMaximo + " y su letra es: " + letraNumeroMaximo;
    mensaje += "\nF2- El numero minimo es " + numeroMinimo + " y su letra es: " + letraNumeroMinimo;

    alert(mensaje);

    */
}
