/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numeroIngresado;
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	numeroSecreto=Math.floor(Math.random() * 100)+1;
	numeroSecreto=parseInt(numeroSecreto);

			//alert(numeroSecreto );
	alert("Ya se generó su número secreto");
	

}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	console.log (numeroSecreto);

	contadorIntentos=document.getElementById('intentos').value;

	if (numeroIngresado>numeroSecreto)
	{
		alert ("Te pasaste");
		contadorIntentos=contadorIntentos+1;
	}else
	{
		if (numeroIngresado==numeroSecreto)
		{
			alert("Ha adivinado!, y en solo "+ contadorIntentos+" intentos");
		}else
		{
			alert ("Te falta un poco");
			contadorIntentos=contadorIntentos+1;
		}
	}
	
}