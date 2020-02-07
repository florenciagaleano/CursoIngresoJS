/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	console.log("primer precio "+ precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	console.log("segundo precio "+precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);
	console.log("tercer precio "+precioTres);
	


	suma=precioUno+precioDos+precioTres;
	suma=parseInt(suma);
	console.log("la suma es "+suma);
	
	alert("La suma es "+suma);
	
	//cuando dice mostrar por console o por alert??



}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);


	promedio=(precioUno+precioDos+precioTres)/3;
	promedio=parseInt(promedio);

	alert("El promedio es "+promedio);

	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var precioFinalIVA;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	precioFinal=precioUno+precioDos+precioTres;
	precioFinal=parseInt(precioFinal);
	//es necesario esta var??

	precioFinalIVA=precioFinal+precioFinal*21/100;
	precioFinalIVA=parseInt(precioFinalIVA);

	alert("El precio con IVA es "+precioFinalIVA);

	
}