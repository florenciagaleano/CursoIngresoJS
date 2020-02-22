function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;	
	var respuesta=true;

	while(respuesta==true)//si se pone el true se puede usar el confirm
	{
		contador=contador+1;
		numero=prompt("Ingresa un número");
		numero=parseInt(numero);//solamente despues de leer un dato

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if (numero>maximo)//se ponen dos if no if else
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}



		respuesta=confirm("¿Desea ingresar no para salir?");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN