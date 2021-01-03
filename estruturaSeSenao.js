/*Var
// Seção de Declarações das variáveis 
   valor01, valor02, resultado: real
   operacao: caractere
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("A proposta desse programa eh calcular dois valores baseados na operação da sua escolha")

    escreva("Digite o primeiro valor...:")
    leia(valor01)

    escreva("Digite a operacao: + * - /...:")
    leia(operacao)

    escreva("Digite o segundo valor...:")
    leia(valor02)
    se  operacao = "+" entao
         resultado := valor01 + valor02
    senao
           se  operacao = "-" entao
         resultado := valor01 - valor02
         senao
             se  operacao = "*" entao
         resultado := valor01 * valor02
         senao
             se  operacao = "/" entao
         resultado := valor01 / valor02
               fimse
         fimse
    fimse
fimse

escreva("Resultado é:", resultado)
*/

var valor01, valor02, resultado, operacao

function AcaoBotao(params) {
valor01 = prompt("Digite o primeiro valor:")
operacao = prompt("Digite a operacao: + * - /...:")
valor02 = prompt("Digite o primeiro valor:")

if  (operacao == "+"){resultado = parseInt( valor01 ) + parseInt( valor02 )}
else if (operacao == "-"){resultado = parseInt( valor01 ) - parseInt( valor02 )}
else if (operacao == "*"){resultado = parseInt( valor01 ) * parseInt( valor02 )}
else if (operacao == "/"){resultado = parseInt( valor01 ) / parseInt( valor02 )}

document.getElementById("PARAGRAFO").innerText = resultado}