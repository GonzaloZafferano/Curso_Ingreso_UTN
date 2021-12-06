/*
Ejercicio 10 - Bis

Se pide por Prompt() el % que se desea descontar al importe.

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	/*



	//declaracion de las variables:
	var importe, resultadoConDescuento;
 
	//asigno las variables (inicializo)
	importe = parseInt(document.getElementById("txtIdImporte").value);

	//resultadoConDescuento = importe - importe*0.25;
	//o se puede hacer
	resultadoConDescuento = importe * 0.75;

	//seteo la propiedad 'value'
	document.getElementById("txtIdResultado").value = resultadoConDescuento;

	//mensaje para el usuario:
	alert(`Importe total, con descuento incluido del 25% es de $${resultadoConDescuento}`);





	*/






	
	//declaracion de las variables:
	var importe, resultadoConDescuento, porcentajeIngresado, mensaje;

	//inicializo con prompt()
	porcentajeIngresado = parseInt (prompt("Ingrese por favor el porcentaje del descuento: "));

 
	//asigno las variables (inicializo)
	importe = parseInt(document.getElementById("txtIdImporte").value);


	//importe y porcentaje ya estan parseados a 'int'
	resultadoConDescuento = importe - importe * porcentajeIngresado/100;

	//seteo la propiedad 'value'
	document.getElementById("txtIdResultado").value = resultadoConDescuento;


	//mensaje para el usuario:
	mensaje = "Importe total, con descuento incluido del ";
	mensaje += porcentajeIngresado;
	mensaje += "% es de $";
	mensaje += resultadoConDescuento;

	alert(mensaje);




}


/*
entrada:
-La entrada es a traves del input 'importe', a traves del ID
-(puede ser por prompt())

proceso:
-calculo el descuento
-aplico el descuento

salida:
*salida para usuario:
-La salida es a traves del input (readonly) 'resultado', a traves del ID
-(puede ser con alert())
-document.write

*salida para programador:
-console.log



*/