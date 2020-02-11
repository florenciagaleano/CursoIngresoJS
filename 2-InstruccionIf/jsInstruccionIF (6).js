function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad<13)
		{
			alert("Usted es un niño");
		}
		else
			{
				alert("adolescente");
			}
	}


//fijarme si esta bien tabulado

//tomo la edad
/*cuantos menos if mejor por lo del microprocesaror,arriba me convenia poner lo de adolescentes a lo ultimo porque
 son todos los que no son mayores ni niños */

}//FIN DE LA FUNCIÓN

/*NUMEROS RANDOM: buscar numero random en w3 y copiarlo y pegarlo*/