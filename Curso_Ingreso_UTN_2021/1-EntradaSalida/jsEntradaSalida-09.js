/*

Ejercicio 9 - bis. 
Se pide por Prompt() el % que se desea aumentar el sueldo.

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	/*



	//declaracion de variables
	var sueldo, sueldoConAumento;

	//inicializacion de variables
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//calculo
	sueldoConAumento = sueldo + sueldo*0.1;
	
	//asignacion de la propiedad 'value' del control/elemento input
	document.getElementById("txtIdResultado").value = sueldoConAumento;

	//alerta extra para el usuario
	alert(`Sueldo total, con aumento incluido del 10% es de: $${sueldoConAumento}`);




	*/







	//declaracion de variables
	var sueldo, sueldoConAumento, incremento, mensaje;


	incremento = parseInt(prompt("Ingrese en la caja de texto el porcentaje que desee aumentar: "));


	//inicializacion de variables
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//calculo
	//sueldo e incremento ya estan parseados a 'int'
	sueldoConAumento = sueldo + sueldo*incremento/100;
	
	//asignacion de la propiedad 'value' del control/elemento input
	document.getElementById("txtIdResultado").value = sueldoConAumento;

	//alerta extra para el usuario, usando 'mensaje'
	mensaje= "Sueldo total con aumento incluido del ";
	mensaje += incremento;
	mensaje += "% es de: $";
	mensaje+= sueldoConAumento;

	alert(mensaje);






}
