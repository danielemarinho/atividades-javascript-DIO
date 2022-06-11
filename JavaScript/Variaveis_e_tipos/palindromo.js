/*## Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar, esse, ovo, arara, omissíssimo)

    let nome = string.split(''); //separa os elementos da string
    return nome.reverse(); //inverte os elementos da string
    return nome.reverse().join(""); //join: junta os elementos
    //return nome

*/

function verificaPalindromo1 (string){
    if(!string) return "OPS! String inexistente";
    //Separa os elementos, inverte e junta
    let nome = string.split('').reverse().join('');
    //verifica se a nova string é igual
    return ( nome === string) ? `A string \'${string}\' é Palindromo.` : `A string \'${string}\' NÃO é Palindromo.` ;
}


function verificaPalindromo2(string) {
    
    if(!string) return "String inexistente";
    
    let msg = `A string \'${string}\'`;

    for (let index = 0; index < (string.length/2); index++) { //verifica metade do array
        let stringReversa = string.length-index-1; //tamanho do elemento - 1(tamanho comeca do 1 e o array do zero - index(vai comparar com o array-1))
       // console.log(`${string[index]} || ${string[stringReversa]}`);
       
        if (string[index] != string[stringReversa]) return `${msg} NÃO é Palindromo`; 
    } 
    return `${msg} É Palindromo`;
}

let nome = "OVO"; 

//console.log(verificaPalindromo1(nome));
console.log(verificaPalindromo2(nome));