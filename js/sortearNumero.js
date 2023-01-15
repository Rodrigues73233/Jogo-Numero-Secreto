const menorValor = 0;
const maiorValor = 100;

const numeroSecreto = geraNumeroAleatorio()

function geraNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementeoMenorValor = document.getElementById('menor-valor')
elementeoMenorValor.innerHTML = menorValor
const elementeoMaiorValor = document.getElementById('maior-valor')
elementeoMaiorValor.innerHTML = maiorValor
