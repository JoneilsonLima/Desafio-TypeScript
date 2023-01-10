import { Cargo } from "./Cargo";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    constructor( cpf: string, nome: string, telefone: string, private salario: number) {
        super(cpf, nome, telefone)
    }

    adicionarCargo(...cargos: Cargo[]) {
        const novoCargo = new Cargo();
    }
}