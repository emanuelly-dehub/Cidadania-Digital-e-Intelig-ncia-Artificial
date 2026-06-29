// Aguarda a árvore do HTML carregar completamente para não dar erro de leitura
document.addEventListener('DOMContentLoaded', () => {
    
    const btnTema = document.getElementById('toggle-dark-mode');
    const formQuiz = document.getElementById('quiz-form');
    const containerResultado = document.getElementById('quiz-resultado');

    // 1. Modo Escuro
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.body.removeAttribute('data-theme');
            } else {
                document.body.setAttribute('data-theme', 'dark');
            }
        });
    }

    // 2. Validador do Quiz
    if (formQuiz) {
        formQuiz.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const dados = new FormData(formQuiz);
            const respostaUsuario = dados.get('resposta');

            // Limpa mensagens anteriores
            containerResultado.className = 'hidden';

            let mensagemInfo = "";
            let classeEstilo = "";

            if (respostaUsuario === 'correta') {
                mensagemInfo = "🎉 Resposta Correta! Interromper o compartilhamento impulsivo e validar em portais de jornalismo sérios impede que a desinformação por IA se espalhe.";
                classeEstilo = "resultado-sucesso";
            } else {
                mensagemInfo = "❌ Alerta de Risco! Compartilhar conteúdos alarmistas sem checar ajuda a espalhar mentiras estruturadas, mesmo que sua intenção inicial seja boa.";
                classeEstilo = "resultado-erro";
            }

            // Mostra o resultado na tela de forma dinâmica
            containerResultado.textContent = mensagemInfo;
            containerResultado.classList.add(classeEstilo);
            containerResultado.classList.remove('hidden');
        });
    }
});
