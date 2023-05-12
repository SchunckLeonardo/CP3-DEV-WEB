const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
const logo = document.querySelector('.logo')
const links = document.querySelectorAll('.header-nav a')
const rodape = document.querySelector('.rodape')
const dataDiv = document.querySelector('.data')
const telefone = document.querySelector('.telefone h2')
const icones = document.querySelectorAll('.icones i')
const containerCard = document.querySelector('.container-card')



dark.addEventListener('click', e => {
    document.body.style.backgroundColor = "#161925"
    document.body.style.transition = ".5s"
    dark.style.color = "#FDFFFC"
    logo.style.color = "#FDFFFC"
    rodape.style.backgroundColor = '#FDFFFC'
    telefone.style.color = '#161925'
    
    links.forEach(link => {
        link.classList.add('trocar-cor')
        link.style.color = "#FDFFFC"
    })
    
    for(let i of icones) {
        i.style.color = '#161925'
    }
    containerCard.style.color = '#FDFFFC'
})

light.addEventListener('click', e => {
    document.body.style.backgroundColor = "#FDFFFC"
    document.body.style.transition = ".5s"
    dark.style.color = "#161925"
    logo.style.color = "#C1292E"
    rodape.style.backgroundColor = '#161925'
    telefone.style.color = '#FDFFFC'
    
    links.forEach(link => {
        link.classList.remove('trocar-cor')
        link.style.color = "#C1292E"
    })
    
    for(let i of icones) {
        i.style.color = '#FDFFFC'
    }
    containerCard.style.color = '#161925'
})