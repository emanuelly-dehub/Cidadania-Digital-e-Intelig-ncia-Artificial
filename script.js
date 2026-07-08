// Aguarda a árvore do HTML carregar por completo. Isso blinda o site contra travamentos.
document.addEventListener('DOMContentLoaded', () => {
    
    const btnTema = document.getElementById('toggle-dark-mode');
    const formQuiz = document.getElementById('quiz-form');
    const containerResultado = document.getElementById('quiz-resultado');

    // 1. Alternador de Tema (Modo Escuro) sem erros na consola
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

    // 2. Validador estável para o formulário do Quiz
    if (formQuiz && containerResultado) {
        formQuiz.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Bloqueia o comportamento de recarregar a tela em branco

            const dados = new FormData(formQuiz);
            const respostaUsuario = dados.get('resposta');

            // Reseta estilos antigos antes de injetar os novos
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

            // Altera dinamicamente o DOM sem quebras
            containerResultado.textContent = mensagemInfo;
            containerResultado.classList.add(classeEstilo);
            containerResultado.classList.remove('hidden');
        });
    }
});
