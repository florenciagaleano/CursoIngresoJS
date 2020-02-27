function mostrar()
{
	var numeroIngresado;
	var numerosDivisores;
	var contadorDivisores;

	contadorDivisores=0;
	do
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

	}while(isNaN(numeroIngresado)||numeroIngresado<1);

	for(numerosDivisores=0;numerosDivisores<numeroIngresado;numerosDivisores++)
	{
		if((numeroIngresado%numerosDivisores)==0)
		{
			console.info(numerosDivisores+" es divisor");
			contadorDivisores++;	
		}
	}
	alert("Cantidad de divisores: "+contadorDivisores);





}//FIN DE LA FUNCIÓN