const input = require("prompt-sync")();

// 1 - Escreva com suas palavras para que serve o comando IF.

// O comando IF, serve para numa lógica de programação ser executado SE a condição proposta for verdadeira, SENÃO executa outra condição.

// 2 - Faça um programa que peça um nome de usuário e verifique SE o usuario digitado é 'Admin'. Caso seja printe 'Bem vindo', caso contrário printe 'Usuário não encontrado'.

var usuario = String(input("Digite seu nome de usuário: "));

if (usuario == "Admin") {
  console.log("Bem vindo");
} else {
  console.log("Usuário não encontrado");
}

console.log("----------------------------------------------");

// 3 - Escreva com suas palavras para que serve o comando While e de um exemplo prático de sua usabilidade para resolução de problemas lógicos.

// O comando WHILE, serve para criar loops ou ciclos, onde os blocos de códigos são repetidos enquanto a condição especificada continuar sendo avaliada como verdadeira.
// Exemplo: Loop que conte de 0 a 10, o loop só vai parar quando a variável for maior que 10(ou seja quando a condição não for verdadeira mais).

// 4 - Faça um loop usando while ou for que conte de 0 a 10.

var contador:number = -1;

while (contador < 10) {
    contador++;
  console.log(contador);
}

console.log("----------------------------------------------");

// 5 - Faça um loop que conte de 0 até N, sendo que N é um numero que o usuário escolhe.

var numero:number = -1;
var numeroescolha = Number(input("Digite um número: "));

while (numero < numeroescolha) {
  numero++;
  console.log(numero)
}

console.log("----------------------------------------------");

// 6 - Faça um loop que conte de 100 até 1.

var contador:number = 101;

while (contador > 1) {
    contador = contador - 1;
  console.log(contador);
}

console.log("----------------------------------------------");

// 7 - Faça um loop que some todos os numeros de 1 até 100.

var contador:number = 0;
var resultado: number = 0;

while (contador <= 100) {
  resultado = resultado + contador;
  contador++;
}

console.log(resultado);

console.log("----------------------------------------------");

// 8 - Faça um loop que some todos os numeros PARES de 1 até 100.

var contador: number = 0;
var resultado: number = 0;

while (contador <= 100) {
  if (contador % 2 == 0) {
    resultado = resultado + contador;
  }
  contador++;
}

console.log(resultado);

console.log("----------------------------------------------");

// 9 - Faça um loop que printe apenas os numeros que são divisíveis por 3 e 5.

var contador:number = 0;

while (contador <= 100) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(contador);
    }
    contador++;
}

console.log("----------------------------------------------");

// 10 - Explique com suas palavras o que é uma matriz.

// Matriz é uma maneira eficiente de organizar dados em forma de tabela, facilitando a manipulação.

// 11 - Faça uma matriz manualmente 4 x 4 com numeros aleatorios a sua escolha.

const matriz: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// 12 - Acesse o 2° item da 1° linha da matriz.

console.log(matriz[0][1]);

console.log("----------------------------------------------");

// 13 - Acesse o 3° item da 4° linha da matriz.

console.log(matriz[3][2]);

console.log("----------------------------------------------");

// 14 - Faça um loop FOR que leia as linhas da matriz.

for (var i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

console.log("----------------------------------------------");

// 15 - Faça um loop FOR dentro de um loop FOR para ler irem por item de uma matriz.

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

console.log("----------------------------------------------");

// 16 - Escreva com suas palavras o que é um função.

// A função recebe alguns parâmetros e ela é um bloco de código que pode ser executado muitas vezes.

// 17 - Faça uma função que printe 'Ola mundo' e chame ela.

function mundo() {
    console.log("Ola mundo");
}
mundo();

console.log("----------------------------------------------");

// 18 - Faça uma função que receba um texto como parametro e mostre o print 'O texto de parametro é: ' e concatene com o numero.

function parametro(texto: string) {
    return ("O texto de parametro é: " + texto);
}
console.log(parametro("É o Pires"));

console.log("----------------------------------------------");

// 19 - Faça uma função que receba como parametro o texto '10,58' e que ele retorne o número 10.58.

function mundo2(parametro: string): number {
    return Number(parametro.replace(",", "."));
}
console.log(mundo2("10,58"));

console.log("----------------------------------------------");