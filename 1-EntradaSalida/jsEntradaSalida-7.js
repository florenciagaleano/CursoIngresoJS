/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;
	suma=parseInt(suma);

	alert("El resultado de la suma es "+suma);
	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	console.log("Numero uno "+numeroUno);

	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	console.log("Numero dos "+numeroDos);

	resta=numeroUno-numeroDos;
	resta=parseInt(resta);
	console.log("Resta: "+resta);

	alert("El resultado de la resta es "+resta);

	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicación;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	console.log("Numero uno "+numeroUno);

	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	console.log("Numero dos "+numeroDos);

	multiplicación=numeroUno*numeroDos;
	multiplicación=parseInt(multiplicación);
	console.log("Multiplicación: "+multiplicación);

	alert("El resultado de la multiplicación es "+multiplicación);
	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var división;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	console.log("Numero uno "+numeroUno);

	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	console.log("Numero dos "+numeroDos);

	división=numeroUno/numeroDos;
	división=parseInt(división);
	console.log("División "+división);

	alert("El resultado de la división es "+división);
	
}

