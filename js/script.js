// Declarar um array de frutas brasileiras

frutas_exoticas = ["Açai", "Guarana", "Cupuaçu", "Jambo", "Jaca"]

// Visualizar o conteudo do array console.log e table.log

console.log(frutas_exoticas)
console.table(frutas_exoticas)

// Acessando os elementos do array atraves do indice 

console.log(frutas_exoticas[4])
console.log("=============================LOOP FOR==========================================================================")

//Percorrendo o array com os loops
//for

for (let i = 0; i < frutas_exoticas.length; i++){
    console.log(frutas_exoticas[i])
} 

console.log("=============================LOOP FOR OF==========================================================================")
// for of 

for(let fruta of frutas_exoticas){
    console.log(fruta);
}

console.log("=============================LOOP FOR IN==========================================================================")

// for in

for(let i in frutas_exoticas){
    console.log(i, frutas_exoticas[i]);
}

console.log("=============================FOR EACH==========================================================")
frutas_exoticas.forEach((fruta, indice, frutas_exoticas) =>{
    console.log(indice, frutas_exoticas[indice]);
});

/*
array.forEach( function (itemDoArray,indiceDoArray,oProprioArray){
        console.log(itemDoArray,indiceDoArray,oProprioArray);
    });
*/

// Recuperando a lista ul que está no html o id é lista

let lista = document.getElementById("lista");

// Criando um elemento li e adicionando texto


frutas_exoticas.forEach((fruta) => {
    let itemDeLista = document.createElement("li");
    itemDeLista.textContent = fruta;
    lista.appendChild(itemDeLista);// Adicionando o item ao elemento ul
});

//Função da redenrização da lista de frutas
function renderizaLista(){
    lista.innerHTML = "";
    frutas_exoticas.forEach((fruta) => {
        let itemDeLista = document.createElement("li");
        itemDeLista.textContent = fruta;
        lista.appendChild(itemDeLista);// Adicionando o item ao elemento ul
    });
}

//================================================================

//Adicionar item no Array com push 

document.getElementById("btnAdd").addEventListener("click", () => {
    let input = document.getElementById("idFruta").value;
    frutas_exoticas.push(input); //adiciona item ao final do array
    //frutas_exoticas.unshift(input); adiciona item ao inicio do array
    renderizaLista();
})


//===========================================POP E SHIFT

document.getElementById("btnRemover").addEventListener("click", () => {

    frutas_exoticas.pop();///remove item do final do array
    // frutas.shift(); //remove item do início do array
    renderizaLista();
})

 //=====================================SORT() e REVERSE()
 document.getElementById('btnSort').addEventListener('click',()=>{
    frutas_exoticas.sort();
    renderizaLista();
 });
 document.getElementById('btnReverse').addEventListener('click',()=>{
    frutas_exoticas.reverse();
    renderizaLista();
});


//============================================INDEXOF e SPLICE

document.getElementById('btnPesquisa').addEventListener('click',()=>{
    let valorDigitadoNoCampo = document.getElementById('idFruta').value;

    console.log(frutas_exoticas.indexOf("Jaca"));

 });


function deletaFruta(){
    let input = document.getElementById('idFruta').value;
    let index = frutas_exoticas.indexOf(input);
    if(index > -1){
        frutas_exoticas.splice(index, 1);
    }
    renderizaLista();
}


document.getElementById("btnDelete").addEventListener("click", deletaFruta)




renderizaLista();