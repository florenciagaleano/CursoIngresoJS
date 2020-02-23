function mostrar()
{
	var contador;
	var notas;
	var acumuladorNotas;
	var sexo;
	var varonesConSeis;
	var promedio;
	var notaMasBaja;
	var sexoNotaBaja;

	contador=0;
	acumuladorNotas=0;
	varonesConSeis=0;

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


		if(sexo=="m"&&notas>5)
		{
			varonesConSeis=varonesConSeis+1;
		}		

		if(contador==0)
		{
			notaMasBaja=notas;
			sexoNotaBaja=sexo;
		}else
		{
			if(notaMasBaja>notas)
			{
				notaMasBaja=notas;
				sexoNotaBaja=sexo;
			}
		}

		contador=contador+1;

	}//termina while contador

	promedio=acumuladorNotas/contador;
	alert("El promedio de las notas es "+promedio);
	alert("La cantidad de varones que aprobaron es de "+varonesConSeis);
	alert("La nota más baja es "+notaMasBaja+" y la obtuvo "+sexoNotaBaja);

}
