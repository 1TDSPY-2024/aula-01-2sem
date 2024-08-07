let nomes = [];
const lista = document.querySelector('#lista');

document.querySelector('#btnAdd').addEventListener('click', () => {
    let inputCampo = document.querySelector("#idNome").value;
    nomes.push(inputCampo);
    exibeLista();
})

document.querySelector('#btnOrdenar').addEventListener('click', () => {
    nomes.sort();
    exibeLista();
})

document.querySelector('#btnReverter').addEventListener('click', () => {
    nomes.reverse();
    exibeLista();
})

document.querySelector('#btnRemover').addEventListener('click', () => {
    let inputCampo = document.querySelector('#idNome').value;
    let indiceNaLista = nomes.indexOf(inputCampo);

    if(indiceNaLista != -1){
        nomes.splice(indiceNaLista, 1);
    }

    exibeLista();
})

function exibeLista(){
    lista.innerHTML = ''; // zerando a lista
    nomes.forEach((item) => {
        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = item;
        lista.appendChild(itemDeLista);
    });
}