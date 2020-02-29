function mostrar()
{
	var contador;
	var acumuladorCarga;
	var kilos;
	var cantidadBolsas;
	var importeBolsa;
	var marca;
	var maximoKilos;
	var minimoKilos;
	var importeMenosKilos;
	var marcaMenosKilos;
	var marcaMasKilos;
	var maximoBolsas;
	var marcaMasBolsas;
	var maximoImporte;
	var marcaMasCara;
	var respuesta;

	contador=0;

	do
	{
		contador++;
		do
		{
			marca=prompt("Ingrese marca");
		}while(!isNaN(marca));

		do
		{
			kilos=prompt("Ingrese kilos por bolsa");
			kilos=parseInt(kilos);
		}while(isNaN(kilos)||kilos>1000);

		do
		{
			cantidadBolsas=prompt("Ingrese la cantidad de bolsas");
			cantidadBolsas=parseInt(cantidadBolsas);
		}while(isNaN(cantidadBolsas)||cantidadBolsas>1000);

		do
		{
			importeBolsa=prompt("Ingrese el importe de cada bolsa");
			importeBolsa=parseInt(importeBolsa);
		}while(isNaN(importeBolsa)||importeBolsa<0);

		if(contador==1)
		{
			maximoKilos=kilos*cantidadBolsas;
			marcaMasKilos=marca;
		}else
		{
			if(kilos*cantidadBolsas>maximoKilos)
			{
				maximoKilos=kilos*cantidadBolsas;
				marcaMasKilos=marca;
			}
		}

		if(contador==1)
		{
			maximoBolsas=cantidadBolsas;
			marcaMasBolsas=marca;
		}else
		{
			if(cantidadBolsas>maximoBolsas)
			{
				maximoBolsas=cantidadBolsas;
				marcaMasBolsas=marca;
			}
		}

		if(contador==1)
		{
			maximoImporte=importeBolsa;
			marcaMasCara=marca;
		}else
		{
			if(importeBolsa>maximoImporte)
			{
				maximoImporte=importeBolsa;
				marcaMasCara=marca;
			}
		}

		if(contador==1)
		{
			minimoKilos=kilos;
			importeMenosKilos=importeBolsa;
			marcaMenosKilos=marca;
		}else
		{
			if(minimoKilos>kilos)
			{
				minimoKilos=kilos;
				importeMenosKilos=importeBolsa;
				marcaMenosKilos=marca;

			}
		}

		respuesta=prompt("Desea seguir ingresando datos?","si");

	}while(respuesta=="si"||acumuladorCarga<1000);

	console.log("Marca con más kilos en el contenedor: "+marcaMasKilos);
	console.log("Marca con más bolsas de alimento: "+marcaMasBolsas);
	console.log("Marca más cara: "+marcaMasCara);
	console.log("Importre marca menos pesada: "+importeMenosKilos);
	console.log("Marca que pesa menos: "+marcaMenosKilos);
  
}

/*
c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg,
 cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.*/

