//* Exercicios de repetição

//? Contagem de 1 a 10:
// for (i = 1; i <= 10; i++) {
//     console.log(i)
// }

//? Tabuada de um número:
// let tabuada = prompt("Digite um Numero: ");

// for(i = 1; i<=10; i++)
// {
//     console.log(tabuada * i);
// }

//? Soma dos primeiros N números naturais:
// let num3 = parseInt(prompt("Digite um Número para somar: "))
// let soma = 0

// for (i = 1; i <=num3; i++)
// {
//     soma = soma + i
// }
// console.log(soma)

//* Nível Intermediario 

//? Exibir os números pares de 1 a 50:
// for(i = 0; i < 50; i++)
// {
//     if (i % 2 == 0)
//     {
//         console.log(i)
//     }
// }

//? Jogo de adivinhação:
// let numAleatorio = 8
// let numUsuario = prompt("Adivinhe o Numero: ")


// while (numUsuario != numAleatorio)
//     {
//         let novoValor = prompt("Numero Errado digite Novamente: ")
//         numUsuario = novoValor;
//     }

//       if (numUsuario == numAleatorio)
//     {
//         alert("Parábens! Numero correto!")
//     }

//? Contagem regressiva:
// let contagem = Number(prompt("Digite um número: "))

// while (contagem > 1)
// {
//     contagem--
//     console.log(contagem)
// }

//? Validação de senha
// let senha1 = 1234
// let senhaUser = prompt("Digite sua senha: ")

// while (senhaUser != senha1)
// {
//     let novaSenha = prompt("Senha incorreta, digite novamente: ");
//     senhaUser = novaSenha;
// }

// if (senhaUser == senha1)
// {
//     alert("Senha correta, Bem Vindo(a)")
// }

//? Soma até parar
let somaUser = Number(prompt("Digite um número para somar(Digite 0 para parar): "));
let ultimaSoma = 0;

while (somaUser != 0)
{
    ultimaSoma += somaUser;
    somaUser = Number(prompt("Digite um número para somar(Digite 0 para parar): "));
}
console.log(ultimaSoma);


//* Execicios de Condicional

//* Nivel Basico

//? Verificar maioridade:
// let idade1 = prompt("Digite sua idade: ");

// if (idade < 18)
// {
//     console.log("Menor de Idade");
// }

// else 
// {
//     console.log("Maior de Idade");
// }

//? Verificar se um número é positivo ou negativo:
// let num = prompt("Digite um numero")

// if (num < 0)
// {
//     console.log("Número Negativo")
// }

// else 
// {
//     console.log("Numero Positivo")
// }

//? Aprovação em uma prova:
// let nota1 = prompt("Digite sua Nota: ")

// if (nota >= 60) 
// {
//     console.log("Aprovado")
// }

// else 
// {
//     console.log("Reprovado")
// }

//? Verificar se um número é positivo, negativo ou zero:
// let num2 = prompt("Digite um Numero: ")

// if (num2 > 0)
// {
//     console.log("Positivo")
// }

// else if (num2 == 0)
// {
//     console.log("Zero")
// }

// else 
// {
//     console.log("Negativo")
// }

//? Classificação de idade:
// let classificacao = prompt("Digite sua Idade: ");

// if (classificacao < 12)
// {
//     console.log("Criança")
// }

// else if (classificacao >=13 && classificacao <= 17)
// {
//     console.log("Adolescente")
// }

// else 
// {
//     console.log("Adulto")
// }

//? Verificar se um número é par ou ímpar:
// let numPar = prompt("Digite um Número: ")

// if (numPar % 2 == 0)
// {
//     console.log(`${numPar} é Par!`)
// }

// else 
// {
//     console.log(`${numPar} é Impar!`)
// }

//* Nível Intermediario

//? Calculadora simples:
// let numero1 = parseInt(prompt("Digite um Numero: "))
// let numero2 = parseInt(prompt("Digite outro Numero: "))
// let operacao = prompt("Digite a operação desejada(+, -, /, *) ")

// if (operacao == "+")
// {
//     console.log(numero1 + numero2)
// }

// else if (operacao == "-")
// {
//     console.log(numero1 - numero2)
// }

// else if (operacao == "/")
// {
//     console.log(numero1 / numero2)
// }

// else if (operacao == "*")
// {
//     console.log(numero1 * numero2)
// }

//? Maior entre três números:
// let numUser1 = prompt("Insira um número: ")
// let numUser2 = prompt("Insira um segundo número: ")
// let numUser3 = prompt("Insira um terceiro número: ")

// if (numUser1 > numUser2 && numUser1 > numUser3)
// {
//     console.log(`${numUser1} é o maior numero!`)
// }

// if (numUser2 > numUser1 && numUser2 > numUser3)
// {
//     console.log(`${numUser2} é o maior numero!`)
// }

// if (numUser3 > numUser1 && numUser3 > numUser2)
// {
//     console.log(`${numUser3} é o maior numero!`)
// }

//? Desconto em compras:
// let valorProduto = 110
// let valorDesconto = 0

// if (valorProduto > 100)
// {
//     valorDesconto = valorProduto * 0.1
//     console.log(valorProduto - valorDesconto)
// }

// else 
// {
//     console.log(valorProduto);
// }

//? Sistema de login simples:
// let login = prompt("Digite seu login: ");

// if (login == "Admin")
// {
//     let senha = prompt("Digite sua senha: ");

//     if(senha == 1234)
//     {
//         alert("Login realizado com sucesso")
//     }

//     else 
//     {
//         alert("Senha Incorreta!")
//     }
// }

// else 
// {
//     alert("Usuário Inválido!")
// }

//* Nivel Avançado 

//? Frete de pedido
// let valorfrete = Number(prompt("Digite o valor do seu produto: "))

// if (valorfrete >= 100)
// {
//     console.log("Frete Grátis")
// }

// else if (valorfrete >= 50 && valorfrete < 100)
// {
//     console.log("O frete para este produto será de 10 Reais")
// }

// else {
//     console.log("O frete para este produto será de 20 Reais") 
// }

//? Acesso por idade e convite
// let idade = Number(prompt("Digite sua idade: "));
// let convite = prompt("Você tem possui o convite ?");

// if (convite == "sim") {
//     convite = true;
// }

// else {
//     convite = false;
// }

// if (idade >= 18 && convite)
// {
//     console.log("Pode Entrar!")
// }

// else
// {
//     console.log("Barrado");
// }

//? Conversão de notas para conceitos:
// let nota = Number(prompt("Digite sua nota: "));

// if (nota >= 90)
// {
//     console.log("Nota A");
// }

// else if (nota >= 80 && nota <= 89)
// {
//     console.log("Nota B");
// }

// else if (nota >= 70 && nota <= 79)
// {
//     console.log("Nota C");
// }

// else if (nota >= 60 && nota <= 69)
// {
//     console.log("Nota D");
// }

// else 
// {
//     console.log("Nota F");
// }

//? Cálculo de IMC:
// let altura = parseFloat(prompt("Digite sua altura: "));
// let peso = parseFloat(prompt("Digite seu peso: "));
// let valorIMC = 0;

// altura = altura * altura;
// valorIMC = peso / altura;

// if (valorIMC >= 40)
// {
//     console.log("Obesidade grave!")
// }

// else if (valorIMC >= 30 && valorIMC <= 39.9)
// {
//    console.log("Obeso!") 
// }

// else if (valorIMC >= 25 && valorIMC <= 29.9)
// {
//    console.log("Acima do Peso!") 
// }

// else if (valorIMC >= 18.6 && valorIMC <= 24.9)
// {
//    console.log("Peso Normal!") 
// }

// else 
// {
//     console.log("Magro!")
// }

//? Verificação de estoque
// let estoque = 8;

// if (estoque >= 10)
// {
//     console.log("Produto Disponível")
// }

// else if (estoque >= 1 && estoque <= 9)
// {
//     console.log("Últimas Unidades")
// }

// else 
// {
//     console.log("Esgotado")
// }
