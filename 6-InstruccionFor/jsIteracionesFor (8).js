function mostrar()
{
	var numeroIngresado;
	var iteracion;
	var contador;//tambien puede ser contador
	//INICIALIZAR bandera o probar directo con contador
	//hacer el coso del tp

	contador=0;
	numeroIngresado=prompt("Ingrese número");//hacer la validación
	numeroIngresado=parseInt(numeroIngresado);

	for(iteracion=2;iteracion<numeroIngresado;iteracion++)
	{
		console.log(iteracion);
		if((numeroIngresado%iteracion)==0)
		{
			contador=1;
			break;
		}

	}
	if(contador==0)
	{
		alert("Número primo "+numeroIngresado);
	}
 //me anda mal


}//FIN DE LA FUNCIÓN