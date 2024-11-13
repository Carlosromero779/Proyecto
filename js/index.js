/** 
* 2. VENTAS
*Se desea llevar un control de las ventas que realiza
*una tienda. Se tiene por cada venta: nombre del cliente,
*número de factura, costo y cantidad de artículos. Se
*requiere de un programa que permita el registro de esta
*información, conociendo al principio de la ejecución el
*monto inicial en caja y el porcentaje de incremento para
*el costo de cada venta.
*Estructuras de datos recomendadas
* Cl_tienda: montoCaja, porcIncremento
* Cl_venta: cliente, factura, costo, cnArticulos
*Primeros requerimientos
* Los datos entrada vienen en un archivo (con
*import... ver anexo)
* Monto final en caja
* Clientes que pagaron el monto mayor
* Clientes que sólo llevaron 1 artículo
*/
import Cl_tienda from './Cl_tienda.js';
import Dt_venta from './Dt_venta.js';
import Cl_venta from './Cl_venta.js';
import Dt_tienda from './Dt_tienda.js';

const tienda = new Cl_tienda(Dt_tienda.montoCaja, Dt_tienda.porcIncremento);
 Dt_venta.forEach((venta) => tienda.agregarVenta(
     new Cl_venta(venta.cliente, venta.factura, venta.costo, venta.cntArticulos)
 ));
 
let  montoFinalCaja= ()=> {
     let montoFinalCaja = tienda.MontoFinalCaja();
     salida.innerHTML += `<br> Monto final en caja: ${montoFinalCaja}`;
 }
 let clientesMayorPago=()=>{
    let ventas = tienda.clientesMayorPago();
    salida.innerHTML += `<br> Clientes que pagaron el monto mayor`;
    ventas.forEach((articulos)=> {
        salida.innerHTML += `<br> ${articulos.cliente}`});
 }
let clientesUnArticulo=()=>{
    let ventas = tienda.clientesUnArticulo();
    salida.innerHTML += `<br> Clientes que solo llevaron 1 articulo`;
    ventas.forEach((articulos)=> {
        salida.innerHTML += `<br> ${articulos.cliente}`});
}

let salida = document.getElementById('salida');
let opciones = document.getElementById('opciones');
salida.innerHTML = ` 
<br> Seleccione una de las siguientes opciones:
    <br> 1 = Agregar venta:
    <br> 2 = Modificar venta:
    <br> 3 = Eliminar venta:
   <br> 4= Monto final en caja:
   <br> 5= Clientes que pagaron el monto mayor:
   <br> 6= Clientes que solo llevaron 1 articulo:
  `

opciones.onclick = ()=>{
    let opcion = +prompt(`Seleccione su opcion:`)
 switch(opcion){
     case 1: 
     montoFinalCaja();
     break;
     case 2: 
     clientesMayorPago();
     break;
     case 3: 
     clientesUnArticulo();
     break;
 }
};

