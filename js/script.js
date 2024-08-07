// Declarar um array de frutas brasileiras exóticas
let frutas = ["Açaí", "Guarana", "Cupuaçu", "Jambo", "Jaca"];

//Visualizar o conteúdo do array com console.log e table.
console.log(frutas);
console.table(frutas);

//Acessando os elementos do array através do índice
console.log(frutas[0]);
console.log(frutas[1]);
console.log('=========================LOOP FOR==========================\n')

//Percorrendo o array de frutas com os loops;
// for - incrementação acontece só no final do loop (pós-incremento)
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log('=========================LOOP FOR OF==========================\n')
// for of
for (let fruta of frutas){
    console.log(fruta);
}

console.log('=========================LOOP FOR IN==========================\n')
// For in - retorna o índice no array
for (let indice in frutas){
    console.log(indice, frutas[indice]);
}

console.log('=========================LOOP FOR EACH==========================\n')
// For each
frutas.forEach((fruta, indice, frutas) =>{
    console.log(frutas[indice]);
    console.log(indice, "-", fruta);
});

/* 
    array.forEach( function (itemDoArray, indiceDoArray, oProprioArray) {
        console.log(itemDoArray, indiceDoArray, oProprioArray);
    });

*/

//Recuperando a lista ul que está no HTML o id é lista
let lista = document.getElementById('lista');


//Função de renderização da lista de frutas - O único trabalho dela é mostrar a lista
function renderizaLista(){
    lista.innerHTML = '';
    frutas.forEach((fruta) =>{
        //Criando um elemento li e adicionando o texto
        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = fruta;
        //Adicionando o item ao elemento ul
        lista.appendChild(itemDeLista);
    });
}

//=================================================== PUSH() E UNSHIFT()

document.getElementById('btnAdd').addEventListener('click', () =>{
    let valorDigitadoNoCampo = document.getElementById('idFruta').value;
    // Adicionando o valor ao final do array
    // frutas.push(valorDigitadoNoCampo);
    // Adicionando o valor ao início do array
    frutas.unshift(valorDigitadoNoCampo);
    renderizaLista();
})

//  ==================================================== POP() E SHIFT()
document.getElementById('btnRemove').addEventListener('click', () =>{
    // Remove item do inicio do array
    // frutas.shift();
    // Remove item do final do array
    frutas.pop();
    renderizaLista();
})


// ========================================= SORT() E REVERSE()
document.getElementById('btnSort').addEventListener('click', () => {
    frutas.sort();
    renderizaLista();
})

document.getElementById('btnReverse').addEventListener('click', () => {
    frutas.reverse();
    renderizaLista();
})

// =========================================== INDEXOF() e SPLICE()
document.getElementById('btnPesquisa').addEventListener('click', () => {
    let valorDigitadoNoCampo = document.getElementById('idFruta').value;

    // Index da primeira ocorrência de "a" no input
    console.log(frutas.indexOf("jaca"));
})

document.getElementById('btnDelete').addEventListener('click', deletaFruta)

function deletaFruta(){
    let valorDigitadoNoCampo = document.getElementById('idFruta').value;
    let indice = frutas.indexOf(valorDigitadoNoCampo);
    if(indice != -1){
        frutas.splice(indice, 1);
    }
    renderizaLista();
}


renderizaLista();