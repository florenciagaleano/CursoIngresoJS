/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random() * 3)+1;
	eleccionMaquina=parseInt(eleccionMaquina);
	console.log(eleccionMaquina);

	switch(eleccionMaquina)
	{
		case 1:
			eleccionMaquina="piedra";
			break;
		case 2:
			eleccionMaquina="papel";
			break;
		case 3:
			eleccionMaquina="tijera";
			break;
	}


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina=="piedra")
	{
		alert("Empató");
	}else
	{
		if(eleccionMaquina=="papel")
		{
			alert("Perdió");
		}else
		{
			alert("Ganó");
		}
	}//hay que hacerlo con switch no con if no?

}//FIN DE LA FUNCIÓN
function papel()
{
	var mensaje;
	switch(eleccionMaquina)
	{
		case "piedra":
			mensaje="Ganó";
			break;
		case "papel":
			mensaje="Empató";
			break;
		case "tijera":
			mensaje="Perdió";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	var mensaje;
	switch(eleccionMaquina)
	{
		case "piedra":
			mensaje="Perdió";
			break;
		case "papel":
			mensaje="Ganó";
			break;
		case "tijera":
			mensaje="Empató";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN