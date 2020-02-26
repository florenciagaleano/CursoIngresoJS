function mostrar()
{
	var contador;
	var nota;
	var acumuladorNotas;
	var sexo;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var varonesAprobados;

	contador=0;
	acumuladorNotas=0;
	varonesAprobados=0;

	while(contador<5)
	{
		nota=prompt("Ingrese la nota");
		while(isNaN(nota)||nota>10||nota<0)
		{
			nota=prompt("Reingrese nota");
		}
		nota=parseInt(nota);
		acumuladorNotas=acumuladorNotas+nota;

		sexo=prompt("Ingrese sexo del estudiante");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Reingrese sexo");
		}

		if(contador==1)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
		}else
		{
			if(nota<notaMasBaja)
			{
				notaMasBaja=nota;
				sexoNotaMasBaja=sexo;
			}
		}

		if(sexo=="m"&&nota>5)
		{
			varonesAprobados=varonesAprobados+1;
		}


		contador=contador+1;
	}

	promedio=acumuladorNotas/contador;
	alert("El promedio de las notas es "+promedio+", la nota más baja fue un "+notaMasBaja+
		  " y la obtuvo "+sexoNotaMasBaja+". La cantidad de varones aprobados fue de "+varonesAprobados);




}

