/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar
 el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

*/

function mostrar() {
    var marca;
    var pesoIngresado;
    var temperaturaIngresada;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeE;
    var contadorPares;
    var banderaMasPesado;
    var masPesadoProducto;
    var pesoMaximo;
    var contadorDeProductosBajoCero;
    var acumuladorPesoProductos;
    var contadorProductos;
    var promedioPesos;
    var pesoMinimo;

    acumuladorPesoProductos = 0;
    contadorProductos = 0;
    pesoMinimo = 0;
    contadorDeProductosBajoCero = 0;
    banderaMasPesado = 0;
    pesoMaximo = 0;
    contadorPares = 0;
    mensajeA = "";
    mensajeB = "";
    mensajeC = "";
    mensajeD = "";
    mensajeE = "";
    respuesta = 's';

    while (respuesta == 's') {
        marca = prompt("Ingrese la marca");

        pesoIngresado = prompt("Por favor, ingrese el peso: 1  - 100");
        pesoIngresado = parseInt(pesoIngresado);

        while (pesoIngresado < 1 || pesoIngresado > 100 || isNaN(pesoIngresado)) {
            pesoIngresado = prompt("Dato invalido. Por favor, ingrese el peso: 1  - 100");
            pesoIngresado = parseInt(pesoIngresado);
        }

        temperaturaIngresada = prompt("Por favor, ingrese la temperatura: -30 a 30");
        temperaturaIngresada = parseInt(temperaturaIngresada);

        while (temperaturaIngresada < -30 || temperaturaIngresada > 30 || isNaN(temperaturaIngresada)) {
            temperaturaIngresada = prompt("Dato invalido. Por favor, ingrese la temperatura: -30 a 30");
            temperaturaIngresada = parseInt(temperaturaIngresada);
        }


        if (temperaturaIngresada % 2 == 0) {
            contadorPares++;
        }

        if (pesoIngresado > pesoMaximo || banderaMasPesado == 0) {
            pesoMaximo = pesoIngresado;
            masPesadoProducto = marca;
        }

        if (pesoIngresado < pesoMinimo || banderaMasPesado == 0) {
            pesoMinimo = pesoIngresado;
            banderaMasPesado = 1;
        }

        if (temperaturaIngresada < 0) {
            contadorDeProductosBajoCero++;
        }

        acumuladorPesoProductos += pesoIngresado;
        contadorProductos++;

        respuesta = prompt("Presione 's' para continuar");
    }

    if (contadorPares != 0) {

        mensajeA = "La cantidad de temperaturas pares es de " + contadorPares + "<br>";
    }

    mensajeB = "La marca del producto mas pesado es " + masPesadoProducto + " y su peso es de " + pesoMaximo + "<br>";

    if (contadorDeProductosBajoCero != 0) {
        mensajeC = "La cantidad de productos que se conservan bajo cero es de " + contadorDeProductosBajoCero + "<br>";
    }

    promedioPesos = acumuladorPesoProductos / contadorProductos;
    mensajeD = "El promedio de peso de todos los productos es " + promedioPesos + "<br>";

    mensajeE = "El maximo peso es " + pesoMaximo + " y el peso minimo es " + pesoMinimo;

    document.write(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);

}
