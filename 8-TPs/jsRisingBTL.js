/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
 realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar 
hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 var edad=0;
	 var sexo=0;
	 var estadoCivil=0;
	 var sueldoBruto=0;
	 var legajo=0;
	 var nacionalidad=0;	 

	 while(isNaN(edad)||edad>90||edad<19)
	 {
	 	edad=prompt("Ingrese edad");
	 	edad=parseInt(edad);
	 }
	 while(sexo!="F"&&sexo!="M")
	 {
	 	sexo=prompt("Ingrese F o M.");
	 }
	 while(isNaN(estadoCivil)||estadoCivil>4||estadoCivil<1)//esto se parsea?
	 {
	 	estadoCivil=prompt("Ingrese 1(si es soltero), 2(si es casado), 3(si es divorciado) o 4(si es viudo).");
	 	estadoCivil=parseInt(estadoCivil);
	 }
	 while (isNaN(sueldoBruto)||sueldoBruto<8000)
	 {
	 	sueldoBruto=prompt("Ingrese su sueldo");
	 	sueldoBruto=parseInt(sueldoBruto);
	 }
	 while(isNaN(legajo)||legajo<1000||legajo>9999)
	 {
	 	legajo=prompt("Ingrese legajo");
	 	legajo=parseInt(legajo);
	 }
	 while (nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
	 {
	 	nacionalidad=prompt("Ingrese A si es argentino, E si es extranjero y N si está nacionalizado");
	 }

	 //Datos validados

	 switch(sexo)
	 {
	 	case "F":
	 			sexo="Mujer";
	 			break;
	 	case "M":
	 			sexo="Hombre";
	 			break;

	 }

	 switch(estadoCivil)
	 {
	 	case 1:
	 		estadoCivil="Soltero";
	 		break;
	 	case 2:
	 		estadoCivil="Casado";
	 		break;
	 	case 3:
	 		estadoCivil="Divorcidado";
	 		break;
	 	case 4:
	 			estadoCivil="Viudo";
	 			break;
	 }

	 switch(nacionalidad)
	 {
	 	case "A":
	 		nacionalidad="Argentino";
	 		break;
	 	case "E":
	 		nacionalidad="Extranjero";
	 		break;
	 	case "N":
	 		nacionalidad="Nacionalizado";
	 		break;
	 }

	 document.getElementById('Edad').value=edad;
	 document.getElementById('Sexo').value=sexo;
	 document.getElementById('EstadoCivil').value=estadoCivil;
	 document.getElementById('Sueldo').value=sueldoBruto;
	 document.getElementById('Legajo').value=legajo;
	 document.getElementById('Nacionalidad').value=nacionalidad;

}
