/*
AUTOR: Gonzalo Zafferano
Consigna:
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{



   

 /* 
    
    //FORMA 4: SOLO SWITCH
    //declaracion de variables    
    const PRECIO_LAMPARA;
    const IIBB;
    var cantidadDeLamparas;
    var marcasDeLamparas;
    var precioLamparaConDto;
    var precioTotal;
    var impuestosIIBB;
    var descuento;
    var mensaje;

    const PRECIO_LAMPARA = 35;
    const IIBB = 10;

    //asignacion
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcasDeLamparas = document.getElementById("Marca").value;

    switch (cantidadDeLamparas) 
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            switch (marcasDeLamparas) 
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
            break;
        case 4:
            switch (marcasDeLamparas) 
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 5:
            switch (marcasDeLamparas) 
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        default:
            descuento = 50;
            break;
    }

    precioLamparaConDto = PRECIO_LAMPARA - PRECIO_LAMPARA * descuento / 100;

    precioTotal = cantidadDeLamparas * precioLamparaConDto;

    if (precioTotal > 120) 
    {
        mensaje = "El precio final sin IIBB es de: $";
        mensaje += precioTotal;

        impuestosIIBB = precioTotal * IIBB / 100;
        precioTotal += impuestosIIBB;

        mensaje += "usted pago $";
        mensaje += impuestosIIBB;
        mensaje += " mas, en concepto de IIBB, y para un TOTAL de $";
        mensaje += precioTotal;
    }
    else 
    {
        mensaje = "Total a pagar $";
        mensaje += precioTotal;        
    }
    alert(mensaje);
    document.getElementById("txtIdprecioDescuento").value = precioTotal;


*/ 










    
/*   

        //FORMA 3: IF - Switch
        //Para el departamento de iluminación:
        //Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
        //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
        //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
        //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
        // ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    
        //declaracion de variables  
        var PRECIO_LAMPARA;
        var IIBB;  
        var cantidadDeLamparas;
        var marcasDeLamparas;
        var precioFinal;
        var precioTotal;
        var descuento;
        var impuestosIIBB;
        var mensaje;

        const PRECIO_LAMPARA = 35;
        const IIBB = 10;
    
        //asignacion
        cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
        marcasDeLamparas = document.getElementById("Marca").value;
    
        //calculo el precio total
        precioTotal = cantidadDeLamparas * PRECIO_LAMPARA;
    
        //comprobaciones:
        if (cantidadDeLamparas >= 6) 
        {
           descuento=50;
        }
        else if (cantidadDeLamparas == 5) 
        {
            switch (marcasDeLamparas) 
            {
                case "ArgentinaLuz":
                    descuento=40; 
                    break;
                default:
                    descuento=30; 
                    break;
            }
        }
        else if (cantidadDeLamparas == 4) 
        {
            switch (marcasDeLamparas) 
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25; 
                    break;
                default:
                    descuento=20;
                    break;
            }
        }
        else if (cantidadDeLamparas == 3) 
        {
            switch (marcasDeLamparas) 
            {
                case "ArgentinaLuz":
                    descuento=15;
                    break;
                case "FelipeLamparas":
                    descuento=10;
                    break;
                default:
                    descuento=5; 
                    break;
            }
        }
        else 
        {
            descuento=0;
        }
    
        precioFinal=precioTotal-(precioTotal*descuento/100);

    if (precioFinal >= 120) 
    {
        impuestosIIBB = precioFinal * IIBB/100;

        mensaje="Precio final sin IIBB es de $";
        mensaje+=precioFinal;
        mensaje+=". Usted pagara $";
        mensaje+=impuestosIIBB;
        mensaje+=" de IIBB. En total, usted abonara: $";
     
        precioFinal = precioFinal + impuestosIIBB;

        mensaje+=precioFinal;       
    }
    else 
    {
        mensaje= "Total a pagar $";
        mensaje+= precioFinal;
    }

    alert(mensaje);
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
*/
  


















/*
  
    
    
    //FORMA 1: Switch - IF
    //declaracion de variables    
    const PRECIO_LAMPARA;
    const IIBB;
    var cantidadDeLamparas;
    var marcasDeLamparas;
    var precioLamparaConDto;
    var precioTotal;
    var impuestosIIBB;
    var descuento;
    var mensaje;

    const PRECIO_LAMPARA = 35;
    const IIBB = 10;

    //asignacion
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcasDeLamparas = document.getElementById("Marca").value;

    switch (cantidadDeLamparas) 
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marcasDeLamparas == "ArgentinaLuz") 
            {
                descuento = 15;
            }
            else 
            {
                if (marcasDeLamparas == "FelipeLamparas") 
                {
                    descuento = 10;
                }
                else 
                {
                    descuento = 5;
                }
            }
            break;
        case 4:
            if (marcasDeLamparas == "ArgentinaLuz" || marcasDeLamparas == "FelipeLamparas") 
            {
                descuento = 25;
            }
            else 
            {
                descuento = 20;
            }
            break;
        case 5:
            if (marcasDeLamparas == "ArgentinaLuz") 
            {
                descuento = 40;
            }
            else 
            {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
            break;
    }

    precioLamparaConDto = PRECIO_LAMPARA - PRECIO_LAMPARA * descuento / 100;

    precioTotal = cantidadDeLamparas * precioLamparaConDto;

    if (precioTotal > 120) 
    {
        mensaje = "El precio final sin IIBB es de: $";
        mensaje += precioTotal;

        impuestosIIBB = precioTotal * IIBB / 100;
        precioTotal += impuestosIIBB;

        mensaje += "usted pago $";
        mensaje += impuestosIIBB;
        mensaje += " mas, en concepto de IIBB, y para un TOTAL de $";
        mensaje += precioTotal;
    }
    else 
    {
        mensaje = "Total a pagar $";
        mensaje += precioTotal;
    }
    alert(mensaje);
    document.getElementById("txtIdprecioDescuento").value = precioTotal;
*/




    

    //ERRORES: HAGO LA MISMA CUENTA EN CADA CONDICION. SE PUEDE SIMPLIFICAR 
    //HACIENDOLA 1 VEZ FUERA DE LAS CONDICIONES
    //ERRORES: MAS PROLIJO CON SWITCH, AHORRO MUCHAS LLAVES, MUCHAS COMPROBACIONES.

    //Para el departamento de iluminación:
    //Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
    //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
    // ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 


    //FORMA 2: IF - IF 
    //declaracion de variables
    const PRECIO_LAMPARA;
    const IIBB;    
    var cantidadDeLamparas;
    var marcasDeLamparas;
    var precioFinal;
    var precioTotal;
    var impuestosIIBB;
    var descuento;
    var mensaje;

    const PRECIO_LAMPARA = 35;
    const IIBB = 10;

    //asignacion
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcasDeLamparas = document.getElementById("Marca").value;

    //calculo el precio total
    precioTotal = cantidadDeLamparas * PRECIO_LAMPARA;

    //comprobaciones:
    if (cantidadDeLamparas >= 6) 
    {
        descuento = 50;
    }
    else 
    {
        if (cantidadDeLamparas == 5) 
        {
            if (marcasDeLamparas == "ArgentinaLuz") 
            {
                descuento = 40;
            }
            else 
            {
                descuento = 30;
            }
        }
        else 
        {
            if (cantidadDeLamparas == 4) 
            {
                if (marcasDeLamparas == "ArgentinaLuz" || marcasDeLamparas == "FelipeLamparas") 
                {
                    descuento = 25;
                }
                else 
                {
                    descuento = 20;
                }
            }
            else 
            {
                if (cantidadDeLamparas == 3) 
                {
                    if (marcasDeLamparas == "ArgentinaLuz") 
                    {
                        descuento = 15;
                    }
                    else 
                    {
                        if (marcasDeLamparas == "FelipeLamparas") 
                        {
                            descuento = 10;
                        }
                        else 
                        {
                            descuento = 5;
                        }
                    }
                }
                else 
                {
                    descuento = 0;
                }
            }
        }
    }

    precioFinal = precioTotal - (precioTotal * descuento / 100);

    if (precioFinal >= 120) 
    {
        impuestosIIBB = precioFinal * IIBB/100;
        mensaje = "Precio final sin IIBB es de $";
        mensaje += precioFinal.toFixed(2);
        mensaje += ". Usted pagara $";
        mensaje += impuestosIIBB;
        mensaje += " de IIBB. En total, usted abonara: $";

        precioFinal = precioFinal + impuestosIIBB;

        mensaje += precioFinal;
    }
    else 
    {
        mensaje = "Total a pagar $";
        mensaje += precioFinal;
    }

    alert(mensaje);
    document.getElementById("txtIdprecioDescuento").value = precioFinal;


}






















