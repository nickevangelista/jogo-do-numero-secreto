// let titulo = document.querySelector('h1')
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10!'
let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto)  {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número secreto entre 1 e 10');
}

exibirMensagemInicial();    

function verificarChute() {
    let chute = document.querySelector('input').value;


    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        // por que que o let palavraTentativas tem que estar aqui e não lá em cima?
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas} `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.lenght;
    if(quantidadeDeElementoNaLista == numeroLimite)
    listaDeNumerosSorteados = []

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();

} else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return NumeroEscolhido
}

}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);    
}