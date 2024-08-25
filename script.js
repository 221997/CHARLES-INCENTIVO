// script.js
document.addEventListener('DOMContentLoaded', function() {
    const carrinho = document.getElementById('carrinho');
    const esvaziarCarrinho = document.getElementById('esvaziarCarrinho');
    const fecharCarrinho = document.getElementById('fecharCarrinho');
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');

    let carrinhoItens = [];
    let total = 0;
    
    function mostrarCarrinho() {
        carrinho.style.display = 'block';
    }

    function esconderCarrinho() {
        carrinho.style.display = 'none';
    }

    function esvaziarCarrinhoFunc() {
        carrinhoItens = [];
        total = 0;
        atualizarCarrinho();
        esconderCarrinho(); // Esconde o carrinho após esvaziar
    }

    function atualizarCarrinho() {
        itensCarrinho.innerHTML = ''; // Limpa o conteúdo do carrinho
        carrinhoItens.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.nome + ' - R$' + item.preco.toFixed(2);
            itensCarrinho.appendChild(li);
        });
        totalCarrinho.textContent = 'Total: R$' + total.toFixed(2);
    }

    function adicionarAoCarrinho(nome, preco) {
        carrinhoItens.push({ nome, preco });
        total += preco;
        atualizarCarrinho();
        mostrarCarrinho();
    }

    esvaziarCarrinho.addEventListener('click', esvaziarCarrinhoFunc);
    fecharCarrinho.addEventListener('click', esconderCarrinho);

    window.adicionarAoCarrinho = adicionarAoCarrinho;
    window.mostrarCarrinho = mostrarCarrinho;
});
