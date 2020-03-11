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
    setInterval(apresentaHoras, 1000);
    var nome = readCookie("nome");
    if(nome==null){
        nome=prompt("Qual seu nome?");
        this.writeCookie("nome", nome, 1);
    }
   
}


function ligar() {
    document.getElementById("lampada").src = "../projeto-glass-html5/_imagens/lampada-acesa.jpg";
    setTimeout(desligar, 3000);
    var nome = readCookie("nome");
    if(nome!=null){
        alert("Muito bom te conhecer, " + nome);
    }
}

function desligar() {
    document.getElementById("lampada").src = "../projeto-glass-html5/_imagens/lampada-quebrada.jpg";
}

function apresentaHoras() {
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}
