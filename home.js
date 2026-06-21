// Mensagem de boas-vindas
alert("Bem-vindo à Papelaria!");

// Categorias
const categorias = document.querySelectorAll(".category");

categorias.forEach(function(categoria){

    categoria.addEventListener("click", function(){

        let nome = categoria.querySelector("h3").textContent;

        alert("Você escolheu: " + nome);

    });

});