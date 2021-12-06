/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  
nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares
 desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números
 impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números 
divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos 
desde el número ingresado hasta el cero.
*/

var numeroIngresado;

function ComenzarIngreso() 
{
    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseFloat(numeroIngresado);

    while (numeroIngresado < 0 || isNaN(numeroIngresado)) 
    {
        numeroIngresado = prompt("Dato invalido. El numero debe ser positivo");
        numeroIngresado = parseFloat(numeroIngresado);
    }
    document.getElementById("txtIdNumero").value = numeroIngresado;
}


function NumerosPares() 
{
    var contadorPares;

    contadorPares = 0;
    ComenzarIngreso();
    while (numeroIngresado >= 0) 
    {
        if (numeroIngresado % 2 == 0) 
        {
            contadorPares++;
        }
        numeroIngresado--;
    }
    alert("Cantidad de numeros pares: " + contadorPares);
}

function NumerosImpares() 
{
    var contadorImpares;

    contadorImpares = 0;
    ComenzarIngreso();
    while (numeroIngresado >= 0) 
    {
        if (numeroIngresado % 2 != 0) 
        {
            contadorImpares++;
        }
        numeroIngresado--;
    }
    alert("Cantidad de numeros impares: " + contadorImpares);
}


function NumerosDivisibles() 
{
    var contadorDivisibles;
    var i;
    var mensaje;

    contadorDivisibles = 0;
    ComenzarIngreso();
    for (i = 100; i > 0; i--) 
    {
        if (numeroIngresado % i == 0) 
        {
            contadorDivisibles++;
        }
    }

    mensaje = "Cantidad de numeros divisibles de ";
    mensaje += numeroIngresado;
    mensaje += ": " + contadorDivisibles;

    alert(mensaje);
}

function VerificarPrimo() 
{
    var i;
    var mensaje;

    mensaje = "ES primo";
    ComenzarIngreso();

    if (numeroIngresado < 2) 
    {
        mensaje = "NO es primo";
    }
    else {
        for (i = 2; i < numeroIngresado; i++) 
        {
            if (numeroIngresado % i == 0) 
            {
                mensaje = "NO es primo";
            }
        }
    }
    alert(mensaje);
}

//La otra forma seria: Si el contador es menor que 3 (tuvo menos de 3 divisores, osea, el mismo y 1) && 
//el numero ingresado es mayor que 1 (descarto el 1), entonces es primo.
//Lo malo, es que estoy haciendo iterar con 0 y 1, sabiendo que los voy a desestimar, derrochando recursos.
function NumerosPrimos()
{
    ComenzarIngreso();
    var mensaje;
    var i;
    var f;
    var banderaPrimos;

    mensaje = "Lista de numeros primos: ";

    if (numeroIngresado < 2)
    {
        mensaje = "NO hay primos";
    }
    else
    {
        for (i = 2; i <= numeroIngresado; i++)
        {
            banderaPrimos = 0;

            for (f = 2; f < i; f++)
            {
                if (i % f == 0)
                {
                    banderaPrimos = 1;
                }

            }
            if (banderaPrimos == 0)
            {
                mensaje += i + "- ";
            }

        }
    }
    alert(mensaje);
}



