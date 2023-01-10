import { Cargo } from "./Cargo";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    private salario: number;
    private cargo: Cargo[] = [];
    constructor(nome: string, cpf: string, telefone: string, salario: number, cargo: string) {
        super(nome, cpf, telefone)
        this.salario = salario;
        this.addCargo(cargo)
    }

    addCargo(cargo: string) {
        const novoCargo = new Cargo(cargo);
        novoCargo.addCargo(cargo);
        this.cargo.push(novoCargo);
    }
}

///////////////////pendente