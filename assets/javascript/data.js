const divData = document.querySelector('.data')

let data = new Date()
divData.innerHTML = `
    <h2>${data.toLocaleDateString()}</h2>
`