// Seleção de elementos do DOM
const btnTema = document.getElementById('toggle-dark-mode');
const formQuiz = document.getElementById('quiz-form');
const divResultado = document.getElementById('quiz-resultado');

// 1. Funcionalidade de Acessibilidade: Modo Escuro
btnTema.addEventListener('click', () => {
    const temaAtual = document.body.getAttribute('data-theme');
    
    if (temaAtual === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// 2. Funcionalidade do Quiz: Validação e Feedback dinâmico
formQuiz.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que a página recarregue
    
    // Captura a opção selecionada usando FormData
    const dadosForm = new FormData(formQuiz);
    const respostaUsuario = dadosForm.get('pergunta1');
    
    // Processa a informação antes de exibir na tela (Uso de variáveis)
    let mensagemFeedback = "";
    
    if (respostaUsuario === 'correta') {
        mensagemFeedback = "🎉 Correto! Falhas digitais na renderização e movimentos não naturais (como piscar) são ótimos indicadores.";
        divResultado.className = "resultado-sucesso";
    } else {
        mensagemFeedback = "❌ Incorreto. Tente novamente! Lembre-se de observar atentamente os detalhes físicos do rosto.";
        divResultado.className = ""; // Remove estilo de sucesso se errar
    }
    
    // Exibe o resultado manipulando o DOM
    divResultado.textContent = mensagemFeedback;
    divResultado.classList.remove('hidden');
});
