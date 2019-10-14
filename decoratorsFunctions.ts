function log(target, key) {
    console.log(key + 'se ha llamdo');
}


class Persona{
    private name: string;

    constructor(name: string){
        this.name = name;
    }
    //decorators
    @log
    sayMyName(){
        console.log(this.name);
    }
}

const persona: Persona = new Persona('Alan');
persona.sayMyName();//'Alan' 'sayMyName se ha llamdo' 