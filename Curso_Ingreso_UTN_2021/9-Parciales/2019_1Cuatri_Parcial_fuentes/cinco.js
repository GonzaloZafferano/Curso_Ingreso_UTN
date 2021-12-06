/*
AUTOR: ZAFFERANO GONZALO
CONSIGNA:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/
function mostrar() 
{
    var seleccionContinente;
    var descuentoORecargo;
    var formaDePago;
    var precioTotal;
    var precioTotalConDto;
    var cantidadDeDias;
    var mensaje;
    const PRECIO_DIA = 100;

    seleccionContinente = document.getElementById("Marca").value;
    
    cantidadDeDias=prompt("Por favor, ingrese la cantidad de dias que estara de visita en " + seleccionContinente);
    cantidadDeDias=parseInt(cantidadDeDias);
    
    formaDePago = prompt("Ingrese un numero por favor, para indicar la forma de pago: \nDebito. \nMercado Pago. \nEfectivo. \nOtras.");
    
    switch (seleccionContinente) 
    {
        case "América":
            descuentoORecargo = 50;
            switch (formaDePago) 
            {
                case "Debito":
                    descuentoORecargo+= 10;
                    break;
                default:
                    descuentoORecargo+=0;
                    break;
            }
            break;
        case "África":
            descuentoORecargo = 60;
            switch (formaDePago) 
            {
                case "Mercado Pago":
                case "Efectivo":
                    descuentoORecargo+= 15;
                    break;
                default:
                    descuentoORecargo+= 0;
                    break;
            }
            break;
        case "Europa":
            descuentoORecargo = 20;
            switch (formaDePago) 
            {
                case "Debito":
                    descuentoORecargo += 15; //20 + 15
                    break;
                case "Mercado Pago":
                    descuentoORecargo += 10;  //+10 descuento
                    break;
                default:
                    descuentoORecargo +=5; //+5 descuento
                    break;
            }
            break;
        default:
            descuentoORecargo= -20;
            break;
    }

    precioTotal=PRECIO_DIA*cantidadDeDias;
    precioTotalConDto=precioTotal-(precioTotal*descuentoORecargo/100);
       
    mensaje="El total a pagar es de $";
    mensaje+=precioTotalConDto;

    alert(mensaje);



/*
    var seleccionContinente;
    var descuentoORecargo;
    var formaDePago;
    var precioTotal;
    var precioTotalConDto;
    var cantidadDeDias;
    var mensaje;
    const PRECIO_DIA = 100;

    seleccionContinente = document.getElementById("Marca").value;
    
    cantidadDeDias=prompt("Por favor, ingrese la cantidad de dias que estara de visita en " + seleccionContinente);
    cantidadDeDias=parseInt(cantidadDeDias);
    
    formaDePago = prompt("Ingrese un numero por favor, para indicar la forma de pago: 1-'Debito'. 2-'Mercado Pago'. 3-'Efectivo'. 4-'Otras forma de pago.'");
    formaDePago = parseInt(formaDePago);

    mensaje="Buena eleccion! Usted reservo su viaje a ";
    mensaje+=seleccionContinente;
    mensaje+=", para una estadia de ";
    mensaje+=cantidadDeDias;
    mensaje+=" dias! ";

    switch (seleccionContinente) 
    {
        case "América":
            descuentoORecargo = 50;
            mensaje+="Los viajes a América cuentan con un 50% de descuento! ";
            switch (formaDePago) 
            {
                case 1:
                    descuentoORecargo+= 10;
                    mensaje+= "Ademas, por haber seleccionado Debito, usted tiene un 10% extra de descuento! ";
                    break;
                default:
                    descuentoORecargo+=0;
                    break;
            }
            break;
        case "África":
            descuentoORecargo = 60;
            mensaje+="Los viajes a África cuentan con un 60% de descuento! ";
            switch (formaDePago) 
            {
                case 2:
                case 3:
                    descuentoORecargo+= 15;
                    mensaje+= "Ademas, por haber seleccionado Mercado Pago/Efectivo, usted tiene un 15% extra de descuento! ";
                    break;
                default:
                    descuentoORecargo+= 0;
                    break;
            }
            break;
        case "Europa":
            descuentoORecargo = 20;
            mensaje+="Los viajes a Europa cuentan con un 20% de descuento! ";
            switch (formaDePago) 
            {
                case 1:
                    descuentoORecargo += 15; //20 + 15
                    mensaje+= "Ademas, por haber seleccionado Debito, usted tiene un 15% extra de descuento! ";
                    break;
                case 2:
                    descuentoORecargo += 10;  //+10 descuento
                    mensaje+= "Ademas, por haber seleccionado Mercado Pago, usted tiene un 10% extra de descuento! ";
                    break;
                default:
                    descuentoORecargo +=5; //+5 descuento
                    mensaje+= "Ademas, por haber seleccionado Efectivo u Otras formas de pago, usted tiene un 5% extra de descuento! ";
                    break;
            }
            break;
        default:
            descuentoORecargo= -20;
            mensaje+="Se informa que los viaje a ";
            mensaje+=seleccionContinente;
            mensaje+=", tienen un 20% de recargo. ";
            break;
    }

    precioTotal=PRECIO_DIA*cantidadDeDias;
    precioTotalConDto=precioTotal-(precioTotal*descuentoORecargo/100);
       
    mensaje+="El total a pagar es de $";
    mensaje+=precioTotalConDto;

    alert(mensaje);
*/





}
