import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    constructor( cpf: string, nome: string, telefone: string, private salario: number) {
        super(cpf, nome, telefone)
    }
}