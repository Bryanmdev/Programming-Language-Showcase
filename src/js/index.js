/* O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente
    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 
    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Remove a seleção do botão e personagem anterior, se existirem
        const botaoSelecionadoAnterior = document.querySelector('.botao.selecionado');
        if (botaoSelecionadoAnterior) { // Verifica se encontrou um botão selecionado
            botaoSelecionadoAnterior.classList.remove("selecionado");
        }
        
        const personagemSelecionadoAnterior = document.querySelector(".personagem.selecionado");
        if (personagemSelecionadoAnterior) { // Verifica se encontrou um personagem selecionado
            personagemSelecionadoAnterior.classList.remove('selecionado');
        }

        // Adiciona a seleção ao botão clicado e ao personagem correspondente
        botao.classList.add("selecionado");
        personagens[indice].classList.add('selecionado');
    })
});