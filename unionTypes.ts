type sumuParametros = string | number;
type sumaReturnType = string | number;

function Suma(num1: sumuParametros, num2: sumuParametros): sumaReturnType {
    return Number(num1)+ Number(num2);
}

interface interface1{
    prop1: number;
}

interface interface2{
    prop2: number;
}

type interfaceMix = interface1 | interface2;

const interfaceMix: interfaceMix = {
    prop1: 2,
    prop2: 3,
    // prop3: 212 error  
}