export class Debito {
    constructor(readonly _valor: number, private data: Date, numero: string) {}

    // teste
    get valor(): number {
        return this._valor;
    }
}