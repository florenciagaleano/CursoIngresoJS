function mostrar()
{
	var precio;
	var descuento;
	var resultadofinal;

	precio=prompt("Ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("Ingrese el porcentaje de descuento","%");
	descuento=parseInt(descuento);
	//Preguntar again si tengo que pasarlo a parseInt

	resultadofinal=precio-precio*descuento/100;//preguntar si esto está bien hecho
	resultadofinal=parseInt(resultadofinal);
	document.getElementById('elPrecioFinal').value=resultadofinal;



}
