/*Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

    function calculaIdade(anos) {
        return `Daqui a ${anos} anos, ${this.nome} terá ${
            this.idade + anos
        } anos de idade.`;
    }
*/

const PESSOA = {
    nome : "Daniele",
    idade: 40
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

console.log(calculaIdade.call(PESSOA,7)); //utilizando CALL

console.log(calculaIdade.apply(PESSOA,[2])) //utilizando APPLY