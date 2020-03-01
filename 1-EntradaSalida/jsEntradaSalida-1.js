//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	
	var contador;
	var animal;
	var peso;
	var temperatura;
	var contadorTemperaturasPares;
	var maximoPeso;
	var animalMasPesado;
	var temperaturaMasPesado;
	var contadorAnimalesBajoCero;
	var acumuladorPeso;
	var promedioPeso;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;
	var respuesta;

	contador=0;
	contadorTemperaturasPares=0;
	contadorAnimalesBajoCero=0;
	acumuladorPeso=0;

	do
	{
		contador++;

		do
		{
			animal=prompt("Ingrese animal");
		}while(!isNaN(animal));

		do
		{
			peso=prompt("ingrese el peso del animal");
			peso=parseInt(peso);
			acumuladorPeso=acumuladorPeso+peso;
		}while(isNaN(peso)||peso<1||peso>1000);

		do
		{
			temperatura=prompt("Ingrese temperatura del habitat del animal");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura)||temperatura<-30||temperatura>30);
		//VALIDACIONES LISTAS

		if(temperatura%2==0)
		{
			contadorTemperaturasPares++;
		}//TEMPERATURAS PARES

		if(contador==1)
		{
			maximoPeso=peso;
			animalMasPesado=animal;
			temperaturaMasPesado=temperatura;
		}else
		{
			if(peso>maximoPeso)
			{
				maximoPeso=peso;
				animalMasPesado=animal;
				temperaturaMasPesado=temperatura;
			}
		}//MAXIMO PESO

		if(temperatura<0)
		{
			contadorAnimalesBajoCero++;
		}//ANIMALES QUE VIVEN BAJO CERO

		if(contadorAnimalesBajoCero==1)//como meto todo esto en un solo if
		{
			pesoMaximoBajoCero=peso;
			pesoMinimoBajoCero=peso;
		}else
		{
			if(temperatura<0&&peso>pesoMaximoBajoCero)
			{
				pesoMaximoBajoCero=peso;
			}
			if(temperatura<0&&peso<pesoMinimoBajoCero)
			{
				pesoMinimoBajoCero=peso;
			}
		}//PESO MÁXIMO Y MÍNIMO BAJO CERO

		respuesta=prompt("Desea seguir ingresando datos?","si");
	}while(respuesta=="si");

	promedioPeso=acumuladorPeso/contador;
	document.write("Cantidad de temperaturas pares: "+contadorTemperaturasPares);
	document.write("<br>El animal más pesado es el/la "+animalMasPesado+" y vive a una temperatura de "+temperaturaMasPesado);
	document.write("<br>Cantidad de animales que viven a menos de 0 grados "+contadorAnimalesBajoCero);
	document.write("<br>Promedio del peso: "+promedioPeso);
	document.write("<br>Peso máximo bajo cero: "+pesoMaximoBajoCero);
	document.write("<br>Peso mínimo bajo cero: "+pesoMinimoBajoCero);
}

