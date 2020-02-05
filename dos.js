function mostrar()
{
	var nombre;
	var localidad;

	nombre=document.getElementById('elNombre').value;

	localidad=document.getElementById('laLocalidad').value;

	//preguntar si al alert le tengo que poner alguna variable o esta bien si solo pongo alert
	alert("Usted es "+ nombre+ " y vive en la localidad de "+localidad);


  
}
