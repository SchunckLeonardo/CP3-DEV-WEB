function quizAlert() { 
    alert("Vamos ao mini quiz!") 
    } 
    // função para o quiz -- QUIZ 
    function quiz() { 
        const perguntas = [ 
            { // Pergunta 1 
                pergunta: "1. Qual é o material de escrita mais antigo conhecido?\n(A) Argila\n(B) Ossos", 
                resposta: "a" 
            }, 
            { // Pergunta 2 
                pergunta: "2. Quantos lápis são produzidos anualmente em todo o mundo?\n(A) Mais de 15 bilhões\n(B) 30 Bilhões", 
                resposta: "a" 
            }, 
            { // Pergunta 3 
                pergunta: "3. Qual é o livro mais vendido de todos os tempos?\n(A) Harry Potter\n(B) Bíblia", 
                resposta: "b" 
            }, 
        ]; 
     
        let score = 0; // Pontuação inicial 

        for (let i = 0; i < perguntas.length; i++) { 
            const response = prompt(perguntas[i].pergunta); 
            if (response.toLowerCase() === perguntas[i].resposta.toLowerCase()) { // Correção da resposta 
                score++; // Contabiliza os pontos 
                alert("Correto!"); 
            } else { 
                alert("Incorreto!"); 
            } 
        } 
        // Exibe os pontos 
        alert(`Você acertou ${score} de ${perguntas.length} perguntas.`); 
        document.getElementById("results").innerHTML = `Caro cliente, você acertou ${score} de ${perguntas.length} perguntas.`; 
    } 