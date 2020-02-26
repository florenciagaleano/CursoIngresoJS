function mostrar()
{

	var contador=0;//para que sirve el contador aca?
	var numero;
	var positivo=0;
	var negativo=1;	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingresa un número");
		numero=parseInt(numero);

		if(numero>0)
		{
			positivo=positivo+numero;
		}
		if(numero<0)
		{
			negativo=negativo*numero;
		}

		respuesta=prompt("Quiere seguir ingresando números?","si");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN