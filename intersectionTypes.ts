interface Interface1{
    prop1: number;
}

interface Interface2{
    prop2: number;
}

interface Interface3{
    prop2: number;
}

type InterfaceMix = Interface1 & Interface2 & Interface3;

const InterfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 3
}