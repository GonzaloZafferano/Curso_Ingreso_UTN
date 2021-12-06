/*
autor gonzalo Zafferano

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar() {

	var tipoDeProducto;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var banderaMasCaroJabon;
	var masCaroJabonCantidadUnidades;
	var masCaroJabonFabricante;
	var masCaroJabonPrecio;
	var acumuladorJabones;
	var acumuoladorAlcoholes;
	var acumuladorBarbijos;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var tipoDeProductoConMasUnidades;
	var tipoDeProductoConMasUnidadesNombre;
	var tipoDeProductoConMasUnidadesCompras;
	var tipoDeProductoConMasUnidadesPromedio;

	acumuladorJabones = 0;
	acumuoladorAlcoholes = 0;
	acumuladorBarbijos = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	banderaMasCaroJabon = 0;

	for (i = 0; i < 5; i++) {

		tipoDeProducto = prompt("Por favor, ingrese el tipo de producto: 'barbijo', 'jabon', 'alcohol'");
		tipoDeProducto = tipoDeProducto.toLowerCase();

		while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol") {
			tipoDeProducto = prompt("Dato invalido. Por favor, ingrese el tipo de producto: 'barbijo', 'jabon', 'alcohol'");
			tipoDeProducto = tipoDeProducto.toLowerCase();
		}

		precio = prompt("Por favor, ingrese el precio. 100 - 300");
		precio = parseInt(precio);

		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = prompt("Dato invalido. Por favor, ingrese el precio. 100 - 300");
			precio = parseInt(precio);
		}

		cantidadDeUnidades = prompt("Por favor, ingrese la cantidad de unidades. 1 - 1000");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);

		while (cantidadDeUnidades < 1 || cantidadDeUnidades > 1000 || isNaN(cantidadDeUnidades)) {
			cantidadDeUnidades = prompt("Dato invalido. Por favor, ingrese la cantidad de unidades. 1 - 1000");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}

		marca = prompt("Por favor, ingrese la marca.");

		while (marca == "") {
			marca = prompt("Dato invalido. Por favor ingrese la marca");
		}

		fabricante = prompt("Por favor, ingrese el fabricante.");

		while (fabricante == "") {
			fabricante = prompt("Dato invalido. Por favor ingrese el fabricante");
		}

		switch (tipoDeProducto) {
			case "alcohol":
				contadorAlcohol++;
				acumuoladorAlcoholes += cantidadDeUnidades;
				break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijos += cantidadDeUnidades;
				break;
			case "jabon":
				contadorJabon++;
				acumuladorJabones += cantidadDeUnidades;

				if (precio > masCaroJabonPrecio || banderaMasCaroJabon == 0) {
					banderaMasCaroJabon = 1;
					masCaroJabonPrecio = precio;
					masCaroJabonFabricante = fabricante;
					masCaroJabonCantidadUnidades = cantidadDeUnidades;
				}
				break;
		}
	}

	if (banderaMasCaroJabon != 0) {
		mensajeA = "A - El mas caro de los jabones cuesta $" + masCaroJabonPrecio + " su fabricante es " + masCaroJabonFabricante + " y la cantidad de unidades es " + masCaroJabonCantidadUnidades + "\n";
	}
	else {

		mensajeA = "A - No hubo Jabones \n";
	}

	if (acumuladorBarbijos > acumuoladorAlcoholes && acumuladorBarbijos > acumuladorJabones) {
		tipoDeProductoConMasUnidadesNombre = "Barbijo";
		tipoDeProductoConMasUnidades = acumuladorBarbijos;
		tipoDeProductoConMasUnidadesCompras = contadorBarbijo;
		tipoDeProductoConMasUnidadesPromedio = acumuladorBarbijos / contadorBarbijo;
	}
	else {
		if (acumuoladorAlcoholes > acumuladorJabones) {
			tipoDeProductoConMasUnidadesNombre = "Alcoholes";
			tipoDeProductoConMasUnidades = acumuoladorAlcoholes;
			tipoDeProductoConMasUnidadesCompras = contadorAlcohol;
			tipoDeProductoConMasUnidadesPromedio = acumuoladorAlcoholes / contadorAlcohol;
		}
		else {
			tipoDeProductoConMasUnidadesNombre = "jabon";
			tipoDeProductoConMasUnidades = acumuladorJabones;
			tipoDeProductoConMasUnidadesCompras = contadorJabon;
			tipoDeProductoConMasUnidadesPromedio = acumuladorJabones / contadorJabon;
		}
	}
	mensajeB = "B - El tipo de producto con mas unidades en total es  " + tipoDeProductoConMasUnidadesNombre + " y la cantidad de unidades totales es " + tipoDeProductoConMasUnidades + " y el promedio por compra fue " + tipoDeProductoConMasUnidadesPromedio + "\n";

	if (contadorBarbijo != 0) {
		mensajeC = "C - La cantidad total de barbijos es de " + acumuladorBarbijos;
	}
	else {
		mensajeC = "C - No hubo Barbijos en la compra ";

	}

	alert(mensajeA + mensajeB + mensajeC);































































	/*
	
	
	
	
		var tipoDeProducto;
		var precioProducto;
		var cantidadDeUnidadesDeProducto;
		var marcaProducto;
		var fabricanteProducto;
		var i;
		var mensajeA;
		var mensajeB;
		var mensajeC;
		var banderaPrimerJabon;
		var JabonMasCaroFabricante;
		var JabonMasCaroPrecio;
		var JabonMasCaroUnidades;
		var acumuladorUnidadesBarbijo;
		var acumuladorUnidadesAlcohol;
		var acumuladorUnidadesJabon;
		var contadorBarbijos;
		var contadorJabon;
		var contadorAlcohol;
		var promedioProductoConMasUnidades;
		var productoConMasUnidadesTipo;
		var productoConMasunidadesCompras;
		var productoConMasUnidadesCantidad;
	
		contadorJabon = 0;
		contadorBarbijos = 0;
		contadorAlcohol = 0;
		acumuladorUnidadesAlcohol = 0;
		acumuladorUnidadesJabon = 0;
		acumuladorUnidadesBarbijo = 0;
		banderaPrimerJabon = 0;
		JabonMasCaroPrecio = 0;
		mensajeA = "";
		mensajeB = "";
		mensajeC = "";
	
	
		for (i = 0; i < 5; i++) {
	
			tipoDeProducto = prompt("Por favor, ingrese la marca: 'barbijo', 'jabon', 'alcohol'");
			tipoDeProducto = tipoDeProducto.toLowerCase();
	
			while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol") {
				tipoDeProducto = prompt("Dato invalido. Por favor, ingrese la marca: 'barbijo', 'jabon', 'alcohol'");
				tipoDeProducto = tipoDeProducto.toLowerCase();
			}
	
			precioProducto = prompt("Por favor, ingrese el precio del producto. 100 - 300");
			precioProducto = parseInt(precioProducto);
	
			while (precioProducto < 100 || precioProducto > 300 || isNaN(precioProducto)) {
				precioProducto = prompt("Dato invalido. Por favor, ingrese el precio del producto. 100 - 300");
				precioProducto = parseInt(precioProducto);
			}
	
			cantidadDeUnidadesDeProducto = prompt("Por favor, ingrese la cantidad de productos. 1 - 1000");
			cantidadDeUnidadesDeProducto = parseInt(cantidadDeUnidadesDeProducto);
	
			while (cantidadDeUnidadesDeProducto < 1 || cantidadDeUnidadesDeProducto > 1000 || isNaN(cantidadDeUnidadesDeProducto)) {
				cantidadDeUnidadesDeProducto = prompt("Dato invalido. Por favor, ingrese la cantidad de productos. 1 - 1000");
				cantidadDeUnidadesDeProducto = parseInt(cantidadDeUnidadesDeProducto);
			}
	
			fabricanteProducto = prompt("Ingrese el nombre del fabricante del producto");
	
			marcaProducto = prompt("Ingrese el nombre de la marca del producto");
	
			switch (tipoDeProducto) {
				case "alcohol":
					acumuladorUnidadesAlcohol += cantidadDeUnidadesDeProducto;
					contadorAlcohol++;
					break;
	
				case "barbijo":
					acumuladorUnidadesBarbijo += cantidadDeUnidadesDeProducto;
					contadorBarbijos++;
					break;
	
				case "jabon":
					acumuladorUnidadesJabon += cantidadDeUnidadesDeProducto;
					contadorJabon++;
					if (precioProducto > JabonMasCaroPrecio || banderaPrimerJabon == 0) {
						banderaPrimerJabon = 1;
						JabonMasCaroPrecio = precioProducto;
						JabonMasCaroFabricante = fabricanteProducto;
						JabonMasCaroUnidades = cantidadDeUnidadesDeProducto;
					}
					break;
			}
	
		}
	
		if (banderaPrimerJabon != 0) {
	
			mensajeA = "El mas caro de los jabones, cuesta " + JabonMasCaroPrecio + ", tiene " + JabonMasCaroUnidades + " unidades y el fabricante es " + JabonMasCaroFabricante + "\n";
		}
	
	
		if (acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijo && acumuladorUnidadesAlcohol > acumuladorUnidadesJabon) {
			productoConMasUnidadesTipo = "Alcohol";
			promedioProductoConMasUnidades = acumuladorUnidadesAlcohol / contadorAlcohol;
			productoConMasunidadesCompras = contadorAlcohol;
			productoConMasUnidadesCantidad = acumuladorUnidadesAlcohol;
		}
		else {
			if (acumuladorUnidadesBarbijo > acumuladorUnidadesJabon) {
				productoConMasUnidadesTipo = "Barbijo";
				promedioProductoConMasUnidades = acumuladorUnidadesBarbijo / contadorBarbijos;
				productoConMasunidadesCompras = contadorBarbijos;
				productoConMasUnidadesCantidad = acumuladorUnidadesBarbijo;
			}
			else {
				productoConMasUnidadesTipo = "jabon";
				promedioProductoConMasUnidades = acumuladorUnidadesJabon / contadorJabon;
				productoConMasunidadesCompras = contadorJabon;
				productoConMasUnidadesCantidad = acumuladorUnidadesJabon;
			}
		}
	
		mensajeB = "El tipo de producto con mas unidades es " + productoConMasUnidadesTipo + " con " + productoConMasUnidadesCantidad + " unidades y tuvo " + productoConMasunidadesCompras + " compras. El promedio por compra es " + promedioProductoConMasUnidades + "\n";
	
		if (acumuladorUnidadesBarbijo != 0) {
			mensajeC = "Se compraron " + acumuladorUnidadesBarbijo + " unidades de barbijo en total";
		}
	
		alert(mensajeA + mensajeB + mensajeC);
		*/

}
