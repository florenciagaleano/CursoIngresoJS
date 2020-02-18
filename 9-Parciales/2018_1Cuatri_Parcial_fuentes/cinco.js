function mostrar()
{
	var planeta;
	planeta=prompt("Ingrese un planeta","tierra");

	switch (planeta)
	{
		case "tierra":
			alert("Acá vivimos");
			break;

		case  "mercurio":
		case  "venus":
			alert("Acá hace más calor");
			break;

		case  "saturno":
		case  "urano":
		case  "neptuno":
		case  "pluton":
		case  "marte":
		case  "jupiter":
			alert("Acá hace más frío");
			break;

		default:
			alert("Eso no es un planeta");
			break;



	}

}
