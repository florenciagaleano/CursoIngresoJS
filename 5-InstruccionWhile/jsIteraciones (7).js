function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador=contador+1;
		respuesta=prompt("¿Quiere seguir ingresando números? Ingrese si para continuar","si");

	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN