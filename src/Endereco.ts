export class Endereco {

    private _cep: string = '';
    private _logradouro: string = '';
    private _numero: string = '';
    private _complemento: string = '';
    private _cidade: string = '';
    private _uf: string = '';

    constructor() {}

    get cep(): string {
        return this._cep
    }

    get logradouro(): string {
        return this._logradouro;
    }

    get numero(): string {
        return this._numero;
    }

    get complemento(): string {
        return this._complemento;
    }

    get cidade(): string {
        return this._cidade;
    }

    get uf(): string {
        return this._uf;
    }

    set cep(valor: string) {
        this._cep = valor;
    }

    set logradouro(valor: string) {
        this._logradouro = valor;
    }

    set numero(valor: string) {
        this._numero = valor;
    }

    set complemento(valor: string) {
        this._complemento = valor;
    }

    set cidade(valor: string) {
        this.cidade = valor;
    }

    set uf(valor: string) {
        this._uf = valor;
    }
}
