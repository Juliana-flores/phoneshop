//Função para fazer o efeito das letras
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=> {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });

}
//Função para fazer o favorito ficar com cor
const titulo = document.getElementById('corre');
typeWrite(titulo);

function someFunction (event) {
    const element = event.target;
    const className = element.className;
    
    if (className.includes('fa-heart') && !className.includes('active')) {
      element.classList.add('active')
    } else if (className.includes('fa-heart') && className.includes('active')) {
      element.classList.remove('active')
    }
  }
  
  window.addEventListener('click', someFunction, false);