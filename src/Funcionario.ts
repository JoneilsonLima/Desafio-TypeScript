import { Cargo } from "./Cargo";
import { IUsuario } from "./IUsuario";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa implements IUsuario {
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

    autenticar(): boolean {
        return true;
    }

    get cargo(): Cargo[] {
        return this._cargo;
    }

    get salario(): number {
        return this._salario;
    }
}