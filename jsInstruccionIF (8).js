function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad>17&&estadoCivil=="Soltero")
	{
		alert("Usted no es menor y es soltero");
	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN