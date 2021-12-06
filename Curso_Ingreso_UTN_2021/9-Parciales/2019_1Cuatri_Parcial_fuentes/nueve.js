/*
Autor: Gonzalo Zafferano
parcial punto 09
consigna:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes 
en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el 
usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/

function mostrar() 
{
    var nombrePais;
    var cantidadHabitantes;
    var temperatura;
    var temperaturaMinima;
    var paisConTemperaturaMinina;
    var respuesta;
    var promedio;
    var banderaDelPrimero;
    var paisConMenosHabitantes;
    var menorCantidadHabitantes;
    var acumuladorHabitantes;
    var contadorTemperaturasPares;
    var contadorTemperaturaMayor40;
    var contadorPaises;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeE;
    
    contadorTemperaturaMayor40 = 0;
    contadorPaises = 0;
    contadorTemperaturasPares = 0;
    acumuladorHabitantes = 0;
    cantidadHabitantes = 0;
    promedio=0;
    banderaDelPrimero = 0;
    respuesta = 's';

    while (respuesta == 's') 
    {
        nombrePais = prompt("Por favor, ingrese el nombre del pais");
        cantidadHabitantes = prompt("Por favor, ingrese el numero de habitantes. 1 - 7000");
        cantidadHabitantes = parseInt(cantidadHabitantes);

        while (cantidadHabitantes < 1 || cantidadHabitantes > 7000) 
        {
            cantidadHabitantes = prompt("Dato invalido. Por favor, ingrese el numero de habitantes. 1 - 7000");
            cantidadHabitantes = parseInt(cantidadHabitantes);
        }

        temperatura = prompt("Ingrese la temperatura. -50° a 50°")
        temperatura = parseFloat(temperatura);

        while (temperatura < -50 || temperatura > 50) 
        {
            temperatura = prompt("Dato Invalido. Ingrese la temperatura. -50° a 50°")
            temperatura = parseFloat(temperatura);
        }
        
        if (banderaDelPrimero == 0) 
        {
            banderaDelPrimero = 1;
            paisConMenosHabitantes = nombrePais;
            menorCantidadHabitantes = cantidadHabitantes;
            paisConTemperaturaMinina = nombrePais;
            temperaturaMinima = temperatura;
        }
        
        if (temperatura % 2 == 0) 
        {
            contadorTemperaturasPares++;
        }

        if (cantidadHabitantes < menorCantidadHabitantes) 
        {
            menorCantidadHabitantes = cantidadHabitantes;
            paisConMenosHabitantes = nombrePais;
        }

        if (temperatura < temperaturaMinima) 
        {
            temperaturaMinima = temperatura;
            paisConTemperaturaMinina = nombrePais;
        }

        if (temperatura > 40) 
        {
            contadorTemperaturaMayor40++;
        }

        acumuladorHabitantes += cantidadHabitantes;
        contadorPaises++;

        respuesta = prompt("Desea continuar? 's' o 'n'");
        while (respuesta != 's' && respuesta != 'n') 
        {
            respuesta = prompt("Respuesta invalida. Desea continuar? 's' o 'n'");
        }
    }


    if (contadorPaises != 0) 
    {
        promedio = acumuladorHabitantes / contadorPaises;
    }

    mensajeA = "La cantidad de temperaturas pares es: " + contadorTemperaturasPares;
    mensajeB = "El nombre del pais con menos habitantes es: " + paisConMenosHabitantes;
    mensajeC = "la cantidad de paises que superan los 40 grados es: " + contadorTemperaturaMayor40;
    mensajeD = "Promedio de habitantes entre los paises ingresados: " + promedio;
    mensajeE = "La temperatura minuma ingresada es: " + temperaturaMinima + ", y el pais que registro esa temperatura es: " + paisConTemperaturaMinina;

    document.write(mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" + mensajeD + "<br>" + mensajeE);
}
