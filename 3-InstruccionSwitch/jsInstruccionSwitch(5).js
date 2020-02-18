function mostrar()
{
	//tomo la edad  
	var laHora;
	laHora=document.getElementById('hora').value;
	laHora=parseInt(laHora);


	//alert (laHora);
	switch (laHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			console.info("Es de mañana");
			break;

		default:
			console.info("NO es de mañana");
			break;

	}
	



}//FIN DE LA FUNCIÓN