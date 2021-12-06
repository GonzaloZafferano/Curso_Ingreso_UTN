/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar() {

    var i;
    var notaIngresada;
    var sexo;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var amucumuladorNotas;
    var promedioNotas;
    var banderaNotaMasBaja;
    var notaMasBajaValor;
    var notaMasBajaSexo;
    var contadorVarones;

    contadorVarones = 0;
    banderaNotaMasBaja = 0;
    amucumuladorNotas = 0;
    mensajeA = "";
    mensajeB = "";
    mensajeC = "";

    for (i = 0; i < 2; i++) {
        sexo = prompt("Por favor, ingrese su genero: 'f' o 'm'");
        sexo = sexo.toLowerCase();

        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Dato invalido. Por favor, ingrese su genero: 'f' o 'm'");
            sexo = sexo.toLowerCase();
        }

        notaIngresada = prompt("Por favor, ingrese la nota. 0 - 10");
        notaIngresada = parseInt(notaIngresada);

        while (notaIngresada < 0 || notaIngresada > 10 || isNaN(notaIngresada)) {
            notaIngresada = prompt("Dato invalido. Por favor, ingrese la nota. 0 - 10");
            notaIngresada = parseInt(notaIngresada);
        }
        amucumuladorNotas += notaIngresada;

        if (notaIngresada < notaMasBajaValor || banderaNotaMasBaja == 0) {
            banderaNotaMasBaja = 1;
            notaMasBajaValor = notaIngresada;
            notaMasBajaSexo = sexo;
        }

        if (sexo == "m" && notaIngresada >= 6) {
            contadorVarones++;
        }


    }

    promedioNotas = amucumuladorNotas / i;
    mensajeA = "El promedio de las notas totales es " + promedioNotas + "\n";

    mensajeB = "La nota mas baja es " + notaMasBajaValor + " y el genero de esa persona es " + notaMasBajaSexo + "\n";

    if (contadorVarones != 0) {
        mensajeC = "La cantidad de varones cuya nota es mayor o igual a 6 es " + contadorVarones;

    }

    alert(mensajeA + mensajeB + mensajeC);










}
