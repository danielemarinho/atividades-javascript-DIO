/*
Javascript Assíncrono

Este repositório contém a atividade prática do Curso "Javascript Assíncrono", que faz parte do Basecamp de Javascript que minstrei pela [Digital Innovation One](https://digitalinnovation.one/).

## Atividade: API "catAPI"

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

1. Utilize a API `https://thatcopy.pw/catapi/rest` para fazer as chamadas com o método `fetch()`;
2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
*/

const BASE_URL = 'https://api.thecatapi.com/v1/images/search/' ;
const catBtn = document.getElementById('change-cat');
//const catImg = document.getElementById('cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();

		return json.url;	
	} catch (e) {
		console.log(e.message);
	}
}

const loadImg = async () => {
	catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();