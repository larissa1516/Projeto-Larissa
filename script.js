 document.addEventListener('DOMContentLoaded',function(){
    const aumentafontebotao = document.getElementById('aumentar-fonte');
    const diminuifontebotao = document.getElementById('diminuir-fonte');

    let tamanhoatualfonte = 1;

    aumentarfontebotao.addEventListener('click',function(){
        tamanhoatualfonte += 0.1;
        document.body.style.fontSize = `${tamanhoatualfonte}rem`;
   
    });

    diminuifontebotao.addEventListener('click', function(){
        tamanhoatualfonte -= 0.1;
        document.body.style.fontSize = `${tamanhoatualfonte}rem`;

    });


 });