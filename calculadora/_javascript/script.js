var novoValor = "";
var valorPrevio ="" ;
var operador = "";
var resultado = "";
var valorMemoria;
var decimalClick = false;
var operadorClick = false;
//var operacaoHistorico;
var igualClick = false;

function insereNum(botaoPressionado){
    if(resultado){
        novoValor = botaoPressionado;
        resultado = "";
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
    document.getElementById("saida").value = novoValor;
}

function operadorMat(operadorBotao){
    if(!resultado){ 
        valorPrevio = novoValor;
    }else{
        valorPrevio = resultado;
    }
    operador = operadorBotao; 
    novoValor = ""; 
    decimalClick = false;
}

function igual(){// REVER
    valorPrevio = parseFloat(valorPrevio);
    novoValor = parseFloat(novoValor);

    switch(operadorMat){
        case"+":
            resultado = valorPrevio + novoValor;
            break;
        case"-":
            resultado = valorPrevio - novoValor;
            break;
        case"*":
            resultado = valorPrevio * novoValor;
            break;
        case"/":
            resultado = valorPrevio / novoValor;
            break;
    default:
            resultado = novoValor; //se o igual for pressionado sem antes clicar num operador, deixar como está
    }
    valorPrevio = resultado;
    document.getElementById("saida").value = resultado;
}


function porcentagem(){
    var porcentValor = novoValor/100;
    document.getElementById("saida").value = porcentValor;
    //novoValor = porcentValor;
}

function fracao(){
    var fracaoValor = 1/novoValor;
    document.getElementById("saida").value = fracaoValor;
    //novoValor = fracaoValor;
}

function potenciacao(){
    var expValor = Math.pow(novoValor);
    document.getElementById("saida").value = expValor;
    //novoValor = potenciacaoValor;
}

function raiz(){
    var raizValor = Math.sqrt(novoValor);
    document.getElementById("saida").value = raizValor;
    //novoValor = raizValor;
}

function mudaSinal(){
    if(Math.sign(novoValor) == -1){
        novoValor = Math.abs(novoValor);
    }else{
        if (Math.sign(novoValor) == 1){
            novoValor*= -1;
        }      
    }
    document.getElementById("saida").value = novoValor;
    document.getElementById("entry").value = resultado;
}

function clearC(){ //limpa todas as operações que estavam sendo feitas
    valorPrevio = "";
    novoValor = "";
    saida = "";
    operadorMat = "";
    decimalClick = false;
    document.getElementById("saida").value = 0;
} 

function deleteNum(){
    var apagaDigito = document.getElementById("saida").value;
    document.getElementById("saida").value=apagaDigito.substr(0, apagaDigito.length -1);
    //novoValor = document.getElementById("saida").value;
}

function cancelEntry(){ 
    document.getElementById("saida").value = 0;
}

function salvarMemoria(){ 
    valorMemoria = document.getElementById("saida").value;
 }

 function recuperaMemoria(){ 
    if(valorMemoria){
        document.getElementById("saida").value = valorMemoria;
    }
}

function clearMemoria(){ 
    valorMemoria = "";
}

