/*
AUTOR: Gonzalo Zafferano
Consigna:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	var numero;
	numero=0;

	//Al ser un bucle infinito, no requiere variable de control,
	//ni condicion, ni modificacion de variable de control.
	for( ;  ; ) 
	{
		numero++;

		alert(numero);

		if(numero==3)
		{
			break; //RETURN NO ROMPE, SINO QUE RETORNA Y SALE DEL BUCLE.
		}
	}



}//FIN DE LA FUNCIÓN