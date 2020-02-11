function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	//si al if le pongo el ! lo niego y puedo hacer el 4(con el 5 igual)
	if(edad>17||edad<12)//se unen con el O "||" con el Y no pq no hya num maor a 12 y menor a 17
	{
		alert("Usted no es un adolescente");
	}
//tomo la edad 
}//FIN DE LA FUNCIÓN
