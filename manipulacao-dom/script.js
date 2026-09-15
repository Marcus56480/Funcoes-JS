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
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado")

// campo.addEventListener("input", () => {
//     // value -> o que está sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })


//Keyup
campo.addEventListener("keyup", () => {
    // value -> o que está sendo digitado dentro do campo
    resultado.innerText = campo.value;
})



