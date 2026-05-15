// var etanol;
// var gasolina;
// let resultado;

function calcular() {
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);  
    
    // Validação
    if (isNaN(etanol) || isNaN(gasolina) || gasolina <= 0) {
        document.getElementById("mensagem").innerHTML= "Preencha os dois campos corretamente.";
        document.getElementById('status').src = "./img/tanque.png";
        return;
    }
    // Calcular o valor
    let resultado = etanol / gasolina; 

    if (etanol <= 0.70 * gasolina) {
        document.getElementById('status').src = "./img/tanqueEtanol.png";
    } else {
        document.getElementById('status').src = "./img/tanqueGasolina.png";
    }

    document.getElementById("mensagem").innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}

//Função Limpar
function limpar() {
    document.getElementById('status').src= './img/tanque.png';
    document.getElementById('mensagem').innerHTML= '';
    document.getElementById('etanol').value= '';
    document.getElementById('gasolina').value= '';
}