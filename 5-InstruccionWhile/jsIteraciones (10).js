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

	diferencia=positivos-negativos;
	promedioPositivos=positivos/contadorPositivos;
	promedioNegativos=negativos/contadorNegativos;//toda esta parte va adentro o afuera del while

	document.write("Suma de números positivos ingresados: " ,positivos,
	<br>"Cantidad de positivos ingresados: ",contadorPositivos,
	<br>"Promedio de números positivos ingresados: ",promedioPositivos,
	<br>"Suma de números negativos ingresados: ",negativos,
	<br>"Cantidad de negativos ingresados: ",contadorNegativos,
	<br>"Promedio de números negativos: ",promedioNegativos,
	<br>"Cantidad de ceros ingresados: ",contadorCeros,
	<br>"Cantidad de números pares ingresados: ",numerosPares,
	<br>"Diferencia entre positivos y negativos: ",diferencia);

}//FIN DE LA FUNCIÓN