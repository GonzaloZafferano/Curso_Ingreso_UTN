/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//alert("ok");


/*



let numero1;
let numero2;
let resultado;

//los concatena, porque ambos son 'string'
//numero1 = document.getElementById("txtIdNumeroUno").value;
//numero2 = document.getElementById("txtIdNumeroDos").value;
//resultado = numero1 + numero2;


//los suma, porque ambos estan parseados a 'int'
numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
resultado = numero1 + numero2;


alert(`El resultado es ${resultado}.`); 
//Alert() devuelve un string, porque string + number = string.
//solo es 'number' cuando es number + number. 




//----------------------------------------------------------------------


let x = "12juan34";
 x = parseInt(x);
alert(x);
//El ParseInt() evalua, caracter a caracter, si es un numero. el 1 es un numero, 
//entonces lo guarda en 'x'. el 2 es un numero, entonces lo guarda en 'x'.
//la 'j' no es un numero, entonces el parseint() corta la ejecucion, se termina.
//pero en 'x' llego a guardar 1 y 2. entonces se imprime 12.





let y = "juan1234";
 y = parseInt(y);
alert(y);
//devuelve un NAN, porque verifico que la 'j' no es un numero y termino la ejecucion.
//entonces parseint() no llego a pasarle ningun numero a 'y', por eso NAN.
//en el caso anterior por lo menos llego a pasar dos numeros.

//la funcion del parseint() es retornar un numero, pero como en este caso
//no pudo retornar ni siquiera un numero (porque la 'j' no es numero) entonces
//por lo menos, retorna por defecto un NaN, que es de tipo number.

//el parseint() tiene la obligacion de devolver un numero, pero como no pudo
//convertir el string a numero, la manera que el parseint() encontro para 
//devolver un numero que no es un numero, es retornando un NaN.





//-----------------------------------------------------------------


let m = "3.14";
m = parseInt(m);
alert(m);
//Igual que en el caso de "12juan34". El parseint() verifica caracter a caracter.
//el '3' es numero, entonces lo guarda en 'm'. el '.' no es numero, entonces corta 
//la ejecucion. en 'm' quedo guardado solo el 3.
//el parseint() no deja pasar nada, salvo numeros.


//la funcion parseFloat() es 99% igual a parseInt() con la unica diferencia que
//SI toma los caracteres '.' Es decir, continua evaluando mas alla de que el '.'
//NO sea un numero. El parseFloat() no deja pasar nada, salvo numeros y el '.'
//Entonces, el parseFloat() deja pasar numeros, incluido el punto.
let n = "3.14";
n = parseFloat(n);
alert(n);








*/




//declaracion de variables
var numeroUno, numeroDos, resultado;

//inicializacion de variables. Se utiliza la funcion "parseint()" para parsear a entero
numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

//se suman los valores parseados, que ahora son de tipo number.
resultado = numeroUno + numeroDos;

//se muestra el mensaje, con el resultado de la suma.
alert(`El resultado de la suma es: ${resultado}.`); 















}

