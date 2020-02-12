/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparas;
	var marca;
	var precio;
	var descuentoCincuenta;
	var descuentoCuarenta;
	var descuentoTreinta;
	var descuentoVeinticinco;
	var descuentoVeinte;
	var descuentoQuince;
	var descuentoDiez;
	var descuentoCinco;
	var iibb;
	var precioFinal;

	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marca=document.getElementById('Marca').value;

	precio=cantidadLamparas*35;

	descuentoCincuenta=precio*50/100;
	descuentoCuarenta=precio*40/100;
	descuentoTreinta=precio*30/100;
	descuentoVeinticinco=precio*25/100;
	descuentoVeinte=precio*20/100;
	descuentoQuince=precio*15/100;
	descuentoDiez=precio*10/100;
	descuentoCinco=precio*5/100;
	iibb=precio*10/100;

	if(cantidadLamparas>5)
	{
		precioFinal=precio-descuentoCincuenta;
		
	}//termina else if punto a
	else
	{
		if(cantidadLamparas==5 && marca=="ArgentinaLuz")
		{
			precioFinal=precio-descuentoCuarenta;
		}//termina else if punto b
		else
		{
			if(cantidadLamparas==5 && marca != "ArgentinaLuz")
			{
				precioFinal=precio-descuentoTreinta;
			}//termina else if punto b(2)
			else
			{
				if(cantidadLamparas==4 && marca =="ArgentinaLuz"||cantidadLamparas==4 && marca=="FelipeLamparas")
				{
					precioFinal=precio-descuentoVeinticinco;
				}//termina else if punto c(1)
				else
				{
					if(cantidadLamparas==4 && marca !="ArgentinaLuz"||cantidadLamparas==4 && marca !="FelipeLamparas")
					{
						precioFinal=precio-descuentoVeinte;
					}//termina if else punto c(2)
					else
					{
						if(cantidadLamparas==3 && marca == "ArgentinaLuz")
						{
							precioFinal=precio-descuentoQuince;
						}//termina else if punto d(1)
						else
						{
							if(cantidadLamparas==3 && marca=="FelipeLamparas")
							{
								precioFinal=precio-descuentoDiez;
							}//termina else if punto d(2)
							else
							{
								if (cantidadLamparas==3 &&marca!="ArgentinaLuz" ||cantidadLamparas==3 &&marca!="FelipeLamparas")//esta bien esto?
								{
									precioFinal=precio-descuentoCinco;
								}//termina else if punto d(3)
								else
								{
									precioFinal=precio;
								}
							}
						}
					}
				}
				
			}
		}

	}
		
	document.getElementById('precioDescuento').value=precioFinal;
	precioFinal=document.getElementById('precioDescuento').value;

	//preguntar como hacer el E
}
