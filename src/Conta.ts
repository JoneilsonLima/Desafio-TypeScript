import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {

    readonly credito: Credito[] = []
    readonly debito: Debito[] = []

    constructor(private numero: string) {}

    public depositar(valor: number, date = new Date()): void {
        const credito = new Credito(valor, new Date(), this.numero);
        this.credito.push(credito);
    }

    public sacar(valor: number): void {
        if(this.calcularSaldo() >= valor) {
            const debito = new Debito(valor, new Date(), this.numero);
            this.debito.push(debito);
        }
    }

    abstract calcularSaldo(): number;
}