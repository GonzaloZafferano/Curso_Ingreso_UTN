/*
AUTOR: Gonzalo Zafferano
Enunciado:
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	var numero;

	numero=10;
	contador=0; 

	while(contador<10)
	{ 
		alert(numero);
		numero--;
		contador++;
	}
}//FIN DE LA FUNCIÓN