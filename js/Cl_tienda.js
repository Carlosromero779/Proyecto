export default class Cl_tienda {
    constructor(montoCaja, porcIncremento) {
        this.montoCaja = +montoCaja;
        this.porcIncremento = +porcIncremento;
        this.venta = [];
    }
    set montoCaja(montoCaja) {
        this._montoCaja = montoCaja;
    }
    get montoCaja() {
        return this._montoCaja;
    }
    set porcIncremento(porcIncremento) {
        this._porcIncremento = porcIncremento;
    }
    get porcIncremento() {
        return this._porcIncremento;
    }
    

    agregarVenta(venta) {
        this.venta.push(venta);
    }
    eliminarVenta(factura) {
        factura = +factura;
        let indexVenta = -1;
        for (let i = 0; i < this.venta.length; i++) 
            if (this.venta[i].factura == factura) indexVenta = i;
           if (indexVenta !== -1) this.venta.splice(indexVenta, 1);
           return indexVenta !== -1;
        }
   porcIncremento(){
       let  incremento = this.venta.map(venta => ({costo: venta.costo * this.porcIncremento / 100}));
       return incremento;
   }
   montoFinal(){
       let montoFinal = this.venta.map(venta => ({costo: venta.costo + this.montoIncremento().costo}));
       return montoFinal;
       }
    MontoFinalCaja(){
        let acmMontoFinal = this.montoCaja;
        for (let i = 0; i < this.montoFinal().length; i++) {
            acmMontoFinal += this.montoFinal()[i].costo;
        }
        return acmMontoFinal
    }
    montoMayor(){
        let mayor = this.venta[0].costo;
        for (let i = 0; i < this.venta.length; i++) {
            if (this.venta[i].costo > mayor) {
                mayor = this.venta[i].costo;
            }
        } 
        return mayor;   
    }
    clientesMayorPago(){
        let clientesMayorPago = this.montoMayor();
        return this.venta.filter(venta => venta.costo == clientesMayorPago);
    }
    clientesUnArticulo(){
        let clientesUnArticulo = this.venta.filter(venta => venta.cntArticulos == 1);
        return clientesUnArticulo;
        
    }

}