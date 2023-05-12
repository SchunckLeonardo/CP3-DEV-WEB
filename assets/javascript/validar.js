// validação do formulário -- CONTATO 
function validar() { 
    // declarar as variáveis 
    let nome = document.getElementById("nome").value 
    let telefone = document.getElementById("telefone").value 
    let email = document.getElementById("email").value 

    // condicional if and else 
    if (nome == "" || telefone == "" || email == "") { 
        alert("Preencha todos os campos") 
    } else { 
        alert("Acesso Permitido") 
        window.open('produtos.html') 
    } 
} 
