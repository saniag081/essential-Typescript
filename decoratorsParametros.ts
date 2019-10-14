function logParameter(target,propertyName,index){
    const metadataKey =`log${propertyName}_parameters`;

    if(Array.isArray(target[metadataKey])){
        target[metadataKey].push(index);
    }else{
        target[metadataKey] = [index];
    }
}

class P{
    greet(@logParameter menssage: string): string{
        return menssage;
    }
}

const p: P = new P();
p.greet('Hola');