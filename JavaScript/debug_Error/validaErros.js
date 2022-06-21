/*
## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`
*/
function ValidaErro(arr, num) {
   
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parametros"); //  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
        
        if(typeof(arr) !== 'object') throw new TypeError("Envie um array do tipo object"); //  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
    
        if(typeof(num) !== 'number') throw new TypeError("Envie um número do tipo number"); //  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
    
        if(arr.length !== num) throw new RangeError("Tamanho do array diferente do numero"); //  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`

        return arr //retorna array se ele for válido

    } catch (e) {
        //Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof
        if(e instanceof ReferenceError) {
            console.log("Erro tipo ReferenceError");
            console.log(e.message);
            //console.log(e.name);
            //console.log(e.stack);
        } else if(e instanceof TypeError) {
             console.log("Erro tipo TypeError");
             console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Erro tipo RangeError");
            console.log(e.message)
        } else {
            console.log("Erro nao esperado:" + e);
        }
    }
}

//ValidaErro("");
//ValidaErro(5,5);
//ValidaErro([1,3,4],"3");
//ValidaErro([1,3,4,6],3);
//console.log(ValidaErro([1,6,2],3));
console.log(ValidaErro([1,3,4,6],4));
