//type
let nombre: string = 'dasdsa';
nombre = 'sdsadas';
nombre = 2;//error

let b: number = 10;
b = a;//error
b = 20;
b = 20 + 20;
const num1 = 10;
const numero2 = 20;
b = numero2 + num1;

//type infernce
let c = 'dsfsd';


//type funciones
function suma(num1: number,num2: number): number{
    return num1 + num2;
}

let enyValue: any = 10;
enyValue = 'fdsf';

function sumaJavascriptVanilla(num1,num2){
    return num1 + num2;
}

//type keyword
type dni = string;

let dniNumber: dni = 123; //error