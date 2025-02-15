export default class Cl_Vendedores {
    constructor(nombre, montoVenta) {
        this.nombre = nombre
        this.montoVenta = montoVenta
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get nombre() {
        return this._nombre
    }
    set montoVenta(montoVenta) {
        this._montoVenta = montoVenta
    }
    get montoVenta() {
        return this._montoVenta
    }   
}