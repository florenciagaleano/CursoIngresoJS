function mostrar()
{
	alert('iteración while');//while se usa mucho para validar. misma estructura del if
	//while siempre evalua despues hace, do while hace, después evalúa
	var contador;
	contador=0;//SIEMPRE EMPEZAR EN 0

	while(contador<10)
	{
		contador=contador+1;
		console.info("Número: ",contador);
		
	}

	/*si usas mal el while se te tilda la computadora
	1)Asegurarme de que cuando escribo la info las variables tengan el valor corrrecto
	2)CONDICIION CORRECTA
	3) acá sería contador=contador más 1(cambiar la var contador)*/


}//FIN DE LA FUNCIÓN