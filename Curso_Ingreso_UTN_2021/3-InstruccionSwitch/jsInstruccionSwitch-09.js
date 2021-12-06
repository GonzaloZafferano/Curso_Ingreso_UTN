/*AUTOR: GONZALO ZAFFERANO
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de 
una estacion del año y localidad para vacacionar para poder calcular 
el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/
function mostrar()
{
  
    var estacion;
    var destino;
    var aumentoODescuento;
    var precioFinal;
    var mensaje;
    const ESTADIA_BASE=15000;

    estacion = document.getElementById("txtIdEstacion").value;
    destino=document.getElementById("txtIdDestino").value;

    switch(estacion)
    {
        case "Invierno":
            if(destino=="Bariloche")
            {
                aumentoODescuento=-20;
            }
            else if(destino=="Mar del plata")
            {
                aumentoODescuento=20;
            }
            else 
            {
                aumentoODescuento=10;
            }
            break;
        case "Verano":
            if(destino=="Bariloche")
            {
                aumentoODescuento=20;
            }
            else if(destino=="Mar del plata")
            {
                aumentoODescuento=-20;
            }
            else 
            {
                aumentoODescuento=-10;
            }
            break;
        default:
            if(destino=="Cordoba")
            {
                aumentoODescuento=0;
            }
            else 
            {
                aumentoODescuento=-10;
            }
            break;
    }

    precioFinal=ESTADIA_BASE-(ESTADIA_BASE*aumentoODescuento/100);

    mensaje="El precio final para su estadia en ";
    mensaje+=destino;
    mensaje+=", en la estacion seleccionada (";
    mensaje+=estacion;
    mensaje+=") es de: $";
    mensaje+=precioFinal;

    alert(mensaje);



	

}//FIN DE LA FUNCIÓN