/*
AUTOR: ZAFFERANO GONZALO
CONSIGNA:
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.

*/


function mostrar()
{
    var precio,porcentajeConDescuento,precioFinalConDto,mensaje,totalDescuento;

    precio=parseFloat(prompt("Por favor, ingrese el precio del producto"));
    porcentajeConDescuento=parseFloat(prompt("Por favor, ingrese el porcentaje de descuento"));

    totalDescuento=precio*porcentajeConDescuento/100;
    precioFinalConDto=precio-totalDescuento;

    mensaje="El precio final, con descuento del ";
    mensaje+=porcentajeConDescuento;
    mensaje+="% es de ";
    mensaje+="$";
    mensaje+=precioFinalConDto;

    document.getElementById("elPrecioFinal").value=precioFinalConDto;

    alert(mensaje);

}
