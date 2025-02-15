export default class Cl_Ventas {

    constructor() {
        this.acumVentas = 0
        this.conVentasMayores = 0
        this.conVentasMenores = 0
    }
    procesar(Vende) {
        this.acumVentas += Vende.montoVenta

        if (Vende.montoVenta <= 100)
            this.conVentasMenores++
        else {
            if (Vende.montoVenta >= 100)
                this.conVentasMayores++
        }

    }
    cantidadVentasMenores() {
        return this.conVentasMenores
    }
    cantidadVentasMayores() {
        return this.conVentasMayores
    }
    montoTotalVentas() {
        return this.acumVentas

    }

}