function mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch (mesDelAño)
	{
		case "Febrero":
			console.info("Este mes no tiene más de 29 días");
			break;

		default:
			console.info("Este mes tiene 30 o más días");
			break;
	}
	
	


}//FIN DE LA FUNCIÓN