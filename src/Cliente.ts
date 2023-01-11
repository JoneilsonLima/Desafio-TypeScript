import { contaCorrente } from "./ContaCorrente";
import { contapoupanca } from "./ContaPoupanca";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa  {
    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _contas: (contaCorrente | contapoupanca)[] = [];

    constructor(nome: string, cpf: string, telefone: string, vip: boolean, endereco: Endereco, conta: contaCorrente | contapoupanca) {
        super(nome, cpf, telefone);
        this._vip = vip;
        this._enderecos.push(endereco);
        this._contas.push(conta);
    }

    set endereco(endereco: Endereco) {
        this._enderecos.push(endereco);
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

    listarEnderecos() {
        this._enderecos.forEach((endereco) => {
            console.log(endereco)
        })
    }
}
