/*# Variáveis e Tipos
## Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]
Input -> []
Output -> -1
*/

function substituiPares(valores) {
    if(!valores || !valores.length) return -1; //verifica se for nulo ou se nao for um array
    if(valores === null) return -1;
    for (let i = 0; i < valores.length; i++) {
       // console.log(valores[i]);
        if(valores[i]===0) {
            console.log(`O número ${valores[i]} já é zero.`); 
        }else if (valores[i] % 2 ===0) {
            console.log(`Substituindo ${valores[i]} por 0.`);
            valores[i]=0;
        }
    }
    return valores;
}

let array = [0,1,3,4,6,80,33,23,90,95,105,200,300];
console.log(substituiPares(array));