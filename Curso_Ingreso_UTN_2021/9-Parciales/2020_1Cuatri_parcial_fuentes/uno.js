/*
AUTOR: Gonzalo Zafferano
Consigna:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar() 
{

	var i;
	var tipoDeProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioAlcohol;
	var cantidadJabon;
	var cantidadUnidadesDeAlcohol;
	var fabricanteMasBarato;
	var tipoConMasUnidades;
	var fabricanteConMasUnidades;
	var promedioPorCompra;
	var mensaje;
	var acumuladorBarbijo;
	var acumuladorAlcohol;
	var acumuladorJabon;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;

	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;
	tipoConMasUnidades = 0;
	cantidadJabon = 0;
	precioAlcohol = 301;
	
	for (i = 0; i < 5; i++) 
	{
		tipoDeProducto = prompt("Por favor, ingrese el tipo de producto: barbijo , jabón o alcohol");
		while ((tipoDeProducto != "barbijo") && (tipoDeProducto != "jabon") && (tipoDeProducto != "alcohol")) 
		{
			tipoDeProducto = prompt("Producto invalido. Por favor, ingrese un producto correcto");
		}

		precio = prompt("Por favor, ingrese el precio entre 100 y 300.");
		precio = parseFloat(precio);

		while (precio < 100 || precio > 300) 
		{
			precio = prompt("Precio invalido. Por favor, ingrese un precio correcto");
			precio = parseFloat(precio);
		}

		cantidadUnidades = prompt("Por favor, ingrese la cantidad de unidades (entre 1 y  1000");
		cantidadUnidades = parseInt(cantidadUnidades);
		while (cantidadUnidades < 1 || cantidadUnidades > 1000) 
		{
			cantidadUnidades = prompt("Cantidad Invalida. Por favor, ingrese la cantidad de unidades (entre 1 y  1000");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca del producto: ");
		fabricante = prompt("Ingrese el fabricante del producto: ");

		if (tipoDeProducto == "alcohol") 
		{
			contadorAlcohol++;
			acumuladorAlcohol+=cantidadUnidades;
			if (precio < precioAlcohol) 
			{
				precioAlcohol = precio;
				cantidadUnidadesDeAlcohol = cantidadUnidades;
				fabricanteMasBarato = fabricante;
				
			}
		}
		else
		{
			if (tipoDeProducto == "jabon") 
		{
			contadorJabon++;
			acumuladorJabon += cantidadUnidades;
		}
		else 
		{
contadorBarbijo++;
acumuladorBarbijo+=cantidadUnidades;
		}
		}

		

		if (cantidadUnidades > tipoConMasUnidades) 
		{
			tipoConMasUnidades = cantidadUnidades;
			fabricanteConMasUnidades = fabricante;
			promedioPorCompra = precio / cantidadUnidades;
		}
	}

if(acumuladorAlcohol> acumuladorBarbijo && acumuladorAlcohol> acumuladorJabon)
{
promedioPorCompra= acumuladorAlcohol/contadorAlcohol;
}
else
{
	if (acumuladorJabon>acumuladorBarbijo)
	{
promedioPorCompra= acumuladorJabon/contadorJabon;
	}
	else 
	{
		promedioPorCompra= acumuladorBarbijo/contadorBarbijo;
	}

}

	mensaje = "El fabricante mas barato de Alcohol es " + fabricanteMasBarato + " y la cantidad de unidades es " + cantidadUnidadesDeAlcohol;
	mensaje += " El fabricante que da mas unidades es: " + fabricanteConMasUnidades + " y el promedio es " + promedioPorCompra;
	mensaje += " En total, hay " + acumuladorJabon + " unidades de jabon";

	alert(mensaje);



}
