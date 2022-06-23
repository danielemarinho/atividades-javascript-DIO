/*
Manipulando o DOM

## Atividade: Light Mode/Dark Mode

1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
2. Copie o HTML e o CSS deste repositório
3. Crie um arquivo chamado `scripts.js` na sua pasta `assets/js`
4. Selecione os elementos: `h1`, `button`, `footer` e `body`
5. Se os elementos possuirem a classe `dark-mode`, modifique seus estilos. Caso contrário, volte os estilos para o original
*/

function modificaEstilo() {
    modificaClasses();
    modificaTextos();
}

function modificaClasses() {
    
    button.classList.toggle(DarkModeClasses);
    h1.classList.toggle(DarkModeClasses);
    body.classList.toggle(DarkModeClasses);
    footer.classList.toggle(DarkModeClasses);
}

function modificaTextos(){
    const LightMode = "Light Mode";
    const DarkMode  = "Dark Mode";  

    if(body.classList.contains(DarkModeClasses)) {
        button.innerHTML = LightMode;
        h1.innerHTML     = DarkMode + " ON";
        return
    }

    button.innerHTML = DarkMode;
    h1.innerHTML     = LightMode + " ON";
}

const DarkModeClasses  = "dark-mode";
const button = document.getElementById("mode-selector");
const h1     = document.getElementById("page-title");
const body   = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

console.log(button);
console.log(h1);
console.log(body);
console.log(footer);
button.addEventListener("click", modificaEstilo);