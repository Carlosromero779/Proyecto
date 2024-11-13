export default class Cl_venta{
    constructor(cliente, factura, costo, cntArticulos){
        this.cliente = cliente;
        this.factura = factura;
        this.costo = costo;
        this.cnArticulos = cntArticulos;
    }
    set cliente(cliente){
        this._cliente = cliente;
    }
    get cliente(){
        return this._cliente;
    }
    set factura(factura){
        this._factura = factura;
    }
    get factura(){
        return this._factura;
    }
    set costo(costo){
        this._costo = costo;
    }
    get costo(){
        return this._costo;
    }
    set cntArticulos(cntArticulos){
        this._cntArticulos = cntArticulos;
    }
    get cntArticulos(){
        return this._cntArticulos;
    }
    
}