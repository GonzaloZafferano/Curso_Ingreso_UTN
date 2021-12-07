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


/*

SIMULACRO JULIO 2021

AUTOR: Gonzalo Zafferano
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, 
hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/
/*
function mostrar() {

	var tipoProducto;
	var cantidadDeBolsas;
	var precioPorBolsa;
	var respuesta;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var totalAPagarSinDto;
	var totalPorCompra;
	var descuento;
	var acumuladorDeBolsas;
	var totalAPagarConDto;
	var acumuladorYerba;
	var acumuladorAzucar;
	var acumuladorCafe;
	var tipoConMasCantidadDeBolsas;
	var mayorCantidadDeBolsas;
	var banderaCompraMasBarata;
	var compraMasBarataTipo;
	var compraMasBarataPrecio;
  
	banderaCompraMasBarata = 0;
	acumuladorYerba = 0;
	acumuladorCafe = 0;
	acumuladorAzucar = 0;
	descuento = 0;
	acumuladorDeBolsas = 0;
	totalAPagarSinDto = 0;
	respuesta = 's';
	mensajeA = "";
	mensajeB = "";
	mensajeC = "";
	mensajeD = "";
  
  
	while (respuesta == 's') {
  
	  tipoProducto = prompt("Por favor, ingrese el tipo de producto: Yerba, Azúcar, Café");
	  tipoProducto = tipoProducto.toLowerCase();
  
	  while (tipoProducto != "yerba" && tipoProducto != "azucar" && tipoProducto != "cafe") {
		tipoProducto = prompt("Dato invalido. Por favor, ingrese el tipo de producto: Yerba, Azúcar, Café");
		tipoProducto = tipoProducto.toLowerCase();
  
	  }
  
	  cantidadDeBolsas = prompt("Por favor, ingrese la cantidad de bolsas");
	  cantidadDeBolsas = parseInt(cantidadDeBolsas);
  
	  while (cantidadDeBolsas < 1 || isNaN(cantidadDeBolsas)) {
		cantidadDeBolsas = prompt("Dato invalido. Por favor, ingrese la cantidad de bolsas");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);
	  }
  
	  precioPorBolsa = prompt("Por favor, ingrese el precio por bolsa");
	  precioPorBolsa = parseFloat(precioPorBolsa);
  
	  while (precioPorBolsa < 1 || isNaN(precioPorBolsa)) {
		precioPorBolsa = prompt("Dato invalido. Por favor, ingrese el precio por bolsa");
		precioPorBolsa = parseFloat(precioPorBolsa);
	  }
  
	  acumuladorDeBolsas += cantidadDeBolsas;
  
	  totalPorCompra = cantidadDeBolsas * precioPorBolsa;
  
	  totalAPagarSinDto += totalPorCompra;
  
	  if (banderaCompraMasBarata == 0) {
		banderaCompraMasBarata = 1;
		compraMasBarataPrecio = totalPorCompra;
		compraMasBarataTipo = tipoProducto;
  
	  }
	  else {
		if (totalPorCompra < compraMasBarataPrecio) {
		  compraMasBarataPrecio = totalPorCompra;
		  compraMasBarataTipo = tipoProducto;
		}
	  }
	  switch (tipoProducto) {
		case "azucar":
		  acumuladorAzucar += cantidadDeBolsas;
		  break;
		case "cafe":
		  acumuladorCafe += cantidadDeBolsas;
		  break;
		case "yerba":
		  acumuladorYerba += cantidadDeBolsas;
		  break;
	  }
  
	  respuesta = prompt("Presione 's' para continuar");
	}
  
  
	if (acumuladorDeBolsas > 10) {
	  descuento = 15;
  
	}
	else {
	  if (acumuladorDeBolsas > 5) {
		descuento = 10;
	  }
	}
  
	if (descuento != 0) {
	  totalAPagarConDto = totalAPagarSinDto - totalAPagarSinDto * descuento / 100;
	  mensajeB = "El importe total a pagar con descuento es de $ " + totalAPagarConDto + "\n";
	}
  
	if (acumuladorYerba > acumuladorCafe && acumuladorYerba > acumuladorAzucar) 
	{
	  tipoConMasCantidadDeBolsas = "Yerba";
	  mayorCantidadDeBolsas = acumuladorYerba;
	}
	else 
	{
	  if (acumuladorCafe > acumuladorAzucar) 
	  {
		tipoConMasCantidadDeBolsas = "Cafe";
		mayorCantidadDeBolsas = acumuladorCafe;
	  }
	  else 
	  {
		tipoConMasCantidadDeBolsas = "Azucar";
		mayorCantidadDeBolsas = acumuladorAzucar;
	  }
	}
  
	mensajeA = "El importe total a pagar, sin descuento es $" + totalAPagarSinDto + "\n";
  
	mensajeC = "El tipo con mayor cantidad de bolsas es " + tipoConMasCantidadDeBolsas + ", y tiene " + mayorCantidadDeBolsas + " bolsas \n"
  
	mensajeD = "El tipo de la compra mas barata es " + compraMasBarataTipo + " y su precio es $" + compraMasBarataPrecio;
	
	alert(mensajeA + mensajeB + mensajeC + mensajeD);
  }
*/  