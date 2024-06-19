let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio';

function clicar() {
    console.log('O botão foi clicado');
}

function alertar() {
    alert('Eu amo JS');
}

function verificar() {
    let cidade = prompt('Digite o nome da cidade:');

    alert(`Estive em ${cidade} e lembrei de você`);
}

function somar() {
    let numero1 = prompt('Digite o primeiro numero:'); 
    let numero2 = prompt('Digite o segundo numero:'); 
    let soma = parseInt(numero1) + parseInt(numero2);

    alert(`Soma: ${soma}`);
}