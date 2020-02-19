function mostrar()
{

	var numero;
	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero>10||numero<0)
	{
		numero=prompt("Ese número no está entre el 0 y el 9","Escriba un número");
	}

	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN