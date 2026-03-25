
function calcularTempo() {
    const valorInput = document.querySelector('#valor');
    const valor = parseFloat(valorInput.value.replace(',', '.'));

    if (isNaN(valor)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    let tempo = 0;
    let troco = 0;

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else if (valor >= 1.00) {
        tempo = 30;
        troco = valor - 1.00;
    } else {
        alert('Valor insuficiente para recarga.');
        return;
    }

    document.getElementById('tempo').textContent = `Tempo: ${tempo} minutos`;
    document.getElementById('troco').textContent = `Troco: R$ ${troco.toFixed(2).replace('.', ',')}`;
}