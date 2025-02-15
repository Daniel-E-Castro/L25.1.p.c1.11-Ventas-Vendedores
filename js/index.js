/*
11. VENTAS VENDEDORES

Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.

Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), 
(José, 135), 
(Carlos, 160), 
(Pedro, 75)

SALIDA:
Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas que fueron por 100$ o menos: 3
Monto total de las ventas: 520$
*/

import Cl_Vendedores from "./Cl_Vendedores.js";
import Cl_Ventas from "./Cl_Ventas.js";

let Vendedor1 = new Cl_Vendedores ("Mary", 150)
let Vendedor2 = new Cl_Vendedores ("Jose", 135)
let Vendedor3 = new Cl_Vendedores ("Carlos", 160)
let Vendedor4 = new Cl_Vendedores ("Pedro", 75)

let ventas = new Cl_Ventas()

ventas.procesar(Vendedor1)
ventas.procesar(Vendedor2)
ventas.procesar(Vendedor3)
ventas.procesar(Vendedor4)

let salida = document.getElementById("salida");
salida.innerHTML = `
Cantidad de ventas que fueron por 100$ o menos: ${ventas.cantidadVentasMenores()}
<br>Cantidad de ventas que fueron por 100$ o menos: ${ventas.cantidadVentasMayores()}
<br>Monto total de las ventas: ${ventas.montoTotalVentas()}$
`