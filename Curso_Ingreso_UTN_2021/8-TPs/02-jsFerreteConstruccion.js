/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() 
{
    //El perimetro se calcula sumando los 4 lados de la figura.
    //declaracion de variables:
    var largoDeTerreno, anchoDeTerreno, perimetroDelTerreno, cantidadDeAlambre, mensaje;

    //asignacion de variables:
    largoDeTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoDeTerreno = parseFloat(document.getElementById("txtIdAncho").value);


    if (largoDeTerreno == 0 || anchoDeTerreno == 0) 
    {
        alert("Falta completar datos. No puede ser '0'");
    }
    else 
    {
        perimetroDelTerreno = 2 * (largoDeTerreno + anchoDeTerreno);

        //se multiplica por 3, porque son 3 hilos de alambre.
        cantidadDeAlambre = perimetroDelTerreno * 3;

        //inicializacion y concatenacion de mensaje:
        mensaje = "Se necesitan comprar ";
        mensaje += cantidadDeAlambre;
        mensaje += " metros de alambre para los ";
        mensaje += perimetroDelTerreno;
        mensaje += " metros de perimetro del terreno.";


        alert(mensaje);
    }




}
function Circulo() 
{
    //El area de un circulo se calcula con: pi * radio al cuadrado
    //El perimetro de un circulo se calcula: 2 * radio * PI
    //Math.PI: es una propiedad que retorna el valor REAL de PI
    //Math.pow(BASE,EXPONENTE): es una funcion que obtiene el resultado 
    //de una potencia. Para este ejemplo no lo necesitamos.


    var radioDelTerreno, cantidadDeAlambre, perimetroDelTerreno, mensaje;
    //const PI = Math.PI;

    radioDelTerreno = parseFloat(document.getElementById("txtIdRadio").value);


    //verifico que correctamente me indique cuanto es pi.
    //alert(Math.PI);

    perimetroDelTerreno = 2 * radioDelTerreno * Math.PI;

    perimetroDelTerreno = perimetroDelTerreno.toFixed(2);

    cantidadDeAlambre = perimetroDelTerreno * 3;

    //inicializacion y concatenacion de mensaje:
    mensaje = "la cantidad de alambre a comprar es de ";
    mensaje += cantidadDeAlambre;
    mensaje +=" metros para un perimetro de ";
    mensaje += perimetroDelTerreno;
    mensaje +=" metros.";

    alert(mensaje);


}
function Materiales() 
{
    //Para hacer un contrapiso de 1m x 1m se necesitan 
    //2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se 
    //necesitan de cada uno para las medidas del terreno rectangular.

    //necesito sacar el area. El area es Base * Altura

    //declaracion de variables a utilizar
    var largoDeTerreno, anchoDeTerreno, areaDelTerreno, cantidadDeBolsasDeCemento, cantidadDeBolsasDeCal, mensaje;

    //asignacion de variables
    largoDeTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoDeTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    
    //calculos:
    areaDelTerreno = largoDeTerreno * anchoDeTerreno;
    cantidadDeBolsasDeCal = areaDelTerreno * 3;
    cantidadDeBolsasDeCemento = areaDelTerreno * 2;


    //inicializacion y concatenacion de mensaje:
    mensaje = "Se necesitan ";
    mensaje += cantidadDeBolsasDeCemento;
    mensaje += " bolsas de cemento y ";
    mensaje += cantidadDeBolsasDeCal;
    mensaje += " bolsas de cal para los ";
    mensaje += areaDelTerreno;
    mensaje += "m2 del terreno.";


    alert(mensaje);


}