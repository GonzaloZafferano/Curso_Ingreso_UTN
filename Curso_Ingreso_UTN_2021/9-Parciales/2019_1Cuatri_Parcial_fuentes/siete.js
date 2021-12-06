/*
Autor: Gonzalo Zafferano
Consigna:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en
 centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet,
  informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/
function mostrar() 
{
    var contadorDatosIngresados;
    var sexo;
    var altura;
    var alturaMasBaja;
    var sexoAlturaMasBaja;
    var acumuladorAlturas;
    var promedioAlturas;
    var contadorMujeres;
    var mensajeA;
    var mensajeB;
    var mensajeC;

    contadorMujeres = 0;
    contadorDatosIngresados = 0;
    acumuladorAlturas = 0;
    promedioAlturas = 0;
    alturaMasBaja = 251;

    while (contadorDatosIngresados < 5) 
    {
        altura = prompt("Por favor, ingrese la altura en cm. 0 a 250 cm");
        altura = parseFloat(altura);
        
        while (altura < 0 || altura > 250) 
        {
            altura = prompt("Altura invalida. Por favor, reingrese la altura en cm. 0 a 250 cm");
            altura = parseFloat(altura);
        }
        
        sexo = prompt("Por favor, ingrese el sexo: 'f' o 'm'");
        
        while (sexo != 'f' && sexo != 'm') 
        {
            sexo = prompt("Sexo invalido. Por favor, reingrese el sexo: 'f' o 'm'");
        }
        
        if (altura < alturaMasBaja) 
        {
            alturaMasBaja = altura;
            sexoAlturaMasBaja = sexo;
        }
        
        if (sexo == 'f' && altura > 190) 
        {
            contadorMujeres++;
        }
        acumuladorAlturas += altura;

        contadorDatosIngresados++;
    }
    
    promedioAlturas = acumuladorAlturas / contadorDatosIngresados;
    
    if(sexoAlturaMasBaja=='f')
    {
        sexoAlturaMasBaja="Femenino";
    }
    else
    {
        sexoAlturaMasBaja="Masculino"; 
    }
    
    mensajeA = "El promedio de las alturas totales es: " + promedioAlturas;
    mensajeB = "La altura mas baja es " + alturaMasBaja + ", y el sexo de esa persona es: " + sexoAlturaMasBaja;
    mensajeC = "La cantidad de mujeres cuya altura supera los 190 centimetros es " + contadorMujeres;
    
    alert(mensajeA + "\n" + mensajeB + "\n" + mensajeC);
    
    
    
    
    /*
    
    

    var contadorDatosIngresados;
    var sexo;
    var altura;
    var alturaMasBaja;
    var sexoAlturaMasBaja;
    var acumuladorAlturas;
    var promedioAlturas;
    var contadorMujeres;
    var mensajeA;
    var mensajeB;
    var mensajeC;

    contadorMujeres = 0;
    contadorDatosIngresados = 0;
    acumuladorAlturas = 0;
    promedioAlturas = 0;
    alturaMasBaja = 251;

    while (contadorDatosIngresados < 5) 
    {
        contadorDatosIngresados++;
        altura = prompt("Por favor, ingrese la altura en cm. 0 a 250 cm");
        altura = parseFloat(altura);

        while (altura < 0 || altura > 250) 
        {
            altura = prompt("Altura invalida. Por favor, reingrese la altura en cm. 0 a 250 cm");
            altura = parseFloat(altura);
        }

        sexo = prompt("Por favor, ingrese el sexo: 'f' o 'm'");

        while (sexo != 'f' && sexo != 'm') 
        {
            sexo = prompt("Sexo invalido. Por favor, reingrese el sexo: 'f' o 'm'");
        }

        if (altura < alturaMasBaja) 
        {
            alturaMasBaja = altura;
            sexoAlturaMasBaja = sexo;
        }

        if (sexo == 'f' && altura > 190) 
        {
            contadorMujeres++;
        }
        acumuladorAlturas += altura;
    }

    promedioAlturas = acumuladorAlturas / contadorDatosIngresados;

    if(sexoAlturaMasBaja=='f')
    {
        sexoAlturaMasBaja="Femenino";
    }
    else
    {
        sexoAlturaMasBaja="Masculino"; 
    }
    
    mensajeA = "El promedio de las alturas totales es: " + promedioAlturas;
    mensajeB = "La altura mas baja es " + alturaMasBaja + ", y el sexo de esa persona es: " + sexoAlturaMasBaja;
    mensajeC = "La cantidad de mujeres cuya altura supera los 190 centimetros es " + contadorMujeres;

    alert(mensajeA + "\n" + mensajeB + "\n" + mensajeC);



*/







}
