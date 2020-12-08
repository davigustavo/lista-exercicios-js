function Exemplo() {
    document.getElementById("numero").value = "teste";
    let numero = document.getElementById("numero").value;
    console.log(numero);
}

function Trocar() {
    let numero = document.getElementById("numero").value;
    if(numero<20) {
        document.getElementById("mensagem").innerText = "Menor que 20";
    }
    else if(numero == 20) {
        document.getElementById("mensagem").innerText = "É igual a 20";
    }
    else{
        document.getElementById("mensagem").innerText = "Maior que 20";
    } 
}
