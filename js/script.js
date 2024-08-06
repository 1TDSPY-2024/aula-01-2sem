
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
//Criando um elemento li e adicionando o texto
frutas.forEach((fruta)=>{
    let itemDeLista = document.createElement('li');
    itemDeLista.textContent = fruta;
    //Adicionando o item ao elemento ul
    lista.appendChild(itemDeLista);
});


