const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
    mensagem.textContent = 'Olá, seja muito bem vindo!';
});