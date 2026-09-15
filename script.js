// // // FUNÇÔES NATIVAS JS

// //*Função Map -> Percorre uma lista e cria uma nova lista com base na condição
// let numeros1 = [1,2,3,4];

// let numerosDobrados = numeros1.map(function(num) {
//     return num * 2;
// })

// console.log(numerosDobrados)

// //Outro Modo -- Arrow Function com retorno implicito
// // let numerosDobradosArrow = numeros.map(num => num * 4);

// /* 
//     Quando usar Return ?
//     Quando a função precisa ter mais de uma linha
//     numeros.map(num => {
//      let resultado = num * 2;
//      return resultado;
// })
// */ 

// //* FUNÇÂO FILTER

// //? Filtra elementos com base em uma condição
// let numeros2 = [5, 10, 15, 20]

// // num = palavra auxiliar
// let maioresQueDez = numeros2.filter(num => num > 10)
// console.log(maioresQueDez)

// // * FUNÇÃO REDUCE
// //? Reduz os valores de um Array para um único valor
// let numeros3 = [1,2,3,4];

// /// Acumulador Inicia em 0 e soma com o auxiliar até o último valor do array
// /// Variavel auxiliar é o num    
// let soma = numeros3.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
// console.log(soma);

// //* FUNÇÃO FIND
// //? Retorna o primeiro elemento que atende a condição 

// let produtos = [
//     {id: 1, nome: "teclado", preço: 50}, //Produto
//     {id: 2, nome: "mouse", preço: 30},
//     {id: 2, nome: "caderno", preço: 30},
// ]
 
// let item = produtos.find(produto => produto.id === 2);  // Find
// console.log(item)

// let itemFiltrado = produtos.filter(produto => produto.id === 2); // Filter
// console.log("Filter: " , itemFiltrado);

// /* 
//     Diferença entre find e filter 
//     find -> retorna somente o primeiro elemento que atende a condição 
//     filter -> Retorna todos os elementos que atendam as condições 
// */

// // * FUNÇÃO SPLIT
// //? Divide a string em partes transformando em um array

// let frase = "Neymar no santos";

// // Com espaço separa as palavras pelo espaço
// let palavras = frase.split(" ");
// console.log(palavras);

// // Sem espaço , separa todas as letras dentro do array
// let palavras2 = frase.split("");

// //* FUNÇÃO TRIM   
// //? trim remove espaços no inicio e no final de uma string

// let nome = "    Neymar     ";
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

// //* FUNÇÃO INCLUDES
// //? verifica se existe um valor dentro de uma lista e retorna um booleano (true ou false)

// let frutas1 = ["maça", "banana"];

// let frutasInclude = frutas1.includes("banana");
// console.log(frutasInclude); true

// //* FUNÇÃO 
// // toLowerCase -> transforma texto em minusculo
// // toUpperCase -> transforma texto em maiusculo
// let nome1 = "NEYMÁ";
// let cargo = "jogado";

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

// //* FUNÇÃO FOR EACH
// let nomes = ["neymar", "cebolinha", "gabigol", "coutinho"];

// nomes.forEach(nome => console.log(`seu nome é: ${nome}`))

// //* FUNÇÃO SOME
// //? Verifica se pelo menos um item atende a condição - retorna apenas booleano
// let numeros4 = [1, 2, 3, 4];

// let temPar = numeros4.some(num => num % 2 === 0);
// console.log(temPar);

// //* FUNÇÃO EVERY
// //? Verifica se todos os itens atenden a condição

// let todosPares = numeros4.every(num => num % 2 === 0);
// console.log(todosPares);

// // * * FUNÇÃO SORT
// //? ordena os elementos do array

// let numeros5 = [3, 10, 5, 2, 4]
// let letras = ["c", "d", "x", "a", "h"]

// //Para letras 
// letras.sort();
// console.log(letras)

// //Para Números
// numeros5.sort((a,b) => a - b);
// console.log(numeros5);

// //* FUNÇÃO REVERSE
// let numeros6 = [1, 2, 3, 4]

// numeros6.reverse();
// console.log(numeros6)

// //* FUNÇÃO JOIN
// //? Junta os elementos de um array em uma string
// let palavras3 = ["Neymar", "no", "Santos"]

// let frase3 = palavras.join(" ");
// console.log(frase)

// //* FUNÇÕES PUSH, POP, SHIFT E UNSHIFT
// let lista = ["A", "B"];

// //? push -> Adiciona elementos no final do array
// lista.push("C");
// console.log(lista)

// //? pop -> Remove elementos no final da lista
// lista.pop();
// console.log(lista)

// //? shift -> Remove do inicio do array
// lista.shift();
// console.log(lista);

// //? Unshift -> Adiciona elemento no inicio do array
// lista.unshift("A");
// console.log(lista);

// //* FUNÇÃO SLICE
// //? Cria uma cópia de uma parte da lista

// /* 
//     array.slice(inicial, final)

//     inicial -> onde começa
//     final -> onde termina porém não inclui (posição/indice/index) final
// */

// let numeros7 = [1, 2, 3, 4]

// let parte = numeros7.slice(1,3) // 1 e 3 são as posições do array
// console.log(parte); // [2,3]

// //* FUNÇÃO SPLICE
// //? remove ou adiociona elementos em QUALQUER POSIÇÃO 

// /* 
//     array.splice(index, count, item1, .... itemX);

//     index -> Índice (posição do elemento no array)
//     count -> Numero de itens a serem removidos (pode ser 0)
//     item1, ..., itemX -> Itens a serem adicionados
// */

// let numeros8 = [1, 2, 3, 4];

// // Removendo elementos sem adicionar
// numeros8.splice(1, 1)
// console.log(numeros8);

// let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

// // Removendo elementos e adicionando mais 2
// // frutas.splice(0, 3, "Limão", "Kiwi");
// // console.log(frutas);


// frutas.splice(2, 0, "Limão", "Kiwi");
// console.log(frutas);

// //* FUNÇÃO REPLACE
// //? Substitui uma parte da String
// let texto = "Olá Mundo";
// let novoTexto = texto.replace("Mundo", "Cliente");
// console.log(novoTexto)

// //* NOSSAS FUNÇÕES

// function exibirMensagem() {
//     console.log("Bem Vindo(a)!")
// }
// // executando a função criada
// exibirMensagem();

// // função com parametros
// function cumprimentar(nome) {
//     console.log(`Olá. ${nome}`)
// }

// cumprimentar("Neymar");
// cumprimentar("Gabigol");

// // função com mais de um parâmetro
// const somar = (numero9, numero10) => numero9 + numero10;

// console.log(somar(1, 2))

// function somarNovo(numero9, numero10) {
//     console.log(numero9 + numero10);

//     let resultado2 = numero9 + numero10;
//     return resultado2;
// }

// //* FUNÇÃO PROMPT
// //? Recebe/solicita informação do Usuário

// let nome3 = prompt("Digite seu Nome: ");
// console.log(nome3);
// alert(nome3);

// // recebendo um número e convertendo
// let idade = Number(prompt("Digite sua Idade: "));   
// console.log(idade);

// // parseInt() -> Converte valor para um número inteiro
// idade = parseInt(prompt("Digite sua Idade: "));
// console.log(idade);
// // parseFloat() -> Converte valor para um número decimal/ponto flutuante
// idade = parseFloat(prompt("Digite sua Idade: "));
// console.log(idade);

// // O que veremos nas proximas aulas
// //Spoiler 

// let textoP = document.getElementById("texto");

// let saudacao = prompt("Digite a saudação: ");

// if (saudacao == "Bom dia") 
//     {
//         textoP.textContent = saudacao;
//     }

// else 
//     {
//         textoP.textContent = "SEGUNDOU!!!!!!!!"
//     }


