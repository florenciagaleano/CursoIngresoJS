function mostrar()
{

	var numero;
	var valorDeVerdad;//esta var no es necesario

	valorDeVerdad=isNaN(numero);
	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(isNaN(numero)||numero<0||numero>9)//el is NaN agregarlo en los otros ejercicios
	{
		numero=prompt("Ese número no está entre el 0 y el 9","Escriba un número");
		numero=parseInt(numero);
	}

	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN