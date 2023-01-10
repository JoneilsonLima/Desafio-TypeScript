class Nome {

    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto() {
        return this.sobrenome + this.sobrenome;
    }
}

const joneilson = new Nome('joneilson', ' pereira');
console.log(joneilson.nomeCompleto())