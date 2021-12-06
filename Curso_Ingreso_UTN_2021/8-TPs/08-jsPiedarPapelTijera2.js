/*
Autor: Gonzalo Zafferano
Consigna:
3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, 
perdió o empató desde la última recarga de página
*/
var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina=Math.round(Math.random()*2+1);
}//FIN DE LA FUNCIÓN

function piedra()
{
	var mensaje;

    switch (eleccionMaquina) 
    {
        case 1:
            mensaje = "Empate!";
			ContadorDeEmpates++;
            break;
        case 2:
            mensaje = "Perdiste!";
			ContadorDePerdidas++;
            break;
        case 3:
            mensaje = "Ganaste!";
			ContadorDeGanadas++;
            break;
    }
    alert(mensaje);
    mostrarResultado();
}//FIN DE LA FUNCIÓN

function papel()
{
	var mensaje;

    switch (eleccionMaquina) 
    {
        case 1:
            mensaje = "Ganaste!";
			ContadorDeGanadas++;
            break;
        case 2:
            mensaje = "Empate!";
			ContadorDeEmpates++;
            break;
        case 3:
            mensaje = "Perdiste!";
			ContadorDePerdidas++;
            break;
    }
    alert(mensaje);
    mostrarResultado();
}//FIN DE LA FUNCIÓN

function tijera()
{
	var mensaje;

    switch (eleccionMaquina) 
    {
        case 1:
            mensaje = "Perdiste!";
			ContadorDePerdidas++;
            break;
        case 2:
            mensaje = "Ganaste!";
			ContadorDeGanadas++;
            break;
        case 3:
            mensaje = "Empate!";
			ContadorDeEmpates++;
            break;
    }
    alert(mensaje);
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
	comenzar();
}