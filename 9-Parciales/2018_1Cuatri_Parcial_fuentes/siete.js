function mostrar()
{
	var contador;
	var notas;
	var acumuladorNotas;
	var sexo;
	var promedio;

	contador=0;
	acumuladorNotas=0;

	while(contador<5)
	{
		notas=prompt("Ingrese nota");
		while(isNaN(notas)||notas<0||notas>10)
		{
			notas=prompt("Reingrese nota");
		}
		notas=parseInt(notas);
		acumuladorNotas=acumuladorNotas+notas;

		sexo=prompt("Ingrese f o m")
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Reingrese f o m");
		}
		
		contador=contador+1;

	}//termina while contador

	promedio=acumuladorNotas/contador;
	alert("El promedio de las notas es "+promedio);

}
