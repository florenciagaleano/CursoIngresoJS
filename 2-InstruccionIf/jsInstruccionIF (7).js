function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<18&&estadoCivil!="Soltero")//el soletro va con o sin comillas
	{
		alert("Usted es muy pequeño par no ser soltero");
	}

//tomo la edad  
}//FIN DE LA FUNCIÓN