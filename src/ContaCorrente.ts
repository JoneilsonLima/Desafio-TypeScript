import { Conta } from "./Conta";

export class contaCorrente extends Conta {

    constructor(private limite: number, numero: string) {
        super(numero)
    }

    public transferir(contaDestino: Conta, valor: number): void {
        if (this.calcularSaldo() >= valor) {
            contaDestino.depositar(valor)
            this.limite -= valor;
        }
    }

    public calcularSaldo(): number {
        let saldoTotal = this.limite;
        this.credito.forEach((credito) => {
            saldoTotal = saldoTotal + credito.valor;
        })

        this.debito.forEach((debito) => {
            saldoTotal = saldoTotal - debito.valor;
        })

        return saldoTotal;
    }
}