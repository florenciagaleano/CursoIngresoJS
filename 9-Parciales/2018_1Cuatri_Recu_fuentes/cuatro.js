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
		alert(resultado);
		console.log(resultado);
	}else
	{
		if (numeroUno>numeroDos)
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resultado=numeroUno-numeroDos;
			alert(resultado);
			console.log(resultado);
		}else
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resultado=numeroUno+numeroDos;
			alert(resultado);
			console.log(resultado);
		}
	}

}
