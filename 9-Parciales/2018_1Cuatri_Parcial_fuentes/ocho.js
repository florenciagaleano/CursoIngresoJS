function mostrar()
{
	var contador;
	var contadorPositivos;
	var letra;
	var numero;
	var numerosPares;
	var numerosImpares;
	var ceros;
	var acumuladorPositivos;
	var promedioPositivos;
	var sumaNegativos;
	var maximo;
	var letraMaximo;
	var minimo;
	var letraMinimo;
	var respuesta;

	contador=0;
	contadorPositivos=0;
	numerosPares=0;
	numerosImpares=0;
	ceros=0;
	acumuladorPositivos=0;
	sumaNegativos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra");
		numero=prompt("Ingrese un número");
		while(isNaN(numero)||numero<-100||numero>100)
		{
			numero=prompt("Reingrese número");

		}
		numero=parseInt(numero);


		if((numero%2)==0)
		{
			numerosPares=numerosPares+1;
		}else
		{
			numerosImpares=numerosImpares+1;
		}


		if(numero==0)
		{
			ceros=ceros+1;
		}else
		{
			if(numero>0)
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorPositivos=contadorPositivos+1;
			}
			else//va if o un else
			{
				sumaNegativos=sumaNegativos+numero;
			}

		}


		if(contador==1)
		{
			maximo=numero;
			letraMaximo=letra;
			minimo=numero;
			letraMinimo=letra;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
				letraMaximo=letra;
			}
			if(numero<minimo)
			{
				minimo=numero;
				letraMinimo=letra;
			}
		}


		respuesta=prompt("¿Desea seguir ingresando datos?","si");
		contador=contador+1;
	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;
	alert("La cantidad de números pares es de "+numerosPares+" y la cantidad de impares es de "+numerosImpares+
		".La cantidad de ceros fue de "+ceros+". El promedio de los números positivos fue "+promedioPositivos+
		". La suma de los negativos dio "+sumaNegativos+". El máximo ingresado fue "+maximo+" y su letra "+letraMaximo+
		" y el minimo fue "+minimo+" y su letra fue "+letraMinimo);
}
