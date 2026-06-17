// Aguarda o carregamento do DOM para evitar erros de execução
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção de elementos do DOM
    const botaoTema = document.getElementById('toggle-dark-mode');
    const formularioQuiz = document.getElementById('quiz-form');
    const painelFeedback = document.getElementById('quiz-feedback');

    // 1. Controle de Acessibilidade: Alternância de Tema (Modo Escuro)
    botaoTema.addEventListener('click', () => {
        const modoAtivo = document.body.getAttribute('data-theme') === 'dark';
        
        if (modoAtivo) {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    });

    // 2. Validação Interativa do Formulário de Conscientização
    formularioQuiz.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o recarregamento padrão da página

        // Captura do dado selecionado pelo usuário
        const dadosFormulario = new FormData(formularioQuiz);
        const respostaSelecionada = dadosFormulario.get('combate');

        // Processamento da resposta utilizando variáveis locais (Rubrica A)
        let mensagemInfo = "";
        let classeEstilo = "";

        if (respostaSelecionada === 'correto') {
            mensagemInfo = "🎉 Excelente! A checagem em fontes confiáveis e a interrupção do ciclo de compartilhamento são as melhores armas contra a desinformação por IA.";
            classeEstilo = "sucesso";
        } else {
            mensagemInfo = "❌ Cuidado! Repassar mídias sem validação prévia ajuda a espalhar mentiras automatizadas, mesmo que sua intenção seja alertar.";
            classeEstilo = "erro";
        }

        // Modificação dinâmica do conteúdo e estilo no DOM
        painelFeedback.textContent = mensagemInfo;
        painelFeedback.className = classeEstilo; // Aplica a estilização de sucesso ou erro
    });
});
