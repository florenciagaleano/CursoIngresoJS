function mostrar()
{
	var notaRandom;
	notaRandom=Math.floor(Math.random() * 10)+1;
	//Genero el número RANDOM entre 1 y 10 
	notaRandom=parseInt(notaRandom);

	if(notaRandom>8)
	{
		alert(notaRandom+ ": Excelente!!!");
	}
	else
	{
		if(notaRandom<4)
		{
			alert(notaRandom+ ": Vamos, la proxima se puede");
		}
		else
		{
			alert(notaRandom+": Aprobó");
		}
	}

}//FIN DE LA FUNCIÓN