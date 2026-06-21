// Mensagem ao abrir a página
alert("Seu carrinho foi carregado!");

// Seleciona os itens do carrinho
const itens = document.querySelectorAll(".cart-item");

// Mostra a quantidade de itens
console.log("Itens no carrinho: " + itens.length);

// Botão finalizar compra
const finalizar = document.querySelector(".btn-success");

finalizar.addEventListener("click", function() {
    alert("Compra finalizada com sucesso!");
});

// Botão continuar comprando
const continuar = document.querySelector(".btn-primary");

continuar.addEventListener("click", function() {
    alert("Voltando para os produtos!");
});