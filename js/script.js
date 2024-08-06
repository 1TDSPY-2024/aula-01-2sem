
//Declarar um array de frutas brasileiras exóticas
let frutas = ["Açaí", "Guarana", "Cupuaçú","Jambo", "Jaca"];

//Visualizar o conteúdo do array com console.log e table
console.log(frutas);
console.table(frutas);
//Acessando os elementos do array atravez do índice
console.log(frutas[0]);
console.log(frutas[1]);
console.log('===================================LOOP FOR ==================================');
//Percorrando o array de frutas com os loops
//for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    //...
}

console.log('===================================LOOP FOR OF==================================');
//for of
for (let fruta of frutas) {
    console.log(fruta);
    //...
}

console.log('===================================LOOP FOR in==================================');
//for in
for (let indice in frutas) {
    console.log(indice, frutas);
    //...
}

console.log('===================================LOOP FOR EACH==================================');
//for each
frutas.forEach((fruta,indice,frutas) => {
    console.log(frutas[indice]);
    console.log(indice,"-", fruta);
    //...
});

/*
    array.forEach( function (itemDoArray,indiceDoArray,oProprioArray){
        console.log(itemDoArray,indiceDoArray,oProprioArray);
    });

*/



//Recuperando a lista ul que está no HTML o id é lista:
let lista = document.getElementById('lista');

//Função de renderização da lista de frutas
function renderizaLista(){
    lista.innerHTML = '';
    //Criando um elemento li e adicionando o texto
    frutas.forEach((fruta)=>{
        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = fruta;
        //Adicionando o item ao elemento ul
        lista.appendChild(itemDeLista);
    });
}
//=====================================PUSH() e UNSHIFT()
document.getElementById('btnAdd').addEventListener('click',()=>{
    let valorDigitadoNoCampo = document.getElementById('idFruta').value;
    // frutas.push(valorDigitadoNoCampo); adiciona item ao final do array
    frutas.unshift(valorDigitadoNoCampo); //adiciona item no início do array
    renderizaLista();
});

//=====================================POP() e SHIFT()
document.getElementById('btnRemove').addEventListener('click',()=>{
    //frutas.pop(); remove item do final do array
    frutas.shift(); //remove item do início do array
    renderizaLista();
    });

//=====================================SORT() e REVERSE()
document.getElementById('btnSort').addEventListener('click',()=>{
    frutas.sort();
    renderizaLista();
 });
 document.getElementById('btnReverse').addEventListener('click',()=>{
    frutas.reverse();
    renderizaLista();
    });




renderizaLista();