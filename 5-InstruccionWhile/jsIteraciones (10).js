function mostrar()
{

	var contadorPositivos=0;
	var contadorNegativos=0;
	//declarar contadores y variables 
	var numero;	
	var negativos;
	var positivos;
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
		}else
		{
			if(numero<0)
			{
				negativos=negativos+numero;
				contadorNegativos=contadorNegativos+1;
			}
		}


		respuesta=prompt("¿Quiere seguir ingresando números?","Ingrese no para salir");	
	}

	document.write("Suma de números positivos ingresados: "+positivos);
	document.write("   Cantidad de positivos ingresados: "+contadorPositivos);
	document.write("   Suma de números negativos ingresados: "+negativos);
	document.write("   Cantidad de negativos ingresados: "+contadorNegativos);




}//FIN DE LA FUNCIÓN