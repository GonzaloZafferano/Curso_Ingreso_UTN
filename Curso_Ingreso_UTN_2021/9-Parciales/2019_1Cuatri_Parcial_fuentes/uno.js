/*
AUTOR: ZAFFERANO GONZALO
CONSIGNA:
Realizar el algoritmo que  pida los datos necesarios para un triángulo 
equilátero por prompt y que muestre el perímetro por alert.

*/
function mostrar()
{
    var ladoA,perimetroDelTriangulo,mensaje;

    ladoA=parseInt(prompt("Por favor, ingrese el valor de uno de los lado del triangulo equilatero, para obtener el perimetro del mismo"));

    perimetroDelTriangulo=ladoA*3;

    mensaje="El perimetro del triangulo equilatero, en base al dato suministrado (";
    mensaje+=ladoA;
    mensaje+=") es: ";
    mensaje+=perimetroDelTriangulo;

    alert(mensaje);


}
