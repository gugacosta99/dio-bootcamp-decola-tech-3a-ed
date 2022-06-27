class ContaBncaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        try{
            if(valor > this._saldo) throw "Sem saldo sufuciente";
            this._saldo -= valor;
        } catch(e) {
            console.log(e);
        }
    }

    depositar(valor){
        this._saldo += valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBncaria{
    constructor(agencia, numero){
        super(agencia, numero, "conta corrente");
        this._cartaoCredito = 0;
    }

    get CartaoCredito(){
        return this._cartaoCredito;
    }

    set CartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBncaria{
    constructor(agencia, numero){
        super(agencia, numero, "conta poupanca");
    }
}

class ContaUniversitaria extends ContaBncaria{
    constructor(agencia, numero){
        super(agencia, numero, "conta universitaria");
    }

    sacar(valor){
        try{
            if(valor >= 500) throw "Essa conta só pode sacar valores menores que 500 reais";
            if(valor > this.getSaldo) throw "Sem saldo sufuciente";
            this._saldo -= valor;
        } catch(e) {
            console.log(e);
        }
    }
}