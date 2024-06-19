function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }

    let resultado = 1;

    while ( numero > 1 ) {
        resultado *= numero;
        numero--;
    }

    return resultado;
}

let numero = 5;

console.log(`O fatorial de ${numero} é ${calcularFactorial(numero)}`);

function converterDolar(dolar) {
    return dolar * 4.80;
} 

let valor = 50;

console.log(`${valor} dólares equivalem a R$ ${converterDolar(valor)}`);

function calcularAreaPerimetro (altura, largura) {   
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3; // em metros
let largura = 5; // em metros

calcularAreaPerimetro(altura, largura);

function calcularAreaPerimetroCirculo(raio) {   
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

let raio = 5; // em metros

calcularAreaPerimetroCirculo(raio);

function tabuada(numero) {
    i = 0;

    while (i <= 10) {
        console.log(`${numero} x ${i} = ${numero * i}`);

        i++;
    }
}

mostrarTabuada(numero);