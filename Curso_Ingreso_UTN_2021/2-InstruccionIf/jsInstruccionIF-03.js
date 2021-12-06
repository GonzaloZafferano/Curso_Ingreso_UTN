//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad debemos informar si la persona es mayor de edad, 
//sino informar que es un menor de edad.

function mostrar()
{
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if ( edadUsuario >= 18)
	{
		mensaje = "Ustes de mayor de edad. Usted tiene ";
		mensaje += edadUsuario;
		mensaje +=" años.";
	}
	else 
	{
		mensaje = "Usted es menor de edad. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años";
	}
		alert(mensaje);
}//FIN DE LA FUNCIÓN

/*Mostrar información
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
/*
function mostrar() {

	var tipoDeProducto;
	var cantidadDeBolsas;
	var precioPorBolsa;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var respuesta;
	var totalAPagarPorCompraSinDto;
	var acumuladorTotalAPagarPorCompra;
	var descuento;
	var acumuladorBolsas;
	var totalAPagarPorCompraConDto;
	var masUnidadesTipo;
	var masUnidadesCantidad;
	var acumuladorArena;
	var acumuladorCal;
	var acumuladorCemento;
	var banderaPrimerMasCaro;
	var masCaroPrecio;
	var masCaroTipo;
  
	masCaroPrecio = 0;
	banderaPrimerMasCaro = 0;
	acumuladorArena = 0;
	acumuladorCal = 0;
	acumuladorCemento = 0;
	acumuladorBolsas = 0;
	descuento = 0;
	acumuladorTotalAPagarPorCompra = 0;
	respuesta = 's';
	mensajeA = "";
	mensajeB = "";
	mensajeC = "";
	mensajeD = "";
  
	while (respuesta == 's') {
  
	  tipoDeProducto = prompt("Por favor, ingrese el tipo de producto: 'arena', 'cal', 'cemento'");
	  tipoDeProducto = tipoDeProducto.toLowerCase();
  
	  while (tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento") {
		tipoDeProducto = prompt("Dato invalido. Por favor, ingrese el tipo de producto: 'arena', 'cal', 'cemento'");
		tipoDeProducto = tipoDeProducto.toLowerCase();
	  }
  
	  cantidadDeBolsas = prompt("Por favor, ingrese la cantidad de bolsas.");
	  cantidadDeBolsas = parseInt(cantidadDeBolsas);
  
	  while (cantidadDeBolsas < 1 || isNaN(cantidadDeBolsas)) {
		cantidadDeBolsas = prompt("Dato invalido. Por favor, ingrese la cantidad de bolsas.");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);
	  }
  
	  precioPorBolsa = prompt("Por favor, ingrese el precio por bolsa");
	  precioPorBolsa = parseInt(precioPorBolsa);
  
	  while (precioPorBolsa < 1 || isNaN(precioPorBolsa)) {
		precioPorBolsa = prompt("Dato invalido. Por favor, ingrese el precio por bolsa");
		precioPorBolsa = parseInt(precioPorBolsa);
	  }
  
	  totalAPagarPorCompraSinDto = cantidadDeBolsas * precioPorBolsa;
	  acumuladorTotalAPagarPorCompra += totalAPagarPorCompraSinDto;
  
	  acumuladorBolsas += cantidadDeBolsas;
  
	  switch (tipoDeProducto) {
		case "arena":
		  acumuladorArena += cantidadDeBolsas;
		  break;
  
		case "cal":
		  acumuladorCal += cantidadDeBolsas;
		  break;
  
		case "cemento":
		  acumuladorCemento += cantidadDeBolsas;
		  break;
	  }
  
	  if (precioPorBolsa > masCaroPrecio || banderaPrimerMasCaro == 0) {
		banderaPrimerMasCaro = 1;
		masCaroPrecio = precioPorBolsa;
		masCaroTipo = tipoDeProducto;
	  }
  
	  respuesta = prompt("Presione 's' para continuar");
	}
  
	mensajeA = "El importe total a pagar sin descuento es de $" + acumuladorTotalAPagarPorCompra + "\n";
  
  
	if (acumuladorBolsas > 30) {
	  descuento = 25;
	}
	else {
	  if (acumuladorBolsas > 10) {
		descuento = 15;
	  }
	}
  
	if (descuento != 0) {
	  totalAPagarPorCompraConDto = acumuladorTotalAPagarPorCompra - acumuladorTotalAPagarPorCompra * descuento / 100;
	  mensajeB = "El precio total, con descuento por haber comprado " + acumuladorBolsas + " bolsas es de $" + totalAPagarPorCompraConDto + "\n";
	}
  
  
	if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
	  masUnidadesCantidad = acumuladorArena;
	  masUnidadesTipo = "Arena";
	}
	else {
	  if (acumuladorCal > acumuladorCemento) {
		masUnidadesCantidad = acumuladorCal;
		masUnidadesTipo = "cal";
	  }
	  else {
		masUnidadesCantidad = acumuladorCemento;
		masUnidadesTipo = "Cemento";
  
	  }
	}
  
	mensajeC = "El tipo con mas cantidad de unidades es " + masUnidadesTipo + " con " + masUnidadesCantidad + " unidades \n";
  
	mensajeD = "El mas caro cuesta $" + masCaroPrecio + " y es " + masCaroTipo;
  
	alert(mensajeA + mensajeB + mensajeC + mensajeD);
  
  }
  */  