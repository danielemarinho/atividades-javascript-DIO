//Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
class ContaBancaria { //
    constructor(agencia, numero, saldo) {
        this.agencia = agencia;
        this.numero  = numero;
        this._saldo  = saldo;
    } 

    //* Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
    get saldo() {
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    //* Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;1
    sacar(valor) {
        if(this._saldo < valor) {
            return "Saldo insuficiente";
        }
        return this._saldo -= valor;
    }

    depositar(valor) {
       return this._saldo += valor;
    }
}

//* Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo, cartaoCredito);
        this.tipo    = 'contacorrente';
        this._cartaoCredito = 'cartaoCredito';
    }

    //* Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

//* Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = "contaPoupanca";
    }
}

//* Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = "contaUniversitaria";
    }

    //Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**.
    sacar(valor) {
        if(this._saldo < valor) {
            return "Saldo insuficiente";
        }
        if(valor > 500) {
            return "Operação negada!";
        }

        return this._saldo -= valor;
    }
}