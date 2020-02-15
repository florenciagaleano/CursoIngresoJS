/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese un número");
	numeroDos=prompt("Ingrese otro número");


	if (numeroUno==numeroDos)
	{
		resultado=numeroUno+numeroDos;
		alert("El resultado es "+resultado);
	}else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
			alert("El resultado es "+resultado);
		}else
		{
			resultado=numeroUno+numeroDos;
			alert("El resultado es "+resultado);
		}
	}

	if (resultado>10)
	{
		alert("El resultado es "+resultado+" y te pasaste de 10");
	}
}
