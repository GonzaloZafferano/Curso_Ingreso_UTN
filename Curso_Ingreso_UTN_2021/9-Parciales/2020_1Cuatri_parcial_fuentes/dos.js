/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar() 
{

  var respuesta;
  var productoConstruccion;
  var cantidadDeBolsas;
  var totalAPagarCemento;
  var totalAPagarArena;
  var totalAPagarCal;
  var precioPorBolsa;
  var descuento;
  var importe;
  var importeBruto;
  var importeTotalConDto;
  var mensaje;
  var acumuladorCal;
  var acumuladorArena;
  var acumuladorCemento;
  var tipoConMasCantidadDeBolsas;
  var mensajeD;
  var PrecioMasCaro;
  var flag;
  var tipoMasCaro;
  var mensajeE;
  var totalBolsas;

  importe = 0;
  importeBruto = 0;
  totalBolsas = 0;
  flag = 0;
  descuento = 0;
  precioCemento = 0;
  precioArena = 0;
  precioCal = 0;
  acumuladorCal = 0;
  acumuladorArena = 0;
  acumuladorCemento = 0;
  respuesta = 's';

  while (respuesta == 's') 
  {

    productoConstruccion = prompt("Por favor, ingrese el producto que desea: arena, cal, cemento");

    while ((productoConstruccion != "arena") && (productoConstruccion != "cal") && (productoConstruccion != "cemento")) 
    {
      productoConstruccion = prompt("Producto invalido. Por favor, ingrese un producto valido");
    }

    cantidadDeBolsas = prompt("Por favor, ingrese la cantidad de bolsas que desea llevar");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);

    while (cantidadDeBolsas < 1) 
    {
      cantidadDeBolsas = prompt("Cantidad invalida. Por favor, ingrese una cantidad valida de bolsas que desea llevar");
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }


    precioPorBolsa = prompt("Por favor, ingrese el precio por bolsa");
    precioPorBolsa = parseFloat(precioPorBolsa);
    while (precioPorBolsa < 1) 
    {
      precioPorBolsa = prompt("Precio invalido. Por favor, ingrese el precio por bolsa");
      precioPorBolsa = parseFloat(precioPorBolsa);
    }

    switch (productoConstruccion) 
    {
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

    if (flag == 0) 
    {
      flag = 1;
      PrecioMasCaro = precioPorBolsa;
      tipoMasCaro = productoConstruccion;
    }
    else 
    {
      if (precioPorBolsa > PrecioMasCaro) 
      {
        PrecioMasCaro = precioPorBolsa;
        tipoMasCaro = productoConstruccion;
      }
    }
    totalBolsas += cantidadDeBolsas;

    importe = cantidadDeBolsas * precioPorBolsa;
    importeBruto += importe;

    respuesta = prompt("desea continuar? 's' o 'n'");
  }


  if (acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal) 
  {
    tipoConMasCantidadDeBolsas = "Cemento";
  }
  else 
  {
    if (acumuladorCal > acumuladorArena) 
    {
      tipoConMasCantidadDeBolsas = "Cal";
    }
    else 
    {
      tipoConMasCantidadDeBolsas = "Arena";
    }
  }

  if (totalBolsas > 30) 
  {
    descuento = 25;
  }
  else 
  {
    if (totalBolsas > 10) 
    {
      descuento = 15;
    }
  }

  mensaje = "Total bruto a pagar: $";
  mensaje += importeBruto;
  mensaje += ". ";

  if (descuento != 0) 
  {
    importeTotalConDto = importeBruto - importeBruto * descuento / 100;

    mensaje += "Tiene un descuento del ";
    mensaje += descuento;
    mensaje += "%. El total a pagar con descuento es de: $";
    mensaje += importeTotalConDto;
  }

  mensajeD = "El producto con mas cantidad de bolsas es: ";
  mensajeD += tipoConMasCantidadDeBolsas;

  mensajeE = "El producto mas caro es: ";
  mensajeE += tipoMasCaro;

  alert(mensaje + "\n" + mensajeD + "\n" + mensajeE);
}
