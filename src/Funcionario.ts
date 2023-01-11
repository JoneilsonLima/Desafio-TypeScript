import { Cargo } from "./Cargo";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    private _salario: number;
    private _cargo: Cargo[] = [];
    constructor(nome: string, cpf: string, telefone: string, salario: number) {
        super(nome, cpf, telefone)
        this._salario = salario
    }

    addCargo(cargo: string) {
        const novoCargo = new Cargo(cargo);
        novoCargo.addCargo(cargo);
        this.cargo.push(novoCargo);
    }

    get cargo(): Cargo[] {
        return this._cargo;
    }

    get salario(): number {
        return this._salario;
    }
}
