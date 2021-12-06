/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
    var precioUno, precioDos, precioTres, sumaDePrecios;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaDePrecios = precioUno + precioDos + precioTres;

    alert("La suma de los tres precios es: $" + sumaDePrecios);

}

function Promedio() 
{
    var precioUno, precioDos, precioTres, sumaDePrecios, promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaDePrecios = precioUno + precioDos + precioTres;

    promedio = sumaDePrecios / 3;
    alert("El promedio de los tres precios es: " + promedio.toFixed(2));
    //El metodo toFixed() retorna un string, con el numero ENTERO y la cantidad de 
    //digitos decimales (despues del punto decimal) especificados en el parametro. 
    //toFixed(2) retornara el numero ENTERO y los 2 primeros numeros (redondeando)
    //despues del punto decimal.
}

function PrecioFinal() 
{
    var precioUno, precioDos, precioTres, sumaDePrecios, precioFinalConIva;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaDePrecios = precioUno + precioDos + precioTres;
    precioFinalConIva = (sumaDePrecios * 1.21).toFixed(2);

    alert("El precio final con IVA (21% extra) es: $" + precioFinalConIva);

}