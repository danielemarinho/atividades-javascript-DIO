/*
Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/


const ALUNOS = [
    {
        nome: "Daniele",
        nota: 9,
    },
    {
        nome: "Natalia",
        nota: 8,
    },
    {
        nome: "Angelica",
        nota: 8.5,
    },
    {
        nome: "Carol",
        nota: 5,
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        }
    }
    return aprovados;
}

/* Utilizando a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */
function alunosAprovados2(arr, media) {
    let aprovados = [];

    
    for(let i = 0; i < arr.length; i++) {
       
        const {nome, nota} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

//console.log(alunosAprovados(ALUNOS, 6));
console.log(alunosAprovados2(ALUNOS, 6));