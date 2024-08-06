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

frutas_exoticas.forEach((fruta) =>{
    
    let itemDeLista = document.createElement('li');
    itemDeLista.textContent = fruta;

    lista.appendChild(itemDeLista);
});






