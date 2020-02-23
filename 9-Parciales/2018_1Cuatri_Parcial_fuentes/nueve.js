function mostrar()
{
	var contador;
	var marca;
	var peso;
	var acumuladorPeso;
	var temperatura;
	var temperaturasPares;
	var pesoMasPesado;
	var marcaMasPesada;
	var productosCeroGrados;
	var promedio;
	var minimo;
	var respuesta;

	contador=0;
	acumuladorPeso=0;
	temperaturasPares=0;
	productosCeroGrados=0;
	respuesta="si";
	
	while(respuesta=="si")
	{
		marca=prompt("Ingrese marca del producto");

		peso=prompt("Ingrese peso del producto");
		while(isNaN(peso)||peso>100||peso<1)
		{
			peso=prompt("Reingrese peso");
		}
		peso=parseInt(peso);
		acumuladorPeso=acumuladorPeso+peso;

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

		if(contador==0)
		{
			pesoMasPesado=peso;
			marcaMasPesada=marca;
			minimo=peso;
		}else
		{
			if(peso>pesoMasPesado)
			{
				pesoMasPesado=peso;
				marcaMasPesada=marca;
			}
			if(peso<minimo)
			{
				minimo=peso;
			}
		}

		if(temperatura<0)
		{
			productosCeroGrados=productosCeroGrados+1;
		}


		respuesta=prompt("¿Quiere seguir ingresadno números?","si");
		contador=contador+1;
	}

	promedio=acumuladorPeso/contador;
	document.write("Cantidad de temperaturas pares: "+temperaturasPares);
	document.write("<br>Marca del producto más pesado: "+marcaMasPesada);
	document.write("<br>Cantidad de productos que se conservan a menos de 0 grados: "+productosCeroGrados);
	document.write("<br>El promedio del peso de los productos es: "+promedio);
	document.write("<br>El peso máximo es "+pesoMasPesado+" y el mínimo es "+minimo);

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