/*Var
// Seção de Declarações das variáveis 
   NOME: CARACTERE
   NUMERO: REAL

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     ESCREVAL("DIGITE O NOME")
     LEIA(NOME)
     ESCREVAL("DIGITE O NUMERO")
     LEIA(NUMERO)
     ESCREVAL(NOME, ":", NUMERO)
     */
    var nome, numero
    nome = prompt("Digite o seu nome:")
    numero = prompt("Digite o numero:")

document.getElementById("PARAGRAFO").innerText = nome + ":" + numero
