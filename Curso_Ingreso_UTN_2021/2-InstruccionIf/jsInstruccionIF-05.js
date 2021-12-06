//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

     if ( edadUsuario <=12 || edadUsuario >=18)
	 {
		 mensaje = "Usted no es un adolescente. Usted tiene ";
		 mensaje+= edadUsuario;
		 mensaje+=" años";
		 	
		 alert(mensaje);

	 }
	
	
}//FIN DE LA FUNCIÓN


/*
Autor: Gonzalo Zafferano
Division: J
Consigna:
EJERCICIO 1
Un restaurante necesita un programa que permita 
ingresar datos de los platos con su precio a pagar
y cantidad hasta que el cliente quiera. Por cada cliente, se ingresa:
plato: (validar "ravioles", "milanesa", "pizza").
precio del plato (desde 100 hasta 500)
cantidad (mas que 0)
medio de pago (validar "efectivo", "debito", "credito")
a)	El importe total de todos los clientes.
        Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
        Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.
*//*
function mostrar() {
    var plato;
    var precioPlato;
    var cantidad;
    var medioDePago;
    var respuesta;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var importeTotal;
    var acumuladorImporteTotal;
    var descuento;
    var acumuladorEfectivo;
    var precioTotalPlatos;
    var contadorDebito;
    var acumuladorDebito;
    var promedioDebito;
    var acumuladorMilanesas;
    var acumuladorPizzas;
    var acumuladorRavioles;
    var contadorMilanesa;
    var contadorRavioles;
    var contadorPizza;
    var banderaMasBarato;
    var promedioPorPlato;
    var platoMasBaratoPrecio;
    var platoMasBaratoNombre;

    banderaMasBarato = 0;
    contadorDebito = 0;
    acumuladorDebito = 0;
    acumuladorEfectivo = 0;
    acumuladorImporteTotal = 0;
    acumuladorMilanesas = 0;
    acumuladorPizzas = 0;
    acumuladorRavioles = 0;
    contadorMilanesa = 0;
    contadorRavioles = 0;
    contadorPizza = 0;

    do {

        plato = prompt("Por favor, ingrese el plato: 'ravioles', 'milanesa', 'pizza'");
        plato = plato.toLowerCase();

        while (plato != "ravioles" && plato != "milanesa" && plato != "pizza") {
            plato = prompt("Dato invalido. Por favor, ingrese el plato: 'ravioles', 'milanesa', 'pizza'");
            plato = plato.toLowerCase();
        }

        precioPlato = prompt("Por favor, ingrese el precio del plato. 100 - 500");
        precioPlato = parseFloat(precioPlato);

        while (precioPlato < 100 || precioPlato > 500 || isNaN(precioPlato)) {
            precioPlato = prompt("Dato invalido. Por favor, ingrese el precio del plato. 100 - 500");
            precioPlato = parseFloat(precioPlato);
        }

        cantidad = prompt("Por favor, ingrese cantidad");
        cantidad = parseInt(cantidad);

        while (cantidad < 1 || isNaN(cantidad)) {
            cantidad = prompt("Dato invalido. Por favor, ingrese cantidad");
            cantidad = parseInt(cantidad);
        }

        medioDePago = prompt("Por favor, ingrese el medio de pago: 'efectivo', 'debito', 'credito'");
        medioDePago = medioDePago.toLowerCase();

        while (medioDePago != "efectivo" && medioDePago != "debito" && medioDePago != "credito") {
            medioDePago = prompt("Dato invalido. Por favor, ingrese el medio de pago: 'efectivo', 'debito', 'credito'");
            medioDePago = medioDePago.toLowerCase();
        }

        if (medioDePago == "efectivo") {
            descuento = 10;
        }
        else {
            if (medioDePago == "credito") {
                descuento = -15;
            }
            else {
                descuento = 0;
            }
        }

        precioTotalPlatos = cantidad * precioPlato;

        importeTotal = precioTotalPlatos - precioTotalPlatos * descuento / 100;

        acumuladorImporteTotal += importeTotal;

        if (medioDePago == "efectivo") {
            acumuladorEfectivo += precioTotalPlatos;
        }

        switch (medioDePago) {
            case "credito":

                break;

            case "debito":
                acumuladorDebito += cantidad;
                contadorDebito++;
                break;

            case "efectivo":

                break;
        }

        switch (plato) {
            case "milanesa":
                acumuladorMilanesas += cantidad;
                contadorMilanesa++;
                break;

            case "pizza":
                acumuladorPizzas += cantidad;
                contadorPizza++;
                break;

            case "ravioles":
                acumuladorRavioles += cantidad;
                contadorRavioles++;
                break;
        }

        if (banderaMasBarato == 0 || precioTotalPlatos < platoMasBaratoPrecio) {
            platoMasBaratoPrecio = precioTotalPlatos;
            banderaMasBarato = 1;
            platoMasBaratoNombre = plato;
        }

        respuesta = prompt("Presione 's' para continuar");
        respuesta = respuesta.toLowerCase();
    } while (respuesta == 's');

    mensajeA = "A - El importe total de todos los clientes es $" + acumuladorImporteTotal + "\n";

    if (acumuladorEfectivo != 0) {
        mensajeB = "B - El importe total de todos los clientes que pagaron con efectivo es de $" + acumuladorImporteTotal + "\n";
    }
    else {
        mensajeB = "B - No hubo pagos con efectivo \n";

    }

    if (contadorDebito != 0) {
        promedioDebito = acumuladorDebito / contadorDebito;
        mensajeC = "C - El promedio de ventas con debito es del " + promedioDebito + "\n";
    }
    else {
        mensajeC = "C - No hubo ventas con debito\n";
    }


    mensajeD = "D - El promedio por plato es \n";

    if (contadorRavioles != 0) {
        promedioPorPlato = acumuladorRavioles / contadorRavioles;
        mensajeD += "Ravioles - El promedio por plato es" + promedioPorPlato + "\n";

    }
    else {
        mensajeD += "No hubo platos de ravioles \n";
    }
    if (contadorPizza != 0) {
        promedioPorPlato = acumuladorPizzas / contadorPizza;
        mensajeD += "pizza - El promedio por plato es" + promedioPorPlato + "\n";
    }
    else {
        mensajeD += "No hubo platos de pizza \n";
    }
    if (contadorMilanesa != 0) {
        promedioPorPlato = acumuladorMilanesas / contadorMilanesa;
        mensajeD += "milanesa - El promedio por plato es" + promedioPorPlato + "\n";
    }
    else {
        mensajeD += "No hubo platos de milanesa \n";
    }

    mensajeD += "El plato mas barato es" + platoMasBaratoNombre + " y costo $" + platoMasBaratoPrecio;

    alert(mensajeA + mensajeB + mensajeC + mensajeD);

}

*/