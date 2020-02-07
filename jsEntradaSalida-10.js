/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	console.log("Importe: "+importe);

	descuento=importe*25/100;
	descuento=parseInt(descuento);
	console.log("Descuento: "+descuento);

	resultado=importe-descuento;
	resultado=parseInt(resultado);
	console.log("Resultado: "+resultado);
	document.getElementById('resultado').value=resultado;





}
