function mostrar()
{
	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);
	//el alert tendría que estar escrito una sola vez

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="Es de tarde";
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			if(hora<24&&hora>19)
			{
				mensaje="A dormir";
			}else
			{
				mensaje="Es de noche";
			}
			break;
		default:
			mensaje="Hora no válida";
			break;

			//anda pero me parece que está mal lo de la hora so idk

	}

	alert(mensaje);

}
