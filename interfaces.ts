type Dni = number;

interface Persona{
    // ? parametro opcional
    altura?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

const persona: Persona = {
    //altura: 1.67,
    edad: 27,
    nombre: 'Alan',
    apellido: 'Buscaglia',
    dni: 3049332
}