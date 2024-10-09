const body = document.querySelector('body');
body.style.backgroundColor = '#000';
const h1 = document.createElement('h1');
h1.textContent = 'Meu título';
h1.style.color = '#fff';
h1.style.textAlign = 'center';
body.prepend(h1)
