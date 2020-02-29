//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	
	var contador;
	var animal;
	var peso;
	var temperaturaHabitat;
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
			temperaturaHabitat=prompt("Ingrese temperatura del habitat del animal");
			temperaturaHabitat=parseInt(temperaturaHabitat);
		}while(isNaN(temperaturaHabitat)||temperaturaHabitat<-30||temperaturaHabitat>30);

		if(temperaturaHabitat%2==0)
		{
			contadorTemperaturasPares++;
		}//TEMPERATURAS PARES

		if(contador==1)
		{
			maximoPeso=peso;
			animalMasPesado=animal;
			temperaturaMasPesado=temperaturaHabitat;
		}else
		{
			if(peso>maximoPeso)
			{
				maximoPeso=peso;
				animalMasPesado=animal;
				temperaturaMasPesado=temperaturaHabitat;
			}
		}//MAXIMO PESO

		if(temperaturaHabitat<0)
		{
			contadorAnimalesBajoCero++;
			pesoMinimoBajoCero=peso;
			pesoMaximoBajoCero=peso;
		}else
		{
			if(peso<pesoMinimoBajoCero)//anda mal arreglarlo
			{
				pesoMinimoBajoCero=peso;
			}
			if(peso>pesoMaximoBajoCero)
			{
				pesoMaximoBajoCero=peso;
			}		
		}			
		//ANIMALES QUE VIVEN BAJO CERO

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

