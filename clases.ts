class Trasporte{
    private velocidad: number;
    private formaDeMovilidad: string;

    constructor(velocidad: number,formaDeMovilidad: string){
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }

    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad: number){
        this.velocidad = velocidad;
    }

    getFormaDeMovilidad(){
        return this.formaDeMovilidad;
    }

    setFormaDemovilidad(formaDeMovilidad: string){
        this.formaDeMovilidad = formaDeMovilidad;
    }
}

//una clase puede ser un type
const trasnporte: Trasporte = new Trasporte(20, 'suelo');

class Auto extends Trasporte{
    private cantidadDePuertas: number;

    constructor(velocidad: number,formaDeMovilidad: string,cantidadDePuertas: number){
        super(velocidad,formaDeMovilidad);
        this.cantidadDePuertas = cantidadDePuertas;
    }

    getVelocidad(){
        return super.getVelocidad() + 10;
    }

    getCantidadDePuertas(){
        return this.cantidadDePuertas;
    }

    setCantidadDePuertas(puertas: number){
        this.cantidadDePuertas = puertas;
    }
}

const auto: Auto = new Auto(20,'suelo',4);