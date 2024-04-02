alert('Olá, esse é o jogo do número secreto');
let numeroMaximo = prompt('Qual será o número Maximo?');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute
let tentativas = 1;

// enquanto chute diferente do numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Número secreto é menor que ${chute}`);
        } else {
            alert(`Número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);