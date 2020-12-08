function Soma() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = parseFloat(numero1) + parseFloat(numero2);

    if (resultado == 0) {
        document.getElementById("mensagem").innerText = "Neutro";
    }
    else if (resultado > 0) {
        document.getElementById("mensagem").innerText = "Positivo";
    }
    else {
        document.getElementById("mensagem").innerText = "Negativo";
    }
}
