function mostrar()
{
	var precio;
	var descuento;
	var resultadofinal;

	precio=prompt("Ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("Ingrese el porcentaje de descuento","%");
	descuento=parseInt(descuento);

	resultadofinal=precio-precio*descuento/100;//preguntar si esto está bien hecho
	document.getElementById('elPrecioFinal').value=resultadofinal;



}
