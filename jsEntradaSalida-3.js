/*Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) ,
el sexo (validar) y la nota del final (validar) hasta que el usuario quiera e informar al terminar el
ingreso por document.write:
				<br>a)
				La cantidad de varones aprobados
				<br>b)
				El promedio de notas de los menores de edad
				<br>c)
				El promedio de notas de los adolescentes.
				<br>d)
				El promedio de notas de los mayores		
				<br>f)
				El promedio de notas  por sexo masculino y femenino*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var notaDelFinal;
	var respuesta;
	var contadorVaronesAprobados;
	var acumuladorNotasDeMenores;
	var contadorNotasDeMenores;
	var promedioNotaMenores;
	var contadorNotasAdolescentes;
	var acumuladorNotasAdolescentes;
	var promedioNotasAdolescentes;
	var contadorNotasMayores;
	var acumuladorNotasMayores;
	var promedioNotasMayores;
	var acumuladorNotasMujeres;
	var contadorNotasMujeres;
	var promedioNotasMujeres;
	var acumuladorNotasVarones;
	var contadorNotasVarones;
	var promedioNotasVarones;

	contadorVaronesAprobados=0;
	acumuladorNotasDeMenores=0;
	contadorNotasDeMenores=0;
	contadorNotasAdolescentes=0;
	acumuladorNotasAdolescentes=0;
	contadorNotasMayores=0;
	acumuladorNotasMayores=0;
	acumuladorNotasMujeres=0;
	contadorNotasMujeres=0;
	acumuladorNotasVarones=0;
	contadorNotasVarones=0;

	do
	{
		nombre=prompt("Ingrese nombre");
		do
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad<5||edad>100);

		do
		{
			sexo=prompt("Ingrese sexo del estudiante");
		}while(!isNaN(sexo)||sexo!="f"&&sexo!="m");

		do
		{
			notaDelFinal=prompt("Ingrese nota del final");
			notaDelFinal=parseInt(notaDelFinal);
		}while(isNaN(notaDelFinal)||notaDelFinal<0||notaDelFinal>10);


		if(sexo=="m" && notaDelFinal>4)
		{
			contadorVaronesAprobados++;
		}

		if(edad<13)
		{
			contadorNotasDeMenores++;
			acumuladorNotasDeMenores=acumuladorNotasDeMenores+notaDelFinal;
		}else
		{
			if(edad<18)//NO (edad<13&&edad>18)lo de edad menos a 13 ya lo puse antes
			{
				contadorNotasAdolescentes++;
				acumuladorNotasAdolescentes=acumuladorNotasAdolescentes+notaDelFinal;
			}else
			{
				contadorNotasMayores++;
				acumuladorNotasMayores=acumuladorNotasMayores+notaDelFinal;
			}
	
		}

		if(sexo=="m")
		{
			contadorNotasVarones++;
			acumuladorNotasVarones=acumuladorNotasVarones+notaDelFinal;
		}else
		{
			contadorNotasMujeres++;
			acumuladorNotasMujeres=acumuladorNotasMujeres+notaDelFinal;
		}

		respuesta=prompt("Desea seguir ingresando datos?","si");
	}while(respuesta=="si");

	promedioNotaMenores=acumuladorNotasDeMenores/contadorNotasDeMenores;
	promedioNotasAdolescentes=acumuladorNotasAdolescentes/contadorNotasAdolescentes;
	promedioNotasMayores=acumuladorNotasMayores/contadorNotasMayores;
	promedioNotasMujeres=acumuladorNotasMujeres/contadorNotasMujeres;
	promedioNotasVarones=acumuladorNotasVarones/contadorNotasVarones;
	document.write("Cantidad de varones aprobados: "+contadorVaronesAprobados);
	document.write("<br>Promedio de notas de menores de edad: "+promedioNotaMenores);
	document.write("<br>Promedio nota de los mayores: "+promedioNotasMayores);
	document.write("<br>Promedio nota de mujeres: "+promedioNotasMujeres);
	document.write("<br>Promedio notas varones: "+promedioNotasVarones);
	//hacer resto del recu
}


