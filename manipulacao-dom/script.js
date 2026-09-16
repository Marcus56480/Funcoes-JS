//* querySelectorAll pega todos os elementos do id/classe/tag e etc
const elementos = document.querySelectorAll(".texto");

console.log(elementos);

//percorrendo elementos e pegando cada elemento P
elementos.forEach(elemento => console.log(elemento))

//Percorrendo a lista e pegando o texto (.innerText)
elementos.forEach(elemento => console.log(elemento.innerText))

//Alterando textos 
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
    // elemento.textContentxt = "Alterado"; -> Também pode ser usado porém mantem a formatação do texto
})

//innerHTML - Trocar as Tags
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>Item</h2>"
})

elementos.forEach(elemento => {
    elemento.style.color = "#0000FF"
})

//*EVENTOS COM JS
// O que são eventos ? Interações do usuário
// const botao = document.getElementById("btn");

// botao.addEventListener("click", ()=> {
//     alert("Você clicou no botão!")
// });

// EVENTO DE DIGITAÇÃO (input/ keyup)

/* 
    evento input -> dispara sempre que digita, em tempo real
    keyup -> Dispara somente quando se solta tecla
*/

//Input
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado")

// // campo.addEventListener("input", () => {
// //     // value -> o que está sendo digitado dentro do campo
// //     resultado.innerText = campo.value;
// // })


// //Keyup
// campo.addEventListener("keyup", () => {
//     // value -> o que está sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

// EVENTO DE MOUSE
// const elemento = document.getElementById("troca-cor");
// const botao = document.getElementById("btn");

// //mouseover -> evento que dispara quando o mouse passar por cima
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// })

// //mouseout -> quando o mouse sai
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "#0000ffff"
// }) 

// mousemove
// pegar a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`);
// })

// EVENTO DE FORMULÁRIO (submit)

// const form = document.querySelector("form");

// // Comportamento padrão do formulário é recarregar a pagina
// form.addEventListener("submit", (e) => {
//     //Impede o comportamento padrão do formulário
//     e.preventDefault();

//     // pego a informação digitada no input com o .value
//     const nome = document.getElementById("nome").value;
//     console.log(`Nome: ${nome}`);
// })

// Criando elementos na página

// const novoElemento = document.createElement("p"); // Cria elemento <p> 
// novoElemento.innerText = "Elemento novo criado"; // Cria um texto no elemento

// const form = document.getElementById("form");

// form.appendChild(novoElemento); // Estamos adicionando um elemento filho (p) dentro do pai (form);

// const botao = document.createElement("button");
// botao.innerText = "excluir elemento";
// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

//     // Apagando direto do pai 
//     //form.replaceChild(novoElemento)
// })

// Adicionando elementos em uma lista, a partir de um input
const input = document.getElementById("input"); //input
const botao = document.getElementById("add"); // button
const lista = document.getElementById("lista"); // ul

botao.addEventListener("click", () => {
    const valorDigitado = input.value; // Pega o valor digitado da caixinha/input

    const li = document.createElement("li");
    li.innerText = valorDigitado;

    lista.appendChild(li);

    input.value = ""; 
})