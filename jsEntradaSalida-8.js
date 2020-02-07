/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=document.getElementById('numeroDividendo').value;
	dividendo=parseInt(dividendo);
	console.log("Dividendo: "+ dividendo);

	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);
	console.log("Divisor: "+divisor);

	resto=dividendo%divisor;
	resto=parseInt(resto);
	console.log("Resto: "+resto);

	alert("El resto es "+resto);
	
}
