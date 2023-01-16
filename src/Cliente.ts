import { contaCorrente } from "./ContaCorrente";
import { contapoupanca } from "./ContaPoupanca";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";
import { Conta } from "./Conta";
import { IUsuario } from "./IUsuario";

export class Cliente extends Pessoa implements IUsuario {
    private _vip: boolean;
    private _contas: (contaCorrente | contapoupanca)[] = [];

    constructor(vip: boolean, cpf: string, telefone: string, nome: string, private endereco: Endereco[], conta: contaCorrente | contapoupanca) {
        super(nome, cpf, telefone);
        this._vip = vip;

        this._contas.push(conta);
    }

    set enderecos(endereco: Endereco) {
        this.endereco.push(endereco);
    }

    set conta(conta: contaCorrente | contapoupanca) {
        this.conta = conta;
    }

    set vip(valor: boolean) {
        this._vip = valor;
    }

    get vip(): boolean {
        return this._vip;
    }

    autenticar(): boolean {
        return true;
    }

    listarEnderecos() {
        this.endereco.forEach((endereco) => {
            console.log(endereco)
        })
    }
}