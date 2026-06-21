let quantidade = 0;

const botoes = document.querySelectorAll(".btn-primary");

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        quantidade++;

        alert("Produto adicionado ao carrinho!");

        console.log("Itens adicionados: " + quantidade);

    });

});