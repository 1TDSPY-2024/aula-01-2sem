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