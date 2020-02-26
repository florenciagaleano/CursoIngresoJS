function mostrar()
{

	var contador;
	var repetciones;
	repeticiones=prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);

	for(contador=0; contador<repeticiones;contador++)
	{
		document.write("Hola utn fra <br>");

		if (contador>5)
		{
			break;
		}
	}



}//FIN DE LA FUNCIÓN