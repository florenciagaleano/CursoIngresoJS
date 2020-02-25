function mostrar()
{
	var contador;
	var acumuladorPeso;
	var marca;
	var peso;
	var temperatura;
	var temperaturasPares;
	var productosBajoCero;
	var maximo;
	var minimo;
	var marcaMasPesada;
	var respuesta;

	contador=0;
	acumulador=0;
	temperaturasPares=0;
	productosBajoCero=0;
	respuesta="si";

	while(respuesta=="si")
	{
		marca=prompt("Ingrese marca");

		peso=prompt("Ingrese peso");
		while(isNaN(peso)||peso<1||peso>100)
		{
			peso=prompt("Reingrese peso");
		}
		peso=parseInt(peso);
		acumulador=acumulador+peso;

		temperatura=prompt("Ingrese temperatura");
		while(isNaN(temperatura)||temperatura>30||temperatura<-30)
		{
			temperatura=prompt("Reingrese temperatura");
		}
		temperatura=parseInt(temperatura);

		if((temperatura%2)==0)
		{
			temperaturasPares=temperaturasPares+1;
		}

		if(temperatura<0)
		{
			productosBajoCero=productosBajoCero+1;
		}

		if(contador==0)
		{
			maximo=peso;
			minimo=peso;
			marcaMasPesada=marca;
		}else
		{
			if(peso>maximo)
			{
				maximo=peso;
				marcaMasPesada=marca;
			}
			if(peso<minimo)
			{
				minimo=peso;
			}
		}

		contador=contador+1;
		respuesta=prompt("¿Desea seguir ingresando productos?","si");

	}

	promedio=acumulador/contador;
	document.write("Cantidad de temperaturas pares: "+temperaturasPares+
		"<br>Marca del producto más pesado: "+marcaMasPesada+"<br>Productos que se conservan bajo cero: "
		+productosBajoCero+"<br>Promedio del peso: "+promedio+"<br>Peso máximo: "+
		maximo+"<br>Peso mínimo: "+minimo);


}
/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual
debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e 
informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/