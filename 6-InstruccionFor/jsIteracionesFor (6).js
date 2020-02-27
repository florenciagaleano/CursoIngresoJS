function mostrar()
{	
	var numeroIngresado;
	var numerosPares;
	var contadorPares;

	contadorPares=0;
	do
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

	}while(isNaN(numeroIngresado)||numeroIngresado<1);



	for(numerosPares=2;numerosPares<numeroIngresado;numerosPares=numerosPares+2)
	{
		console.info("Números pares: ",numerosPares);
		contadorPares++;

	}

	alert("Cantidad de números pares: "+contadorPares);


}//FIN DE LA FUNCIÓN