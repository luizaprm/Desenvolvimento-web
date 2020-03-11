/*function ligar(){
    var nome = "BTS\u7231"; /* caractere de amor em japonês
    alert(nome); 
    document.getElementById("lampada") src="./projeto-glass-html5/_imagens/lampada-quebrada.jpg";
}*/


/*var s = "arroz";

for (var i=0;i<s.length;i++){
    alert(s[i]);
}
*/



window.onload = function() {
    document.getElementById("lampada").onclick = ligar;
    setInterval(apresentaHoras, 1000)
}


function ligar() {
    document.getElementById("lampada").src = "../projeto-glass-html5/_imagens/lampada-acesa.jpg";
    setTimeout(desligar, 3000);
}

function desligar() {
    document.getElementById("lampada").src = "../projeto-glass-html5/_imagens/lampada-quebrada.jpg";
}

function apresentaHoras() {
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}
