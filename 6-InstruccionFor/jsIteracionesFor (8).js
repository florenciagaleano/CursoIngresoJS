function mostrar()
{
	var numeroIngresado;
	var iteracion;
	var bandera;//tambien puede ser contador
	""INICIALIZAR BANDERA o probar directo con contador
	//hacer el coso del tp

	
	numeroIngresado=prompt("Ingrese número");//hacer la validación
	numeroIngresado=parseInt(numeroIngresado);

	for(iteracion=2;iteracion<numeroIngresado;iteracion++)
	{
		console.log(iteracion);
		if((numeroIngresado%iteracion)==0)
		{
			bandera=1;
			break;
		}

	}
	if(bandera==0)
	{
		alert("Número primo "+numeroIngresado);
	}
 //me anda mal


}//FIN DE LA FUNCIÓN