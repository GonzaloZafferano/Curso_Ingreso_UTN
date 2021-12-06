/*
AUTOR: Gonzalo Zafferano
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("Ingrese la clave, por favor: ");
	
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Clave INCORRECTA, reingrese la clave, por favor: ");
	}
	alert("Bienvenido!");
}//FIN DE LA FUNCIÓN
