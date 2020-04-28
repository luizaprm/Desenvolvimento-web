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

document.onkeypress = function(){
  for(var i = 0; i<10; i++){
      if(event.keyCode == i + 48){
            insereNum(i);
      }  
  }
  if(event.keyCode == 42){
    operadorMat('*');
  }else if (event.keyCode == 43){
    operadorMat('+');
  }else if(event.keyCode == 45){
    operadorMat('-');
  }else if(event.keyCode == 47){
    operadorMat('/');
  }else if(event.keyCode == 46){
    insereNum('.');
  }else if(event.keyCode == 37){
    porcentagem();
  }else if(event.keyCode == 94){
    potenciacao();
  }else if(event.keyCode == 13 || event.keyCode == 61){
    igual();
  }
}

document.onkeydown = function(){
    if(event.keyCode == 8){
        deleteNum();
    }else if(event.keyCode == 46){
        cancelEntry();
    }else if(event.keyCode == 27){
        clearC();
    }
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

    if(isNaN(novoValor) && isNaN(valorPrevio)){
        valorPrevio = "";
        novoValor = "";
        document.getElementById(saida).value = 0;
    }else{
        if(Number.isNaN(novoValor)){
            novoValor = valorPrevio;
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
        document.getElementById("historico").value = resultado + "%";
        porcentValor = resultado/100;
    }else{
        document.getElementById("historico").value = novoValor + "%";
        porcentValor = novoValor/100;
    }
    resultado = porcentValor;
    document.getElementById("saida").value = porcentValor;
}

function fracao(){
    let fracaoValor;
    if(resultado){
        document.getElementById("historico").value = "1/" + "(" + resultado + ")";
        fracaoValor = 1/resultado;
        document.getElementById("saida").value = fracaoValor;
    }else{
        document.getElementById("historico").value = "1/" + "(" + novoValor + ")";
        fracaoValor = 1/novoValor;
        document.getElementById("saida").value = fracaoValor;
    }
    resultado = fracaoValor;
}

function potenciacao(){
    let expValor;
    if(resultado){
        document.getElementById("historico").value = "(" + resultado + ")²";
        document.getElementById("saida").value = Math.pow(resultado, 2);
        resultado = document.getElementById("saida").value;
    }else{
        document.getElementById("historico").value = "(" + novoValor + ")²";
        expValor = Math.pow(novoValor, 2);
        document.getElementById("saida").value = expValor;
        resultado = expValor;
    }
}

function raiz(){
    let raizValor;
    if(resultado){
        document.getElementById("historico").value = "√" + "(" + resultado + ")";
        raizValor = Math.sqrt(resultado);
    }else{
        document.getElementById("historico").value = "√" + "(" + novoValor + ")";
        raizValor = Math.sqrt(novoValor);
    }
    resultado = raizValor;
    document.getElementById("saida").value = raizValor;
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
    novoValor = "";

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
    $('.listaMemoria li:last-child').text(auxiliar);
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
    $('.listaMemoria li:last-child').text(auxiliar);
}
