/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo
 y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio 
 de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	console.log("Largo: "+largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	console.log("Ancho: "+ancho);

	alambre=(ancho+ancho+largo+largo)*3
	console.log("Cantidad de alambre: "+alambre);

	alert("Se deben comprar "+alambre+"metros de alambre");


}
function Circulo () 
{
	var radio;
	var terreno;//esta variable no esta de mas?
	var resultado;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	console.log("Radio: "+radio);

	terreno=(2*3.14)*radio;//esta bien si pongo asi el pi
	console.log("Terreno: "+terreno);

	resultado=terreno*3;
	console.log("Alambre a comprar: "+resultado);
	//revisar pq creo que está mal la cuenta

	alert("Cantidad de metros de alambre que se debe comprar: "+resultado);

	
}
function Materiales () 
{
	var largo;
	var ancho;
	var terreno;
	var cemento;
	var cal;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	console.log("Largo: "+largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	console.log("Ancho: "+ancho);

	terreno=largo*ancho;
	console.log("Terreno "+terreno);

	cemento=terreno*2;
	console.log("Cemento "+cemento);

	cal=terreno*3;
	console.log("Cal "+cal);

	alert("Se necesitarán "+cemento+" de cemento y "+cal+" bolsas de cal");





}