import { contaCorrente } from "./ContaCorrente";
import { contapoupanca } from "./ContaPoupanca";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa  {
    private vip: boolean;
    private enderecos: Endereco[] = [];
    private contas: (contaCorrente | contapoupanca)[] = [];

    constructor(nome: string, cpf: string, telefone: string, vip: boolean, endereco: Endereco, conta: contaCorrente | contapoupanca) {
        super(nome, cpf, telefone);
        this.vip = vip;
        this.enderecos.push(endereco);
        this.contas.push(conta);
    }

    set endereco(endereco: Endereco) {
        this.enderecos.push(endereco);
    }

    getEndereco(index: number): Endereco {
        return this.enderecos[index];
    }

    set conta(conta: contaCorrente | contapoupanca) {
        this.conta = conta;
    }

    listarEnderecos() {
        this.enderecos.forEach((endereco) => {
            console.log(endereco)
        })
    }
}
