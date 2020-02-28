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
	 var edad;
	 var sexo;
	 var estadoCivil;
	 var sueldoBruto;
	 var legajo;
	 var nacionalidad;	 

	 do
	 {
	 	edad=prompt("Ingrese edad");
	 	edad=parseInt(edad);
	 }while(isNaN(edad)||edad<19||edad>90);
	 
	 do
	 {
	 	sexo=prompt("Ingrese sexo");
	 }while(!isNaN(sexo)||sexo!="F"&&sexo!="M");
	
	 do
	 {
	 	estadoCivil=prompt("Ingrese estado civil. 1 para soltero, 2 casado, 3 divorciado y 4 viudo");
	 	estadoCivil=parseInt(estadoCivil);
	 }while(isNaN(estadoCivil)||estadoCivil<1||estadoCivil>4);
	 
	 do
	 {
	 	sueldoBruto=prompt("Ingrese su suledo");
	 	sueldoBruto=parseInt(sueldoBruto);
	 }while(isNaN(sueldoBruto)||sueldoBruto<8000);
	 
	 do
	 {
	 	legajo=prompt("Ingrese número de legajo");
	 	legajo=parseInt(legajo);
	 }while(isNaN(legajo)||legajo<1000||legajo>9999);


	 do
	 {
	 	nacionalidad=prompt("Ingrese nacionalidad. A si es argentino, E extranjero o N nacinalizado");
	 }while(!isNaN(nacionalidad)||nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N");

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
