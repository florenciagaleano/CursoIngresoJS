/*Bienvenidos.Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color 
(rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el 
ingreso por document.write:
				a)La cantida de rojos 
				b)La cantidad de rojos con precio mayor a 5000
				c)La cantidad de vehiculos con precio inferior a 5000
				d)El promedio de todos los vehiculos ingresados.				
				e)El mas caro y su color */	
function mostrar()
{
	var colorDelAuto;
	var valor;
	var respuesta;
	var contadorRojos;
	var contadorRojosMasCaros;
	var contadorMasBaratos;
	var contador;
	var acumulador;
	var promedio;
	var maximoPrecio;
	var maximoPrecioColor;

	contadorRojos=0;
	contadorRojosMasCaros=0;
	contadorMasBaratos=0;
	contador=0;
	acumulador=0;


	do
	{	
		do
		{
			colorDelAuto=prompt("Ingrese el color del auto");
		}while(!isNaN(colorDelAuto)||colorDelAuto!="rojo"&&colorDelAuto!="verde"&&colorDelAuto!="amarillo");

		do
		{
			valor=prompt("Ingrese un valor");
			valor=parseInt(valor);
		}while(isNaN(valor)||valor>10000||valor<0);

		if(colorDelAuto=="rojo")
		{
			contadorRojos++;
			if(valor>5000)//esto no estoy segura si está bien
			{
				contadorRojosMasCaros++;
			}
		}

		if(valor<5000)
		{
			contadorMasBaratos++;
		}

		if(contador==0||maximoPrecio<valor)
		{
			maximoPrecio=valor;
			maximoPrecioColor=color;
		}

		contador++;
		acumulador=acumulador+valor;
		respuesta=prompt("Desea continuar?");
	}while(respuesta=="si");

	promedio=acumulador/contador;
	document.write("Cantidad de autos rojos: "+contadorRojos);
	document.write("<br>Cantidad de autos rojos que valen más de 5000: "+contadorRojosMasCaros);
	document.write("<br>Vehículos que salen menos de 5000: "+contadorMasBaratos);
	document.write("<br>Promedio de precios: "+promedio);
	document.write("<br>")

}