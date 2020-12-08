function Trocar() {
    let numero = document.getElementById("numero").value;
    if(numero<100) {
        document.getElementById("mensagem").innerText = "MENOR QUE 100";
    }
    else if(numero == 100) {
        document.getElementById("mensagem").innerText = "É 100";
    }
    else{
        document.getElementById("mensagem").innerText = "MAIOR QUE 100";
    } 
}
