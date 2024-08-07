let frutas_exoticas = ["Açai", "Guarana","Cupuaçú", "Jambo", "Jaca"];

console.log(frutas_exoticas)
console.table(frutas_exoticas)

console.log(frutas_exoticas[2])

for(let i = 0; i < frutas_exoticas.length; i++){
    console.log(frutas_exoticas[i]);
}
console.log("------------------------------for of------------------------------");
/*-------------loop for of --------------*/

for(let fruta of frutas_exoticas){
    console.log(fruta);
}
console.log("------------------------------for in-------------------------------");
/*-------------loop for in --------------*/
/*indice retornado nessa funcao sera String */
for(let indice in frutas_exoticas){
    console.log(indice, frutas_exoticas[indice]);
}

console.log("-------------------------------for each-----------------------------");
/*-----------loop for each --------------*/
/*indice retornado nessa funcao sera int */

frutas_exoticas.forEach((fruta,indice,frutas_exoticas) => {
    console.log(frutas_exoticas[indice]);
    console.log(indice, "--", fruta);
})

let lista = document.getElementById('lista');


renderizaLista();
/*------------------- push -----------------*/
function renderizaLista(){
    lista.innerHTML = '';

    frutas_exoticas.forEach((fruta) =>{

        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = fruta;
    
        lista.appendChild(itemDeLista);
    });
    
}

document.getElementById('btnAdd').addEventListener('click',() =>{
    let frutaInserida = document.getElementById('idFruta').value;
    //frutas_exoticas.push(frutaInserida);
    //ou se quiser inserir no inicio
    frutas_exoticas.unshift(frutaInserida);
    renderizaLista();
});

document.getElementById('btnRemove').addEventListener('click', () =>{
    frutas_exoticas.shift();
    // ou se quiser remover o ultimo 
    // frutas_exoticas.pop();
    renderizaLista();
});
document.getElementById('btnOrd').addEventListener('click', () => {
    //organiza a lista em ordem alfabetica
    frutas_exoticas.sort();
    renderizaLista();
});
document.getElementById('btnReverse').addEventListener('click', () => {
    //reverte a ordem da lista
    frutas_exoticas.reverse();
    renderizaLista();
});
/*----------------indexof() e splice()------------------ */

document.getElementById('btnPesquisa').addEventListener('click', () => {
    let frutaInserida = document.getElementById('idFruta').value;
    console.log(frutas_exoticas.indexOf("Jaca"))
   
})
document.getElementById('btnDelete').addEventListener('click', () => {
    deletaFruta();
   
})
function deletaFruta(){
    let frutaInserida = document.getElementById('idFruta').value;
    let indice = frutas.indexOf(frutaInserida);
    if(indice != -1){
        frutas_exoticas.splice(indice,1);
    }
    renderizaLista();
}