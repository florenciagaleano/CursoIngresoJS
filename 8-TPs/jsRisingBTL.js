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

	 edad=prompt("Ingrese su edad");
	 edad=parseInt(edad);
	 sexo=prompt("Ingrese F o M");
	 estadoCivil=prompt("Ingrese 1, 2, 3 o 4");
	 sueldoBruto=prompt("Ingrese su sueldo bruto","$");
	 sueldoBruto=parseInt(sueldoBruto);
	 

	 while(isNaN(edad)||edad>90||edad<19)
	 {
	 	edad=prompt("Edad no válida");
	 }
	 while(sexo!="F"&&sexo!="M")
	 {
	 	sexo=prompt("Vuelva a intentarlo. Ingrese F o M.");
	 }
	 while(isNaN(estadoCivil)||estadoCivil>4||estadoCivil<1)
	 {
	 	estadoCivil=prompt("Vuelva a intentarlo. Ingrese 1, 2, 3 o 4.");
	 }
	 while (isNaN(sueldoBruto)||sueldoBruto<8000)
	 {
	 	sueldoBruto=prompt("Reingrese sueldo");
	 }

	 document.getElementById('Edad').value=edad;
	 document.getElementById('Sexo').value=sexo;
	 document.getElementById('EstadoCivil').value=estadoCivil;
	 document.getElementById('Sueldo').value=sueldoBruto;
	 

}
