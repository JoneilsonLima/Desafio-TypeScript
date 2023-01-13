export class Credito {
    constructor(private _valor: number, private data: Date, numero: string) {}

    //teste
    get valor(): number {
        return this._valor
    }
}