const titulo = document.querySelector('h1');
titulo.remove(titulo);
//console.log('innerHTML:', titulo.innerHTML )
//console.log('innerText:', titulo.innerText)
//console.log(titulo.innerHTML)
//console.log('textContent:', titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent = 'Meu link';  
ancora.setAttribute('href', 'https://www.ifro.edu.br')                      
ancora.style.fontSize= '30px';
ancora.style.textDecoration = 'none';
ancora.style.color ='#0f0';
ancora.setAttribute('target', '_blank');
body.prepend (ancora);  


