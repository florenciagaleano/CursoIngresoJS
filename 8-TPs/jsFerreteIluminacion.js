/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un
 descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el
 descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el 
descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 
10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 
0% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadDeLamparas;
	var marca;
	var precioBruto;
	var descuento;
	var precioConDescuento;

	cantidadDeLamparas=document.getElementById('Cantidad').value;
	cantidadDeLamparas=parseInt(cantidadDeLamparas);
	marca=document.getElementById('Marca').value;
	precioBruto=cantidadDeLamparas*35;
	console.info("Precio bruto: ",precioBruto);
	descuento=0;

	switch(cantidadDeLamparas)//case todos al mismo nivel y los break a la misma altura del codigo
	{
		case 5:

			switch(marca)
			{
				case "ArgentinaLuz":
				descuento=40;
				break;
				default:
				descuento=30;
			}
			break;

		case 4:

			switch(marca)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
				descuento=25;
				default:
				descuento=20;
			}
			break;

		case 3:
			switch(marca)
			{
				case "ArgentinaLuz":
				descuento=15;
				case:"FelipeLamparas"
				descuento=10;
				default:
				descuento=5;
			}
			break;
		case 1:
		case 2:
			descuento=0;
			break;
		default://es el resto como el else en el if
			descuento=50;
			break;

	}//switch usa menos microprocesador. Lo de mayor a 5 NO SE PONE EN EL SWITCH NO SE PONEN CONDICIONES	

	
	precioConDescuento=precioBruto-precioBruto*descuento/100;//fijarme pq no me anda
	console.info("Precio con descuento: ",precioConDescuento);
	document.getElementById('precioDescuento').value=precioConDescuento;


}
