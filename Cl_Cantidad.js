export default class Cl_Persona {
    constructor() {
        this.conHombres = 0
        this.conMujeres = 0

    }

    procesar(Perso) {
        if (Perso.sexo == "M") {
            this.conHombres++
        }
        else {
            this.conMujeres++
        }
    }
    cantidadPersonas() {
        return this.conHombres + this.conMujeres
    }
    cantidadHombres() {
        return this.conHombres
    }
    cantidadMujeres() {
        return this.conMujeres
    }
    
}
