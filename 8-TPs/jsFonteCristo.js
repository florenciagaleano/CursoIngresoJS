/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está
pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las 
cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el 
número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el 
número ingresado hasta el cero.ES LA MISMA!!!
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este 
número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el 
número ingresado hasta el cero.
*/
function NumerosPares () 
{
 	var numeroPositivo;
 	var numerosPares;
 	var contadorPares;
 	var contador;

 	
 	numeroPositivo=document.getElementById('numero').value;//hacer la validación
 	numeroPositivo=parseInt(numeroPositivo);
 	contadorPares=0;

 	for(numerosPares=2;numerosPares<numeroPositivo;numerosPares=numerosPares+2)
 	{
 		console.log("Números pares: "+numerosPares);
 		contadorPares++;
 	}

 	alert("Cantidad de múmeros pares: "+contadorPares);

}

function NumerosImpares ()
{
	var numeroPositivo;
 	var numerosImpares;
 	var contadorImpares;
 	
 	numeroPositivo=document.getElementById('numero').value;//hacer la validación
 	numeroPositivo=parseInt(numeroPositivo);
 	contadorImpares=0;

 	for(numerosImpares=1;numerosImpares<numeroPositivo;numerosImpares=numerosImpares+2)
 	{
 		console.log("Números pares: "+numerosImpares);
 		contadorImpares++;
 	}

 	alert("Cantidad de múmeros impares: "+contadorImpares);

}

function NumerosDivisibles()
{
	var numeroPositivo;
	var numerosDivisibles;
	var contadorDivisibles;

	contadorDivisibles=0;
	numeroPositivo=document.getElementById('numero').value;//hacer la validación
 	numeroPositivo=parseInt(numeroPositivo);

 	for(numerosDivisibles=1;numerosDivisibles<100;numerosDivisibles++)
 	{
 		if(numerosDivisibles%numeroPositivo==0)
 		{
 			console.info("Números divisible: "+numerosDivisibles);
 			contadorDivisibles++;	
 		}
 	}
 	alert("Cantidad de números divisibles: "+contadorDivisibles);

}

function VerificarPrimo()
{
	var numeroPositivo;
	var numeroPrimo;
	var contador;

	contador=0;	
	numeroPositivo=document.getElementById('numero').value;//hacer la validación
 	numeroPositivo=parseInt(numeroPositivo);

 	for(numeroPrimo=2;numeroPrimo<numeroPositivo;numeroPrimo++)
 	{
 		console.log(numeroPrimo);
 		if(numeroPositivo%numeroPrimo==0)
 		{
 			contador=1;
 			break;
 		}
 	}
 	if(contador==0)
 	{
 		alert(numeroPositivo+" es primo");
 	}
}

function NumerosPrimos()
{
		



}




 	
