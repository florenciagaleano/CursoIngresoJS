
function mostrar()
{
	var contador;
	var nombre;
	var cantidadPersonas;
	var estadia;
	var formaDePago;
	var maximoCantidadPersonas;
	var huespedMasPersonas;
	var maximoEstancia;
	var personasMasDias;
	var pagoMasUsado;
	var promedioDias;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var acumuladorDias;
	var respuesta;

	contador=0;
	contadorEfectivo=0;
	contadorTarjeta=0;
	contadorQR=0;
	acumuladorDias=0;

	do
	{
		contador++;
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));
	
		do
		{
			cantidadPersonas=prompt("Ingrese la cantidad de personas que se quedarán con usted");
			cantidadPersonas=parseInt(cantidadPersonas);
		}while(isNaN(cantidadPersonas)||cantidadPersonas<0);
	
		do
		{
			estadia=prompt("Ingrese la cantidad de días que se quedará");
			estadia=parseInt(estadia);
		}while(isNaN(estadia)||estadia<0);
	
		do
		{
			formaDePago=prompt("Ingrese forma de pago");
		}while(!isNaN(formaDePago)||formaDePago!="efectivo"&&formaDePago!="tarjeta"&&formaDePago!="QR");

		if(contador==1)
		{
			maximoCantidadPersonas=cantidadPersonas;
			huespedMasPersonas=nombre;
		}else
		{
			if(cantidadPersonas>maximoCantidadPersonas)
			{
				maximoCantidadPersonas=cantidadPersonas;
				huespedMasPersonas=nombre;
			}
		}

		if(contador==1)
		{
			maximoEstancia=estadia;
			personasMasDias=nombre;
		}else
		{
			if(estadia>maximoEstancia)
			{
				maximoEstancia=estadia;
				personasMasDias=nombre;
			}
		}

		switch(formaDePago)
		{
			case "QR":
				contadorQR++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break;				
			default:
				contadorTarjeta++;
				 break;
		}

		acumuladorDias=acumuladorDias+estadia;

		respuesta=prompt("Desea seguir ingresando huespedes?");


	}while(respuesta=="si");


	promedioDias=acumuladorDias/contador;


	if(contadorQR>contadorEfectivo&&contadorQR>contadorTarjeta)//esto va abajo del while de todo porque sino está mal programado y uso microprocesador de más
	{
		pagoMasUsado="QR";

	}else
	{
		if(contadorEfectivo>contadorTarjeta)
		{
			pagoMasUsado="efectivo";

		}else
		{
			pagoMasUsado="tarjeta";
		}
	}

	console.log("El huesped que llevó más personas fue: "+huespedMasPersonas);
	console.log("Persona que se quedó más días: "+personasMasDias);
	console.log("La forma de pago más usada fue: "+pagoMasUsado);
	console.log("Promedio de días por persona: "+promedioDias);
	
}
/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/
