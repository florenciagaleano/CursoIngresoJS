function mostrar()
{

	var contadorPositivos=0;
	var contadorNegativos=0;
	var numero;	
	var negativos;
	var positivos;
	var contadorCeros;
	var numerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta="si";

	positivos=0;
	negativos=0;

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
			}
		}
		


		respuesta=prompt("¿Quiere seguir ingresando números?","Ingrese no para salir");	
	}

	document.write("Suma de números positivos ingresados: ",positivos);
	document.write("<br>Cantidad de positivos ingresados: ",contadorPositivos);
	document.write("<br>Promedio de números positivos ingresados: ",promedioPositivos);
	document.write("<br>Suma de números negativos ingresados: ",negativos);
	document.write("<br>Cantidad de negativos ingresados: ",contadorNegativos);
	document.write("<br>Promedio de números negativos: ",promedioNegativos);
	document.write("<br>Cantidad de ceros ingresados: ",contadorCeros);






}//FIN DE LA FUNCIÓN