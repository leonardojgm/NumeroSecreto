olaMundo();
olaNome('Joaquim');

console.log(dobro(5));
console.log(media(4, 7 ,10));
console.log(maior(10, 5));
console.log(multiplicacao(5, 10));

function olaMundo() {
    console.log('Ola Mundo');
}

function olaNome(nome) {
    console.log(`Ola, ${nome}!`);
}

function dobro(numero) {
    return numero * 2;
}

function media (numero1, numero2, numero3) {   
    return (numero1 + numero2 + numero3) / 3;
}

function maior (numero1, numero2) {
    return numero1 > numero2 ?  numero1 : numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}