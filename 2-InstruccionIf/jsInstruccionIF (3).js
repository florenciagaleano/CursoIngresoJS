function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	
	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}

	else
	{
		alert("Usted es un menor");
	}

}//FIN DE LA FUNCIÓN