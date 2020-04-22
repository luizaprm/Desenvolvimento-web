//http://www.newthinktank.com/2019/04/learn-javascript-javascript-calculator/

var valorPrevio = "";
var novoVal = "";
var operadorMat = "";
var resultado = "";
var valMemoria = "";
var decimalClique = false;

function insereNum(num){
    if(resultado){
        novoVal = num;
        resultado = "";
    }else{
        if(num == '.'){
            if(decimalClique != true){
                novoVal += num;
                decimalCliqued = true;
            }
        }else{
            novoValor += num;
        } 
    }
    document.getElementById("entry").value = novoValor;
}

function operadorBotao(operador){
    if(!resultado)
        valorPrevio = novoVal;
    }else{
        valorPrevio = resultado;
    }
    novoVal="";
    decimalClique = false;
    operadorMat = operador;
    document.getElementById("entry").value = "";
}

function igual(num){
    decimalClique = false;
    valorPrevio = parseFloat(valorPrevio);
    novoValor = parseFloat(novoVal);

    switch(operadorMat){
        case"+":
            resultado = valorPrevio + novoVal;
            break;
        case"-":
            resultado = valorPrevio - novoVal;
            break;
        case"*":
            resultado = valorPrevio * novoVal;
            break;
        case"/":
            resultado = valorPrevio / novoVal;
            break;
    default:
            resultado = novoVal;
    }

    valorPrevio = resultado;
    document.getElementById("entry").value = resultado;
}

function clear(){
    valorPrevio = "";
    novoVal = "";
    operador = "";
    resultado = "";
    decimalClique = false;
    document.getElementById("entry").value = "0";
}

function copiaMemoria(){
    valMemoria = document.getElementById("entry").value;
}

function exibeMemoria(){
    if(valMmemoria){
        document.getElementById("entry").value = valMemoria;
        novoVal = valMemoria;
    }
}
//onclick="selecionarValorMemoria()"

If you followed Derek, this should work.
function deleteNum() {
  delVal = document.querySelector('#entry').value.slice(0, -1);
  document.querySelector('#entry').value = delVal;
  newVal = delVal;
  resultVal = '';
}
+
add DEL button with onClick to deleteNum




/*function back() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}



function addMemoria(){   //M+ = soma o resultado ao último n armazenado
    if(valorMemoria){
        valorMemoria+= document.getElementById("saida").value;
    }
}




// If the user clicks on an operator then click equal it'll throw an error.
// Also clicking the operator more than once wipes out the previous value
/*function imprimeHistorico(historico){
    return document.getElementById("historico").value= historico;
}*/
/*
exibTotalMemoria() //M = exibe todos os números atualmente armazenados na memoria/*


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


/*
function addMemoria(){   //M+ = soma o resultado ao último n armazenado CONCATENOU
    if(valorMemoria){
        valorMemoria+= document.getElementById("saida").value;
    }
}

function minusMemoria(){     //M- = subtrai o resultado ao último n armazenado DEU CERTO
    if(valorMemoria){
        valorMemoria-= document.getElementById("saida").value;
    }
}

/*

function salvarMemoria(){ 
    valorMemoria.push = document.getElementById("saida").value;
 }
/*
 function recuperaMemoria(){ 
    if(valorMemoria){
        document.getElementById("saida").value = valorMemoria;
    }
}

function clearMemoria(){ 
    valorMemoria = "";
}

function addMemoria(){   //M+ = soma o resultado ao último n armazenado CONCATENOU
    if(valorMemoria){
        valorMemoria+= document.getElementById("saida").value;
    }
}

function minusMemoria(){     //M- = subtrai o resultado ao último n armazenado DEU CERTO
    if(valorMemoria){
        valorMemoria-= document.getElementById("saida").value;
    }
}

*/Number.isNaN() talvez pra arruma problema do igual
https://codepen.io/bretbelgarde/pen/LGbKyQ

/*
        if(arrayMemoria.length > 0){
            document.getElementById("saida").value = arrayMemoria.last();
            novoValor = document.getElementById("saida").value;
        }
        novoValor = document.getElementById("saida").value;
}
*/

var memorySave = function() {
  var num = Number($('.readout').text());
  if (Number.isNaN(num)) return;
  memoryRegister.push(num);

  $('.memory-list').html('');
  memoryRegister.forEach(function(element) {
    $('.memory-list').append('<li>' + element + '</li>')
  });
}

var memoryRecall = function() {
  $('.memory-list').toggle("fast", function(){});
}

var memoryClear = function() {
  memoryRegister = [];
  $('.memory-list').hide("fast", function(){});
  $('.memory-list').html('');
}

var memoryList = function() {
  $('.readout').text($(this).text());
}

$('#clear').click(clear);
$('#all-clear').click(allClear);
$('#back').click(back);
$('#square-root').click(squareRoot);
$('.numpad').on('click', 'button', numpad);
$('#memory-save').click(memorySave)
$('#memory-recall').click(memoryRecall)
$('#memory-clear').click(memoryClear)
$('.memory-list').on('click', 'li', memoryList);
$('.operations').on('click', 'button', operation);



if(output==""&&history!=""){
    if(isNaN(history[history.length-1])){
        history= history.substr(0,history.length-1);
    }
}
if(output!="" || history!=""){
    output= output==""?output:reverseNumberFormat(output);
    history=history+output;
    if(this.id=="="){
        var result=eval(history);
        printOutput(result);
        printHistory("");
    }
    else{
        history=history+this.id;
        printHistory(history);
        printOutput("");
    }





    readyToReset = false;





