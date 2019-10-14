function logPropeerty(target,key) {
    let _val = this[key];

    const getter = ()=>{
        console.log(`Get:${key} = ${_val}`);
        return _val;
    }

    const setter = (newVal) => {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    }

    const objectProperty = {
        get: getter,
        set: setter
    }

    Object.defineProperty(target,key,objectProperty);
}

class Persona{
    @logPropeerty
    public name: string;

    constructor(name:string){
        this.name = name;
    }
}

const p: Persona = new Persona('Alan');
p.name = 'Platzi'; //Set: name => platzi
const nameFromClass = p.name;//Get: name => Platzi
