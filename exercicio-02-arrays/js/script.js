
document.addEventListener('DOMContentLoaded', function () {

    //Lista de elementos manipulados:
    const formulario = document.querySelector("#form-names");
    const inputNome = document.querySelector("#idNome");
    const botaoAdd = document.querySelector("#btnAdd");
    const botaoOrdenar = document.querySelector("#btnOrdenar");
    const botaoReverter = document.querySelector("#btnReverter");
    const botaoDeletar = document.querySelector("#btnDelete");
    const lista = document.querySelector("#lista");

    //Verifica se o array existe ou não

    //Usando localStorage
    // let listaDeNomes = JSON.parse(localStorage.getItem("listaDeNomes")) || [];

    //Usando event loaded
    let arrayDeNomes = [];

    //Função para adicionar um nome na lista:
    function addNome(nome) {

        if (nome !== undefined && nome !== "") {
            arrayDeNomes.push(nome);
            inputNome.value = "";
            renderizarLista();
            console.log("Nome inserido com sucesso na lista!");
        } else {
            console.log("Por favor, insira um nome!");
        }
    }

    //Uma forma bastante eficiente de imprimir os dados é criar uma função para renderizar a lista.
    function renderizarLista() {
        //Zerando a lista não podemos esquecer nunca de guardar os nomes em outro lugar.
        lista.innerHTML = "";
        for (let x = 0; x < arrayDeNomes.length; x++) {
            const liElement = document.createElement("li");
            liElement.textContent = arrayDeNomes[x];
            lista.appendChild(liElement);
        }
    }

    //Função para ordenar a lista:
    function ordenarLista() {
        arrayDeNomes.sort();
        renderizarLista();
    }

    //Função para ordenar a lista:
    function reverterLista() {
        arrayDeNomes.reverse();
        renderizarLista();
    }

    //Função para deletar o nome:
    function deletarNome(nome) {
        let indice = arrayDeNomes.indexOf(nome);
        if (indice != -1) {
            arrayDeNomes.splice(indice, 1);
        }
        renderizarLista();
    }

    //Chamando as funções
    botaoAdd.addEventListener("click", function (e) {
        e.preventDefault();
        addNome(inputNome.value);
    });

    botaoOrdenar.addEventListener("click", function (e) {
        ordenarLista();
    });

    botaoReverter.addEventListener("click", function (e) {
        reverterLista();
    });

    botaoDeletar.addEventListener("click", function (e) {
        deletarNome(inputNome.value);
    });

});