function mostrar()
{
	var letra;
	var numero;
	var contador;
	var respuesta;
	var numerosPares;
	var numerosImpares;
	var ceros;
	var acumuladorPositivos;
	var promedio;
	var sumaNegativos;
	var maximo;
	var letraMaximo;
	var minimo;
	var letraMinimo;

	contador=0;
	ceros=0;
	sumaNegativos=0;
	acumuladorPositivos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra");
		numero=prompt("Ingrese un número entre 100 y -100");
		while(isNaN(numero)||numero<-100||numero>100)
		{
			numero=prompt("Reingrese número");
		}//validación número
		numero=parseInt(numero);

		if(contador==0)//numeros pares anda mal
		{
			numerosPares=numero;
			numerosImpares=numero;
		}else
		{
			if(numero%2==0)//numeros impares anda mal
			{
				numerosPares=numerosPares+1;
			}else
			{
				numerosImpares=numerosImpares+1;
			}
		}

		if (numero==0)//ceros
		{
			ceros=ceros+1;
		}else
		{
			if(numero<0)
			{
				sumaNegativos=sumaNegativos+numero;
			}else
			{
				acumuladorPositivos=acumuladorPositivos+numero;
			}
		}

		if(contador==0)
		{
			maximo=numero;
			letraMaximo=letra;
			minimo=numero;
			letraMinimo=letra;
		}else
		{
			if(numero>maximo)//máximo
			{
				maximo=numero;
				letraMaximo=letra;
			}else//minimo anda mal
			{
				minimo=numero;
				letraMinimo=letra;
			}
		}


		respuesta=prompt("¿Desea seguir ingresando letras y números","si");
		contador=contador+1;
	}

	promedio=acumuladorPositivos/contador;

	document.write("La cantidad de números pares es de "+numerosPares);
	document.write("<br>La cantidad de números impares es de "+numerosImpares);
	document.write("<br>La cantidad de ceros es de "+ceros);
	document.write("<br>El promedio de los números positivos es de "+promedio);
	document.write("<br>La suma de los negativos es de "+sumaNegativos);
	document.write("<br>El máximo es "+maximo+" y su letra es "+letraMaximo);
	document.write("<br>El mínimo es "+minimo+" y su letra es "+letraMinimo);
}
/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número
 entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso
 por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/