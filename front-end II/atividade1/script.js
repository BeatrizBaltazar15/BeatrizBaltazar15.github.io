const itensMenu = [
{nome: 'Início',url: 'index.html'},
{nome: 'Sobre',url: 'index.html'},
{nome: 'Contato',url: 'index.html'},
];
function criarMenu() {
    const body = document.querySelector('body');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const header= document.createElement('header');
    nav.appendChild(ul);
    header.appendChild(nav);
    body.appendChild(header);
}

function adicionarLi() {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href',  item.url);
        a.style.textDecoration = 'none';
        //a.style.color ='#fff';
        a.style.textAlign = 'center';
        a.textContent = item.nome.toUpperCase();
        a.style.fontFamily= 'Arial';
        a.style.fontSize= ''
        li.appendChild(a);
        ul.appendChild(li);

    })
}


criarMenu()
adicionarLi()