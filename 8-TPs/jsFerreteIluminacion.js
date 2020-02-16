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
	var cantidadLamparas;
	var marca;
	var precioCadaUna;
	var precio;
	var descuento;
	var iibb;
	var precioFinal;

	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);
	marca=document.getElementById('Marca').value;
	precioCadaUna=35;
	precio=cantidadLamparas*precioCadaUna;
	descuento=0;

	if(cantidadLamparas>5)
	{
		descuento=50;
	}else
	{
		if (cantidadLamparas==5)
		{
			if (marca=="ArgentinaLuz")
			{
				descuento=40;
			}else
			{
				descuento=30;
			}
		}else//termina 5 lamparas
		{
			if (cantidadLamparas==4)
			{
				if (marca=="ArgentinaLuz"||marca=="FelipeLamparas")
				{
					descuento=25;
				}else
				{
					descuento=20;
				}
			}else//termina 4 lamparas
			{
				if (cantidadLamparas==3)
				{
					if (marca=="ArgentinaLuz")
					{
						descuento=15;
					}else
					{
						if (marca=="FelipeLamparas")
						{
							descuento=10;
						}else
						{
							descuento=5;
						}
					}
				}
			}
		}
	}
	
	precioFinal=precio-precio*descuento/100;
	iibb=precioFinal*10/100;

	if (precioFinal>120)
	{
		precioFinal=precioFinal+iibb;
		alert("Usted pagó $ "+iibb+" de ingresos brutos");
	}
	document.getElementById('precioDescuento').value=precioFinal;
}
