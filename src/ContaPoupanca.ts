import { Conta } from "./Conta";

export class contapoupanca extends Conta {

    constructor(private rentabilidadeMensal: number, numero: string) {
        super(numero)
    }

    public calcularRendimento(): number {
        let rendimento = 0;

        this.credito.forEach((credito) => {
            rendimento += credito.valor;
        })

        this.debito.forEach((debito) => {
            rendimento -= debito.valor;
        })

        let rendimentoTotal = rendimento * (this.rentabilidadeMensal * 0.01);

        return rendimentoTotal;
    }
    
    public calcularSaldo(): number {
        let saldoTotal = this.calcularRendimento();
        this.credito.forEach((credito) => {
            saldoTotal = saldoTotal + credito.valor;
        })

        this.debito.forEach((debito) => {
            saldoTotal = saldoTotal - debito.valor;
        })

        return saldoTotal + this.calcularRendimento();
    }
}
