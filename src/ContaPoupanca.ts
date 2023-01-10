import { Conta } from "./Conta";

export class contapoupanca extends Conta {

    constructor(private rentabilidadeMensal: number, numero: string) {
        super(numero)
    }

    public calcularRendimento() {
        
    }
    
    public calcularSaldo(): number {
        let saldoTotal = 0;
        this.credito.forEach((credito) => {
            saldoTotal = saldoTotal + credito.valor;
        })

        this.debito.forEach((debito) => {
            saldoTotal = saldoTotal - debito.valor;
        })

        return saldoTotal;
    }
}


///////////////////pendente