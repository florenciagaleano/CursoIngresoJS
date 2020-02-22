function mostrar()
{

	var contadorPositivos=0;
	var contadorNegativos=0;
	var numero;	
	var negativos=0;
	var positivos=0;
	var contadorCeros=0;
	var numerosPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta="si";
	//si quiero la respuesta toda en minúscula usar respuesta.toLowerCase

	while(respuesta!="no")
	{
		numero=prompt("Ingresa un número");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivos=positivos+numero;
			contadorPositivos=contadorPositivos+1;
			promedioPositivos=positivos/contadorPositivos;
		}else
		{
			if(numero<0)
			{
				negativos=negativos+numero;
				contadorNegativos=contadorNegativos+1;
				promedioNegativos=negativos/contadorNegativos;
			}else
			{
				contadorCeros=contadorCeros+1;
			}//en ell ejercicio 9 hay otra cosa en vez de tolowercase
		}
		


		respuesta=prompt("¿Quiere seguir ingresando números?","Ingrese no para salir");	
		respuesta=respuesta.toLowerCase();//así se pone el toLowerCase
	}

	document.write("Suma de números positivos ingresados: ",positivos);
	document.write("<br>Cantidad de positivos ingresados: ",contadorPositivos);
	document.write("<br>Promedio de números positivos ingresados: ",promedioPositivos);
	document.write("<br>Suma de números negativos ingresados: ",negativos);
	document.write("<br>Cantidad de negativos ingresados: ",contadorNegativos);
	document.write("<br>Promedio de números negativos: ",promedioNegativos);
	document.write("<br>Cantidad de ceros ingresados: ",contadorCeros);






}//FIN DE LA FUNCIÓN