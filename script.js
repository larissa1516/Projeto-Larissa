 document.addEventListener('DOMContentLoaded',function(){
    const botaodeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesdeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaodeAcessibilidade.addEventListener('click',function({
    botaodeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesdeAcessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentafontebotao = document.getElementById('aumentar-fonte');
    const diminuifontebotao = document.getElementById('diminuir-fonte');

    let tamanhoatualfonte = 1;

    aumentarfontebotao.addEventListener('click',function(){
        tamanhoatualfonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualfonte}rem`;
   
    });

    diminuifontebotao.addEventListener('click', function(){
        tamanhoatualfonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualfonte}rem`;

    });


 });