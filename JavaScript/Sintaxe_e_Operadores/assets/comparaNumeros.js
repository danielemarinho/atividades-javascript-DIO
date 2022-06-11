//Recebe os números, faz a soma e verifica se é maior ou menor
function mensagem() { 
   let n1 = Number(prompt('Insira o primeiro número'));
   let n2 = Number(prompt('Insira o segundo número'));

   const numIguais  = verificaNumeros(n1, n2); 
   const calculoNum = calculaNumeros(n1, n2);

   return `${numIguais} ${calculoNum} `;
}

//verifica se números são iguais
function verificaNumeros(n1, n2) {
    let msg1 = `Os números ${n1} e ${n2}`;
    let resposta = "";

    if(n1!=n2) { 
        resposta = "não";
    } 
    return `${msg1} ${resposta} são iguais.\n`;
}

//calcula soma e verifica se sao maior ou menor que 10 e 20
function calculaNumeros(n1, n2){ 
    let soma = n1 + n2;

    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if(soma > 10) {
        comparaDez = 'maior';
    }

    if(soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma} que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;

}

document.getElementById("resultado").innerHTML = mensagem();  
//console.log(mensagem())