let novoValor = "";
let valorPrevio ="" ;
let operadorMat = "";
let output = "";
let valorMemoria = "";
let decimalClick = false;
let operacaoHistorico;

function insereNum(botaoPressionado){
    if(output){
        novoValor = botaoPressionado;
        output = "";
    }else{
        if(botaoPressionado == '.'){
            if(decimalClick != true){
                novoValor += botaoPressionado;
                decimalClick = true;
            }       
        }else{
            novoValor += botaoPressionado;
        }
    }    
    document.getElementById("resultado").value = novoValor;
}

/*function imprimeHistorico(historico){
    return document.getElementById("historico").value= historico;
}*/

function clear(){ //C = limpa toda a operação que estava sendo feita
    valorPrevio = "";
    novoValor = "";
    operadorMat = "";
    output = "";
    decimalClick = false; 
    document.getElementById("resultado").value = "0";
} 

/*clearMemory() //MC = apaga todos os números salvos na memória fazer uma string?
retrieveMemory() //MR = recupera o último número salvo na memória
addMemory() //M+ = soma o resultado ao último n armazenado
minusMemory() //M- = soma o resultado ao último n armazenado
saveMemory() //MS = salva um novo n na memória
recuperaMemory() //M = exibe todos os números atualmente armazenados na memória
cancelEntry() //CE = cancela o registro mais recente
clear() //C = limpa toda a operação que estava sendo feita
backspace() //apaga os dígitos*/
