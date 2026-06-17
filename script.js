document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção Limpa de Elementos
    const btnTema = document.getElementById('toggle-dark-mode');
    const formQuiz = document.getElementById('quiz-form');
    const containerResultado = document.getElementById('quiz-resultado');

    // 1. Alternador de Acessibilidade (Tema Escuro)
    btnTema.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    });

    // 2. Validador do Quiz com Variáveis de Processamento
    formQuiz.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const dados = new FormData(formQuiz);
        const respostaUsuario = dados.get('resposta');

        // Reset de classes utilitárias para evitar conflitos de cliques seguidos
        containerResultado.className = 'hidden';

        let mensagemFeedback = "";
        let classeEstilo = "";

        // Processamento lógico antes da exibição
        if (respostaUsuario === 'correta') {
            mensagemInfo = "🎉 Resposta Correta! Interromper o compartilhamento impulsivo e validar em portais de jornalismo sérios impede que a desinformação por IA se espalhe.";
            classeEstilo = "resultado-sucesso";
        } else {
            mensagemInfo = "❌ Alerta de Risco! Compartilhar conteúdos alarmistas sem checar ajuda a espalhar mentiras estruturadas, mesmo que sua intenção inicial seja boa.";
            classeEstilo = "resultado-erro";
        }

        // Atualização e manipulação limpa do DOM
        containerResultado.textContent = mensagemInfo;
        containerResultado.classList.add(classeEstilo);
        containerResultado.classList.remove('hidden');
    });
});
