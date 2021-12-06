/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	var edadIngresada;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;

	edadIngresada = prompt("Ingrese la edad en años. 18-90");
	edadIngresada = parseInt(edadIngresada);

	while (edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada)) 
	{
		edadIngresada = prompt("Edad invalida. Ingrese la edad en años. 18-90");
		edadIngresada = parseInt(edadIngresada);
	}

	sexo = prompt("Ingrese el sexo 'F' o 'M'");

	while (sexo != "F" && sexo != 'M') 
	{
		sexo = prompt("Sexo invalido. Ingrese el sexo 'F' o 'M'");
	}

	if(sexo== 'F')
	{
		sexo="Femenino";
	}
	else
	{
		sexo="Masculino";
	}

	estadoCivil = prompt("Por favor, ingrese su estado civil: \n1- soltero \n2- casado \n3- divorciado \n4- viudo");
	estadoCivil = parseInt(estadoCivil);

	while (estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil)) 
	{
		estadoCivil = prompt("Dato invalido. Por favor, ingrese su estado civil: \n1- soltero \n2- casado \n3- divorciado \n4- viudo");
		estadoCivil = parseInt(estadoCivil);
	}

	switch (estadoCivil) 
	{
		case 1:
			estadoCivil = "Soltero";
			break;
		case 2:
			estadoCivil = "Casado";
			break;
		case 3:
			estadoCivil = "Divorciado";
			break;
		case 4:
			estadoCivil = "Viudo";
			break;
	}

	sueldoBruto = prompt("Por favor, ingrese sueldo bruto.");
	sueldoBruto = parseFloat(sueldoBruto);

	while (sueldoBruto < 8000 || isNaN(sueldoBruto)) 
	{
		sueldoBruto = prompt("Dato invalido. El sueldo bruto no puede ser menor que $8.000. \nPor favor, ingrese sueldo bruto.");
		sueldoBruto = parseFloat(sueldoBruto);
	}

	numeroDeLegajo = prompt("Por favor, ingrese numero de legajo (4 cifras, sin 0 a la izquierda)");
	numeroDeLegajo = parseInt(numeroDeLegajo);

	while (numeroDeLegajo < 1000 || numeroDeLegajo > 9999 || isNaN(numeroDeLegajo)) 
	{
		numeroDeLegajo = prompt("Dato invalido. Por favor, ingrese numero de legajo (4 cifras, sin 0 a la izquierda)");
		numeroDeLegajo = parseInt(numeroDeLegajo);
	}

	nacionalidad = prompt("Por favor, ingrese la nacionalidad:  \n'A' = Argentino \n'E' = Extranjero \n'N' = Nacionalizado");

	while (nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N') 
	{
		nacionalidad = prompt("Dato invalido. Por favor, ingrese la nacionalidad:  \n'A' = Argentino \n'E' = Extranjero \n'N' = Nacionalizado");
	}

	switch (nacionalidad) 
	{
		case 'A':
			nacionalidad = "Argentino";
			break;
		case 'E':
			nacionalidad = "Extranjero";
			break;
		case 'N':
			nacionalidad = "Nacionalizado";
			break;
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroDeLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
