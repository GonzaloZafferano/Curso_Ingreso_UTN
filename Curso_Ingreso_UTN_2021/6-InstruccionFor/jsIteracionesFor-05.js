
/*
AUTOR: Gonzalo Zafferano
Consigna:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	var numero;

	for( ; ; ) //Bucle Infinito
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero==9)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN