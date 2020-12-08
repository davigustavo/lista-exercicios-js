function Testar() {
    let idade = document.getElementById("idade").value;

    if (idade >= 18) {
        document.getElementById("mensagem").innerText = "Maior de 18";
    }
    else {
        document.getElementById("mensagem").innerText = "Menor de 18";
    }
}