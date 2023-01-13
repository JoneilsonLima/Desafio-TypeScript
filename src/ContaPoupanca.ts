import { Conta } from "./Conta";

export class contapoupanca extends Conta {

    constructor(private rentabilidadeMensal: number, numero: string) {
        super(numero)
    }

    public calcularRendimento(): number {
        let rendimento = 0;
        return rendimento
    }
    
    public calcularSaldo(): number {
        let saldoTotal = 0;
        this.credito.forEach((credito) => {
            saldoTotal = saldoTotal + credito.valor;
        })

        this.debito.forEach((debito) => {
            saldoTotal = saldoTotal - debito.valor;
        })

        return saldoTotal + this.calcularRendimento(); //return saldoTotal + this.calcularRendimento();
    }
}

//Não concluido o Calculo do rendimento