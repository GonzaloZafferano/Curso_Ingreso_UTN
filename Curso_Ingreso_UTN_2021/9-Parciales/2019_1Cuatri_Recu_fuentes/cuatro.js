/*
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.
*/function mostrar() 
{
    var numeroUno;
    var numeroDos;
    var mensaje;
    var resultado;

    mensaje="";
    resultado = 0;
    numeroUno = prompt("Ingrese un numero");
    numeroUno = parseFloat(numeroUno);

    numeroDos = prompt("Ingrese un numero");
    numeroDos = parseFloat(numeroDos);

    if (numeroUno == numeroDos) 
    {
        resultado=Math.pow(numeroUno, 2);
        mensaje = "El cuadrado del numero ingresado (" + numeroUno + ") es: " + resultado +". ";
    }

    if (numeroUno % numeroDos == 0) 
    {
        resultado=numeroUno-numeroDos;
        mensaje += "La resta es: " + resultado+". ";
    }
    else 
    {
        resultado= numeroUno % numeroDos;
        mensaje += "El resto es " +resultado+". ";
        if (resultado > 3) 
        {
            mensaje += "El resto es mayor que 3";
        }
    }
    alert(mensaje);

}
