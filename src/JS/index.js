
const botaoAlterarTema = document.getElementById('botao-alterar-tema');
const body = document.querySelector('body');

botaoAlterarTema.addEventListener('click', ()=> {

    body.classList.toggle("modo-escuro");
    const imgAlterarTema = document.querySelector('.imagem-botao');
    
    
    if(imgAlterarTema.getAttribute("src") == "./src/imagens/sun.png"){
         imgAlterarTema.setAttribute('src',"./src/imagens/moon.png");
    
    } else{
        imgAlterarTema.setAttribute('src',"./src/imagens/sun.png");
    }
   

});
