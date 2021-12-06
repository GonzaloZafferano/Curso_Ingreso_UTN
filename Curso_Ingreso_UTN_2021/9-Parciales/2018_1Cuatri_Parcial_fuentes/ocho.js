/*

Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un 
número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar
 el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar() {
    var letra;
    var numeroIngresado;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeE;
    var mensajeF;
    var respuesta;
    var contadorPares;
    var contadorImpares;
    var acumuladorPositivos;
    var contadorPositivos;
    var promedioPositivos;
    var contadorCeros;
    var acumuladorNegativos;
    var banderaDelPrimero;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;

    banderaDelPrimero = 0;
    acumuladorNegativos = 0;
    contadorCeros = 0;
    acumuladorPositivos = 0;
    contadorPositivos = 0;
    contadorImpares = 0;
    contadorPares = 0;
    mensajeA = "";
    mensajeB = "";
    mensajeC = "";
    mensajeD = "";
    mensajeE = "";
    mensajeF = "";
    respuesta = 's';

    while (respuesta == 's') {

        letra = prompt("Por favor ingrese una letra");

        while (letra.length > 1) {
            letra = prompt("Dato invalido. Por favor ingrese una letra");
        }


        numeroIngresado = prompt("Por favor, ingrese un numero. -100 - 100");
        numeroIngresado = parseInt(numeroIngresado);

        while (numeroIngresado < -100 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
            numeroIngresado = prompt("Dato invalido. Por favor, ingrese un numero. -100 - 100");
            numeroIngresado = parseInt(numeroIngresado);
        }


        if (numeroIngresado % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;

        }


        if (numeroIngresado >= 0) {
            contadorPositivos++;
            acumuladorPositivos += numeroIngresado;
        }
        else {
            acumuladorNegativos += numeroIngresado;
        }

        if (numeroIngresado == 0) {
            contadorCeros++;
        }

        if (numeroIngresado > numeroMaximo || banderaDelPrimero == 0) {
            numeroMaximo = numeroIngresado;
            letraMaximo = letra;
        }

        if (numeroIngresado < numeroMinimo || banderaDelPrimero == 0) {
            numeroMinimo = numeroIngresado;
            letraMinimo = letra;
            banderaDelPrimero = 1;
        }

        respuesta = prompt("Presione 's' para continuar");
    }

    if (contadorPares != 0) {

        mensajeA = "La cantidad de numeros pares es de " + contadorPares + "<br>";
    }

    if (contadorImpares != 0) {

        mensajeB = "La cantidad de numeros impares es de " + contadorImpares + "<br>";
    }



    if (contadorCeros != 0) {
        mensajeC = "La cantidad de ceros es " + contadorCeros + "<br>";
    }

    if (contadorPositivos != 0) {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
        mensajeD = "EL promedio de los numeros positivos ingresados es de " + promedioPositivos + "<br>";

    }

    if (acumuladorNegativos != 0) {
        mensajeE = "La suma de los negativos es " + acumuladorNegativos + "<br>";
    }

    mensajeF = "El numero maximo es " + numeroMaximo + " y su letra es " + letraMaximo + ". El minimo es " + numeroMinimo + " y su letra es " + letraMinimo;

    document.write(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE + mensajeF);











}
