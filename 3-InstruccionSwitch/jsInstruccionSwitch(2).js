function mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			console.log("Abrigate que hace frío");
			break;

		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			console.log("Falta para el invierno");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			console.log("Ya pasó el invierno");
			break;

	}




}//FIN DE LA FUNCIÓN