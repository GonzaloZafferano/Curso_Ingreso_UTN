/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	

	//declaracion de variables:
	var numeroUno, numeroDos, resto;
		
	
	//asignacion de variables:
	numeroDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);

	//numero que divide: divisor
	numeroDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	if (numeroDividendo == 0 || numeroDivisor == 0)
	{ 
 		alert("No se puede dividir entre 0. Reintentar");
	}
	else 
	{

	resto = numeroDividendo % numeroDivisor;
		alert("el resto de la division es: " + resto);

	}


}

/*

SIMULACRO JULIO 2021

Autor: Gonzalo Zafferano 
Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/

/*
function mostrar() 
{
   var tipoProducto;
   var precioProducto;
   var cantidadUnidadesProducto;
   var marcaProducto;
   var capacidadAlmacenamientoProducto;
   var contador;
   var banderaMasBaratoSsd;
   var ssdMasBaratoMarca;
   var ssdMasBaratoPrecio;
   var ssdMasBaratoCantidadUnidades;
   var hddMasCaroPrecio;
   var hddMasCaroAlmacenamiento;
   var hddMasCaroCantidadDeUnidades;
   var banderaHddMasCaro;
   var acumuladorHdd;
   var mensajeA;
   var mensajeB;
   var mensajeC;

   mensajeA = "";
   mensajeB = "";
   mensajeC = "";
   contador = 0;
   acumuladorHdd = 0;
   banderaMasBaratoSsd = 0;
   banderaHddMasCaro = 0;

   while (contador < 5) 
   {
      tipoProducto = prompt("Por favor, ingrese el tipo de producto: HDD, SSD o SSDM2");
      tipoProducto = tipoProducto.toLowerCase();
      while (tipoProducto != "hdd" && tipoProducto != "ssd" && tipoProducto != "ssdm2") 
      {
         tipoProducto = prompt("Dato invalido. Por favor, ingrese el tipo de producto: HDD, SSD o SSDM2");
         tipoProducto = tipoProducto.toLowerCase();
      }

      precioProducto = prompt("Ingrese precio del producto: 5000 - 18000");
      precioProducto = parseFloat(precioProducto);
      while (precioProducto < 5000 || precioProducto > 18000 || isNaN(precioProducto)) 
      {
         precioProducto = prompt("Dato invalido. Ingrese precio del producto: 5000 - 18000");
         precioProducto = parseFloat(precioProducto);
      }

      cantidadUnidadesProducto = prompt("Ingrese la cantidad de unidades del producto: Maximo 50");
      cantidadUnidadesProducto = parseInt(cantidadUnidadesProducto);

      while (cantidadUnidadesProducto < 1 || cantidadUnidadesProducto > 50 || isNaN(cantidadUnidadesProducto)) 
      {
         cantidadUnidadesProducto = prompt("Dato invalido. Ingrese la cantidad de unidades del producto: Maximo 50");
         cantidadUnidadesProducto = parseInt(cantidadUnidadesProducto);
      }

      marcaProducto = prompt("Ingrese la marca del producto: Seagate, Western Digital, Kingston");
      marcaProducto = marcaProducto.toLowerCase();

      while (marcaProducto != "seagate" && marcaProducto != "western digital" && marcaProducto != "kingston") 
      {
         marcaProducto = prompt("Dato invalido. Ingrese la marca del producto: Seagate, Western Digital, Kingston");
         marcaProducto = marcaProducto.toLowerCase();
      }

      capacidadAlmacenamientoProducto = prompt("Ingrese la capacidad de almacenamiento del producto, en GIGAS: 250, 500, 1000, 2000 ");
      capacidadAlmacenamientoProducto = parseInt(capacidadAlmacenamientoProducto);

      while (isNaN(capacidadAlmacenamientoProducto) || (capacidadAlmacenamientoProducto != 250 && capacidadAlmacenamientoProducto != 500 && capacidadAlmacenamientoProducto != 1000 && capacidadAlmacenamientoProducto != 2000)) 
      {
         capacidadAlmacenamientoProducto = prompt("Dato invalido. Ingrese la capacidad de almacenamiento del producto, en GIGAS: 250, 500, 1000, 2000 ");
         capacidadAlmacenamientoProducto = parseInt(capacidadAlmacenamientoProducto);
      }

      if (tipoProducto == "ssd" && banderaMasBaratoSsd == 0) 
      {
         banderaMasBaratoSsd = 1;
         ssdMasBaratoCantidadUnidades = cantidadUnidadesProducto;
         ssdMasBaratoMarca = marcaProducto;
         ssdMasBaratoPrecio = precioProducto;
      }
      else 
      {
         if (tipoProducto == "ssd" && precioProducto < ssdMasBaratoPrecio) 
         {
            ssdMasBaratoCantidadUnidades = cantidadUnidadesProducto;
            ssdMasBaratoMarca = marcaProducto;
            ssdMasBaratoPrecio = precioProducto;
         }
      }

      if (tipoProducto == "hdd" && banderaHddMasCaro == 0) 
      {
         banderaHddMasCaro = 1;
         hddMasCaroAlmacenamiento = capacidadAlmacenamientoProducto;
         hddMasCaroCantidadDeUnidades = cantidadUnidadesProducto;
         hddMasCaroPrecio = precioProducto;
      }
      else 
      {
         if (tipoProducto == "hdd" && precioProducto > hddMasCaroPrecio) 
         {
            hddMasCaroAlmacenamiento = capacidadAlmacenamientoProducto;
            hddMasCaroCantidadDeUnidades = cantidadUnidadesProducto;
            hddMasCaroPrecio = precioProducto;
         }
      }

      if (tipoProducto == "hdd") 
      {
         acumuladorHdd += cantidadUnidadesProducto;
      }

      contador++;
   }

   if (banderaMasBaratoSsd != 0) {
      mensajeA = "El mas barato de los SSD cuesta $" + ssdMasBaratoPrecio + " y su marca es " + ssdMasBaratoMarca + " La cantidad de unidades es " + ssdMasBaratoCantidadUnidades + "\n";
   }

   if (banderaHddMasCaro != 0) 
   {
      mensajeB = "El HDD mas caro cuesta $" + hddMasCaroPrecio + ". Su capacidad de almacenamiento es de " + hddMasCaroAlmacenamiento + " gigas, y las unidades disponibles son: " + hddMasCaroCantidadDeUnidades + "\n";
   }

   if (acumuladorHdd != 0) 
   {
      mensajeC = "En total, hay " + acumuladorHdd + " unidades de HDD";
   }
   alert(mensajeA + mensajeB + mensajeC);
}
*/
