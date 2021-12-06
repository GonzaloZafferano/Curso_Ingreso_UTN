/* 
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.

B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.

C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.
*/
function mostrar() {
	var nombreCarta;
	var tipoDeCarta;
	var rareza;
	var precioCarta;
	var banderaPrimerCarta;
	var masCaraNombre;
	var masCaraPrecio;
	var masCaraRareza;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var respuesta;
	var contadorCartasTrampaRaraYSuperRara;
	var promedioCartas;
	var contadorCartas;
	var acumuladorCartas;

	contadorCartasTrampaRaraYSuperRara = 0;
	banderaPrimerCarta = 0;
	contadorCartas = 0;
	acumuladorCartas = 0;

	do {
		nombreCarta = prompt("Por favor, ingrese el nombre.");

		while (nombreCarta == "") {
			nombreCarta = prompt("Dato invalido. Por favor ingrese el nombre");
		}

		tipoDeCarta = prompt("Por favor, ingrese tipo de carta: 'monstruo', 'magica', 'trampa'");
		tipoDeCarta = tipoDeCarta.toLowerCase();

		while (tipoDeCarta != "monstruo" && tipoDeCarta != "magica" && tipoDeCarta != "trampa") {
			tipoDeCarta = prompt("Dato invalido. Por favor, ingrese tipo de carta: 'monstruo', 'magica', 'trampa'");
			tipoDeCarta = tipoDeCarta.toLowerCase();
		}

		rareza = prompt("Por favor, ingrese la rareza: 'rara', 'super rara', 'ultra rara'");
		rareza = rareza.toLowerCase();

		while (rareza != "rara" && rareza != "super rara" && rareza != "ultra rara") {
			rareza = prompt("Dato invalido. Por favor, ingrese la rareza: 'rara', 'super rara', 'ultra rara'");
			rareza = rareza.toLowerCase();
		}
		precioCarta = prompt("Por favor, ingrese el precio");
		precioCarta = parseFloat(precioCarta);

		while (precioCarta < 1 || isNaN(precioCarta)) {
			precioCarta = prompt("Dato invalido. Por favor, ingrese el precio");
			precioCarta = parseFloat(precioCarta);
		}

		if (precioCarta > masCaraPrecio || banderaPrimerCarta == 0) {
			banderaPrimerCarta = 1;
			masCaraPrecio = precioCarta;
			masCaraNombre = nombreCarta;
			masCaraRareza = rareza;
		}

		if (tipoDeCarta == "trampa" && rareza != "ultra rara") {
			contadorCartasTrampaRaraYSuperRara++;
		}

		if (precioCarta < 500 && tipoDeCarta == "monstruo" && rareza == "ultra rara") {
			contadorCartas++;
			acumuladorCartas += precioCarta;
		}

		respuesta = prompt("Presione 's' para continuar");
		respuesta = respuesta.toLowerCase();
	} while (respuesta == 's');


	mensajeA = "A - La carta mas cara es " + masCaraNombre + " y cuesta $" + masCaraPrecio + " y su rareza es " + masCaraRareza + "<br>";

	if (contadorCartasTrampaRaraYSuperRara != 0) {
		mensajeB = "B - La cantidad de cartas Trampa, rara o super rara vendida es de " + contadorCartasTrampaRaraYSuperRara + "<br>";
	}
	else {
		mensajeB = "B - No se vendieron cartas trampa que sean rarass o super raras <br>";
	}

	if (contadorCartas != 0) {
		promedioCartas = acumuladorCartas / contadorCartas;
		mensajeC = "C - El promedio de cartas monstruo, ultrararas, y con precio menos a 500 es de " + promedioCartas;
	}
	else {
		mensajeC = "C - No hubo cartas de ese tipo ";
	}

	document.write(mensajeA + mensajeB + mensajeC);









}




/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar2()
{

	/*
	//alert("ok");
//pedir el nombre al usuario, a traves de la funcion Prompt().
//Asignamos a la variable, el retorno (string) de la funcion Prompt().
//el valor es retornado cuando el usuario presiona aceptar.
let nombre = prompt("Escriba su nombre");//El parametro es el mensaje para el usuario
//reserve un espacio en memoria para guardar el nombre de usuario. 
//En la misma linea, guardo en la variable "nombre" el texto que escribio el usuario
//dentro de la ventana Prompt()

//copio el nombre que tengo guardado en la variable "nombre" dentro de la caja
//de texto embebida en la pagina html.
document.getElementById("txtIdNombre").value= nombre;
//a la propiedad Value de la caja de texto, le asigno lo que tengo guardado en 
//la variable nombre

*/

var nombreDeUsuario, mensaje;

nombreDeUsuario = prompt("Ingrese su nombre, por favor");
mensaje = "Su nombre es: " + nombreDeUsuario;
document.getElementById("txtIdNombre").value = mensaje;




}

