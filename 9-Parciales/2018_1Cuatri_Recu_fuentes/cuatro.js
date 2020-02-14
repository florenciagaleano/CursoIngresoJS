function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingree un número");
	numeroDos=prompt("Ingrese otro número");

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+numeroDos;
		alert("El resultado es "+resultado);
		console.log(resultado);
	}else if (numeroUno<numeroDos)
	{
		parseInt(numeroUno);
		parseInt(numeroDos);
		resultado=numeroUno+numeroDos;
		alert("El resultado es "+resultado);
		console.log(resultado);
	}else
	{
		parseInt(numeroUno);
		parseInt(numeroDos);
		resultado=numeroUno-numeroDos;
		console.log(resultado);
	}

}
