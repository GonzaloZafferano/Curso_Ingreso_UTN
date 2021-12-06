/*
Autor: Gonzalo Zafferano
Division: J
Consigna:

EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
    a) informar el ingreso con la menor cantidad de cajas
    b) de las galletitas dulces , la marca que mas kilos tiene por caja
    c)que porcentaje de cajas hay sobre el total de cada tipo
    ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
*/

function mostrar() {


    var mensajeA;
    var mensajeB;
    var mensajeC;
    var marcaProducto;
    var tipoGalletita;
    var cantidadCajas;
    var KilosPorCaja;
    var nombreProveedor;
    var origen;
    var banderaDelPrimero;
    var menorCantidadCajas;
    var menorCantidadCajasIngreso;
    var menorCantidadCajasMarca;
    var menorCantidadCajasTipo;
    var menorCantidadCajasOrigen;
    var menorCantidadCajasProveedor;
    var menorCantidadCajasKilos;
    var banderaMasKilos;
    var masKilosMarca;
    var masKilosGalletitas;
    var contadorDulces;
    var contadorSinSal;
    var contadorConSal;
    var acumuladorDulces;
    var acumuladorSinSal;
    var acumuladorConSal;
    var porcentajeTotal;
    var acumuladorCajas;

    banderaMasKilos = 0;
    banderaDelPrimero = 0;
    contadorDulces = 0;
    contadorSinSal = 0;
    contadorConSal = 0;
    acumuladorDulces = 0;
    acumuladorSinSal = 0;
    acumuladorConSal = 0;
    acumuladorCajas = 0;


    for (i = 0; i < 1; i++) {

        marcaProducto = prompt("Por favor, ingrese la marca.");

        while (marcaProducto == "") {
            marcaProducto = prompt("Dato invalido. Por favor ingrese la marca");
        }

        cantidadCajas = prompt("Por favor, ingrese cantidad de cajas. ");
        cantidadCajas = parseInt(cantidadCajas);

        while (cantidadCajas < 1 || isNaN(cantidadCajas)) {
            cantidadCajas = prompt("Dato invalido. Por favor, ingrese cantidad de cajas. ");
            cantidadCajas = parseInt(cantidadCajas);
        }

        KilosPorCaja = prompt("Por favor, ingrese los kilos POR caja");
        KilosPorCaja = parseFloat(KilosPorCaja);

        while (KilosPorCaja < 1 || isNaN(KilosPorCaja)) {
            KilosPorCaja = prompt("Dato invalido. Por favor, ingrese los kilos POR caja");
            KilosPorCaja = parseFloat(KilosPorCaja);
        }

        tipoGalletita = prompt("Por favor, ingrese el tipo de galletita: 'con sal', 'sin sal', 'dulces'");
        tipoGalletita = tipoGalletita.toLowerCase();

        while (tipoGalletita != "con sal" && tipoGalletita != "sin sal" && tipoGalletita != "dulces") {
            tipoGalletita = prompt("Dato invalido. Por favor, ingrese el tipo de galletita: 'con sal', 'sin sal', 'dulces'");
            tipoGalletita = tipoGalletita.toLowerCase();
        }

        nombreProveedor = prompt("Por favor, ingrese el nombre proveedor.");

        while (nombreProveedor == "") {
            nombreProveedor = prompt("Dato invalido. Por favor ingrese el nombre proveedor");
        }

        origen = prompt("Por favor, ingrese la marca: 'nacional', 'mercosur', 'resto del mundo'");
        origen = origen.toLowerCase();

        while (origen != "nacional" && origen != "mercosur" && origen != "resto del mundo") {
            origen = prompt("Dato invalido. Por favor, ingrese la marca: 'nacional', 'mercosur', 'resto del mundo'");
            origen = origen.toLowerCase();
        }

        if (banderaDelPrimero == 0 || cantidadCajas < menorCantidadCajas) {

            banderaDelPrimero = 1;
            menorCantidadCajas = cantidadCajas;
            menorCantidadCajasIngreso = i + 1;
            menorCantidadCajasKilos = KilosPorCaja;
            menorCantidadCajasMarca = marcaProducto;
            menorCantidadCajasOrigen = origen;
            menorCantidadCajasProveedor = nombreProveedor;
            menorCantidadCajasTipo = tipoGalletita;

        }

        switch (tipoGalletita) {
            case "con sal":
                acumuladorConSal += cantidadCajas;
                contadorConSal++;
                break;
            case "dulces":
                acumuladorDulces += cantidadCajas;
                contadorDulces++;
                if (banderaMasKilos == 0 || KilosPorCaja > masKilosGalletitas) {
                    banderaMasKilos = 1;
                    masKilosGalletitas = KilosPorCaja;
                    masKilosMarca = marcaProducto;
                }
                break;
            case "sin sal":
                acumuladorSinSal += cantidadCajas;
                contadorSinSal++;
                break;
        }

        acumuladorCajas += cantidadCajas;

    }

    mensajeA = "A - El ingreso con menor cantidad de cajas tuvo los siguientes datos: Tipo de Galletitas: " + menorCantidadCajasTipo + ". Nombre proveedor: " + menorCantidadCajasProveedor + " Kilos: " + menorCantidadCajasKilos + ". Cantidad de cajas: " + menorCantidadCajas + ". Origen: " + menorCantidadCajasOrigen + ". Marca: " + menorCantidadCajasMarca + ". Esto sucedio en el ingreso numero: " + menorCantidadCajasIngreso + "\n";

    if (banderaMasKilos != 0) {
        mensajeB = "B - La marca de galletitas dulces con mas kilos es " + masKilosMarca + " con " + masKilosGalletitas + " kilos \n";
    }
    else {
        mensajeB = "B - No hubo galletitas dulces \n";
    }

    mensajeC = "C - El porcentaje de cajas de cada tipo es de: \n";

    if (contadorConSal != 0) {
        porcentajeTotal = acumuladorConSal * 100 / acumuladorCajas;
        mensajeC += " Con sal : " + porcentajeTotal + "%\n";
    }
    else {
        mensajeC += " No hubo cajas de galletitas con sal\n";
    }

    if (contadorDulces != 0) {
        porcentajeTotal = acumuladorDulces * 100 / acumuladorCajas;
        mensajeC += " dulces : " + porcentajeTotal + "%\n";
    }
    else {
        mensajeC += " No hubo cajas de galletitas dulces\n";
    }

    if (contadorSinSal != 0) {
        porcentajeTotal = acumuladorSinSal * 100 / acumuladorCajas;
        mensajeC += " sin sal : " + porcentajeTotal + "%\n";

    }
    else {
        mensajeC += " No hubo cajas de galletitas sin sal\n";
    }

    alert(mensajeA + mensajeB + mensajeC);
}




/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar2() {

    //    let nombre; //declaracion de variable. Solicita al S.O. un espacio en memoria para almacenar un valor.

    //    const nombre2 = "gon";

    //nombre2 = "ana";//ERROR. Las variables constantes solo se puede inicializar 1 vez. 
    //una vez inicializadas no se puede cambiar mas su valor. son de solo lectura.




    /*
        nombre = "Gonzalo"; //inicializacion de una variable, asignando un valor, el cual se 
        //almacenara en el espacio en memoria reservado por el S.O.
    
        alert(nombre);
    
        nombre = "Fabian"; //reasignacion de una variable.
    */

    //prompt("Ingrese su nombre"); //Primer parametro, el mensaje que recibe el usuario. 
    //los parametros opcionales aparecen con '?'
    //la funcion prompt() cuando hacemos click en 'aceptar', devuelve 
    //un string. Si ponemos 'cancelar', devuelve Null.





    //cuando hay un '=', el interprete primero ejecuta lo que esta a la derecha, y cuando se
    //termina de resolver lo que esta en la derecha, se copia/asigna a lo que esta en la izquierda.
    //   nombre = prompt();
    //prompt() es como un Console.ReadLine();



    //    alert(nombre);




    var nombreDeUsuario;
    nombreDeUsuario = prompt("Dato a tomar:", "Gonzalo");
    //aparece por defecto el nombre "Gonzalo" en la caja de texto.
    //console.log(nombreDeUsuario);
    //nombreDeUsuario= 0;

    alert(nombreDeUsuario);



    var nombre;
    vacunaRecibida = prompt("Por favor, ingrese el nombre de la vacuna recibida: 'SputnikV', 'AstraZeneca', 'Otra'");
    vacunaRecibida = vacunaRecibida.toLowerCase();

    while (vacunaRecibida != "sputnikv" && vacunaRecibida != "astrazeneca" && vacunaRecibida != "otra") {
        vacunaRecibida = prompt("Dato invalido. Por favor, ingrese el nombre de la vacuna recibida: 'SputnikV', 'AstraZeneca', 'Otra'");
        vacunaRecibida = vacunaRecibida.toLowerCase();
    }

}



