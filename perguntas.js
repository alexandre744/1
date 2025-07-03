function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    
    const cartao = document.createElement('article');
    cartao.className = 'cartao';
    
    const conteudo = document.createElement('div');
    conteudo.className = 'cartao__conteudo';
    
    const titulo = document.createElement('h3');
    titulo.textContent = categoria;
    
    const divPergunta = document.createElement('div');
    divPergunta.className = 'cartao__conteudo__pergunta';
    
    const pPergunta = document.createElement('p');
    pPergunta.textContent = pergunta;
    
    const divResposta = document.createElement('div');
    divResposta.className = 'cartao__conteudo__resposta';
    
    const pResposta = document.createElement('p');
    pResposta.textContent = resposta;
    
    divPergunta.appendChild(pPergunta);
    divResposta.appendChild(pResposta);
    
    conteudo.appendChild(titulo);
    conteudo.appendChild(divPergunta);
    conteudo.appendChild(divResposta);
    
    cartao.appendChild(conteudo);
    container.appendChild(cartao);
    
    // Adiciona evento de clique para virar o cartão
    cartao.addEventListener('click', function() {
        this.classList.toggle('virar');
    });
}

// Criando 6 flashcards de matemática
criaCartao(
    'Matemática Básica',
    'Quanto é 7 x 8?',
    '7 x 8 = 56'
);

criaCartao(
    'Álgebra',
    'Qual é a raiz quadrada de 144?',
    'A raiz quadrada de 144 é 12'
);

criaCartao(
    'Geometria',
    'Qual a fórmula da área de um círculo?',
    'A área de um círculo é πr²'
);

criaCartao(
    'Matemática Básica',
    'Quanto é 15% de 200?',
    '15% de 200 é 30'
);

criaCartao(
    'Álgebra',
    'Resolva a equação: 2x + 5 = 17',
    'x = 6 (2*6 + 5 = 17)'
);

criaCartao(
    'Geometria',
    'Quantos graus tem a soma dos ângulos internos de um triângulo?',
    'A soma dos ângulos internos de um triângulo é 180°'
);