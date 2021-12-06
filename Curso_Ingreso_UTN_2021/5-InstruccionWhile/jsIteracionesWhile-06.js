/*AUTOR: Gonzalo Zafferano
Enunciado:
Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var sumaAcumulada;
	var numeroIngresado;

	contador=0;
	sumaAcumulada=0;

	while(contador<5)
	{
		numeroIngresado= parseFloat(prompt("Por favor, ingrese un numero"));
		sumaAcumulada+=numeroIngresado;
		contador++;
	}
	
	document.getElementById("txtIdSuma").value= sumaAcumulada;
	document.getElementById("txtIdPromedio").value= sumaAcumulada/contador;

}//FIN DE LA FUNCIÓN