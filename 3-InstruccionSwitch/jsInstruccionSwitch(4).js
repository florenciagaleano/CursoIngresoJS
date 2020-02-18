function mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Febrero":
			console.info("Este mes tiene 28 días");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			console.info("Este mes tiene 30 días");
			break;

		default:
			console.info("Este mes tiene 31 días");
			break;
	}


		
		



}//FIN DE LA FUNCIÓN