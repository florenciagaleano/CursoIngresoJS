function mostrar()
{

	var contadorPositivos;
	var contadorNegativos;
	var numero;	
	var negativos;
	var positivos;
	var contadorCeros;
	var numerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var respuesta;

	contadorPositivos=0;
	contadorNegativos=0;
	positivos=0;
	negativos=0;
	contadorCeros=0;
	numerosPares=0;
	promedioPositivos=0;
	promedioNegativos=0;
	diferencia=0;
	respuesta="si";
	
	while(respuesta!="no")
	{
		numero=prompt("Ingresa un número");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivos=positivos+numero;
			contadorPositivos=contadorPositivos+1;
		}else
		{
			if(numero<0)
			{
				negativos=negativos+numero;
				contadorNegativos=contadorNegativos+1;
			}else
			{
				contadorCeros=contadorCeros+1;
			}
		}
		if(numero%2==0)
		{
			numerosPares=numerosPares+1;
		}
		
		respuesta=prompt("¿Quiere seguir ingresando números?","Ingrese no para salir");	
	}


	promedioPositivos=positivos/contadorPositivos;
	promedioNegativos=negativos/contadorNegativos;
	diferencia=positivos-negativos;

	document.write("Suma de números positivos ingresados: ",positivos);
	document.write("<br>Cantidad de positivos ingresados: ",contadorPositivos);
	document.write("<br>Promedio de números positivos ingresados: ",promedioPositivos);
	document.write("<br>Suma de números negativos ingresados: ",negativos);
	document.write("<br>Cantidad de negativos ingresados: ",contadorNegativos);
	document.write("<br>Promedio de números negativos: ",promedioNegativos);
	document.write("<br>Cantidad de ceros ingresados: ",contadorCeros);
	document.write("<br>Cantidad de números pares ingresados: ",numerosPares);
	document.write("<br>Diferencia entre positivos y negativos: ",diferencia);






}//FIN DE LA FUNCIÓN