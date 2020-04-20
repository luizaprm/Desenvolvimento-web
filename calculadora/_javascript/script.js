var novoValor = "";
var valorPrevio = "";
var operador = "";
var resultado = "";
var arrayMemoria = [];
var decimalClick = false;
var ultimoElemento = "";

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

    novoValor = ""; 
    operador = operadorBotao; 
    decimalClick = false;
    resultado = "";
    var historico = valorPrevio + " " + operador;
    document.getElementById("historico").value = historico;
}

function igual(){
    valorPrevio = parseFloat(valorPrevio);
    novoValor = parseFloat(novoValor);

    if(Number.isNaN(novoValor) && valorPrevio!=""){
        novoValor = valorPrevio;
    }else{
        if(Number.isNaN(valorPrevio) ? "0" : novoValor){ //REVER
            //valorPrevio = 0;
            //novoValor = "";
        }
    } 
    switch(operador){
        case "+":
            resultado = valorPrevio + novoValor;
            break;
        case "-":
            resultado = valorPrevio - novoValor;
            break;
        case "*":
            resultado = valorPrevio * novoValor;
            break;
        case "/":
            resultado = valorPrevio / novoValor;
            break;
    default:
            resultado = novoValor; //se o igual for pressionado sem antes clicar num operador, deixar como está
    }
    document.getElementById("historico").value = valorPrevio + " " + operador + " " + novoValor + " =";
    valorPrevio = resultado;
    document.getElementById("saida").value = resultado;
}

function porcentagem(){
    let porcentValor;
    if(resultado){
        porcentValor = resultado/100;
    }else{
        porcentValor = novoValor/100;
    }
    let auxiliar = novoValor;
    novoValor = porcentValor;
    document.getElementById("saida").value = porcentValor;
    document.getElementById("historico").value = auxiliar + "%";
}

function fracao(){
    let fracaoValor;
    if(resultado){
        fracaoValor = 1/fracaoValor;
    }else{
        fracaoValor = 1/novoValor;
    }
    let auxiliar = novoValor;
    novoValor = fracaoValor;
    document.getElementById("saida").value = fracaoValor;
    document.getElementById("historico").value = "1/" + "(" + auxiliar + ")";
}

function potenciacao(){
    let expValor;
    if(resultado){
        expvalor = Math.pow(resultado,2)
    }else{
        expValor = Math.pow(novoValor, 2);
    }
    let auxiliar = novoValor;
    novoValor = expValor;
    document.getElementById("saida").value = expValor;
    document.getElementById("historico").value = "sqrt" + "(" + auxiliar + ")";
}

function raiz(){
    let raizValor;
    if(resultado){
        raizValor = Math.sqrt(resultado);
    }else{
        raizValor = Math.sqrt(novoValor);
    }
    let auxiliar = novoValor;
    novoValor = raizValor;
    document.getElementById("saida").value = raizValor;
    document.getElementById("historico").value = "√" + "(" + auxiliar + ")";

}

function mudaSinal(){ 
    if(resultado){
        if(Math.sign(resultado) == -1){
            resultado = Math.abs(resultado);
        }else{
            if (Math.sign(resultado) == 1){
                resultado*= -1;
            }      
        }
        document.getElementById("saida").value = resultado;
    }else{
        if(Math.sign(novoValor) == -1){
            novoValor = Math.abs(novoValor);
        }else{
            if (Math.sign(novoValor) == 1){
                novoValor*= -1;
            }
        }
    document.getElementById("saida").value = novoValor;     
    }
}

function clearC(){ //limpa todas as operações que estavam sendo feitas
    valorPrevio = "";
    novoValor = "";
    resultado = "";
    operador = "";
    decimalClick = false;
    historico = "";
    document.getElementById("historico").value = "";
    document.getElementById("saida").value = 0;
} 

function deleteNum(){
    apagaDigito = document.getElementById("saida").value;
    novoValor = apagaDigito.substr(0,apagaDigito.length -1);
    document.getElementById("saida").value = novoValor;
}

function cancelEntry(){
    novoValor = ""; 
    document.getElementById("saida").value = 0;
}

function salvaMemoria(){
    let entrada = document.getElementById("saida").value;
    arrayMemoria.push(entrada);

    $('.listaMemoria').html('');
    arrayMemoria.forEach(function(elemento){
        $('.listaMemoria').append('<li>' + elemento + '</li>')
        $('.listaMemoria').hide();
    });
} 

function exibTotalMemoria(){
    $('.listaMemoria').toggle("fast", function(){});
}

$('.listaMemoria').on('click', 'li', listaMemoria);

function listaMemoria(){
    document.getElementById("saida").value = ($(this).text());
    novoValor = document.getElementById("saida").value;
}

 function recuperaMemoria(){
    if(arrayMemoria){
        ultimoElemento = arrayMemoria[arrayMemoria.length - 1];
        document.getElementById("saida").value = ultimoElemento;
        novoValor = ultimoElemento;
    }
 }

 function clearMemoria(){
    while (arrayMemoria.length){
        arrayMemoria.pop(); 
    }
    document.getElementById("saida").value = 0;
    document.getElementById("saida").value = "";
    novoValor = "";
    $('.listaMemoria').hide("fast", "linear", function(){});
    $('.listaMemoria').html('');
 }

 function minusMemoria(){
    let auxiliar = arrayMemoria[arrayMemoria.length - 1]; 
    if(arrayMemoria){
        if(resultado){
            auxiliar -= resultado;
        }else{
            auxiliar -= novoValor;
        }
    }
    arrayMemoria[arrayMemoria.length - 1] = auxiliar;
    $('.listaMemoria li:last-child').text() = auxiliar;
}

function addMemoria(){
    let auxiliar = arrayMemoria[arrayMemoria.length - 1]; 
    auxiliar = parseFloat(auxiliar);
    if(arrayMemoria){
        if(resultado){
            auxiliar += parseFloat(resultado);
        }else{
            auxiliar += parseFloat(novoValor);
        }
    }
    arrayMemoria[arrayMemoria.length - 1] = auxiliar; 
}
