const divImagem = document.querySelector('.apresentar-imagem')

const imagens = [
  './assets/images/imagem1.jpg',
  './assets/images/imagem2.jpg',
  './assets/images/imagem3.jpg',
  './assets/images/imagem4.png',
  './assets/images/imagem5.jpg',
  './assets/images/imagem6.png',
]

let index = 0
const intervalId = setInterval(() => {
  mostrarImagem(imagens[index])
  index = (index + 1) % imagens.length
}, 3000)

function mostrarImagem(img) {
  divImagem.style.backgroundImage = `url(${img})`
  
}