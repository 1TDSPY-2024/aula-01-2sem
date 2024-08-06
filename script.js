// Declarar um array de frutas brasileiras exóticas
let frutas = ['Açai', 'Guaraná', 'Cupuaçu', 'Jambo', "Jaca"]

console.log(frutas)
console.table(frutas)

// Loop FOR //
for (let i = 0; i < frutas.length; i++) [
    console.log(frutas[i])
]

// Loop FOR OF //
// retorna o elemento do array
for (let fruta of frutas) {
    console.log(fruta);
}

// Loop FOR IN//
// retorna o índice do elemento do array
for (let fruta of frutas) {
    console.log(fruta);

}
// Loop FOR EACH//
frutas.forEach((fruta) => {
    console.log(fruta)
})

let lista = document.querySelector('#lista')
frutas.forEach((fruta) => {
    let li = document.createElement('li')
    li.textContent = fruta
    lista.appendChild(li)
})
