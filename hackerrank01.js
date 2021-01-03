var numero, result
    numero = [1, 2, 3];
    result = 0;

function AcaoBotao(params) {
    
    for(var i = 0; i < numero.length; i++){
        result = result + numero[i];
    }
    document.getElementById("PARAGRAFO").innerText = result;
}