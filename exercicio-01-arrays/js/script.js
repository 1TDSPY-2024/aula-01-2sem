const lista = document.querySelector('#lista');

document.querySelector('#btnAdd').addEventListener('click', () => {
    lista.innerHTML = '';
    let item = document.createElement('li');
    item.textContent = document.querySelector('#idNome').value;
    
    lista.appendChild(item);

    console.log(lista);
})

