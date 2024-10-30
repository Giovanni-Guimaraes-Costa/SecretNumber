let listaNumSecreto = [];

let quantLimite = 100;
let numSecreto = numAleatorio();
let tentativas = 1;

function numAleatorio() {
    let numEscolhido = Math.floor(Math.random() * quantLimite) + 1; // Gera um número entre 1 e 100
    let quantidadeElementos = listaNumSecreto.length;

    if (quantidadeElementos == quantLimite){

        listaNumSecreto = []
    }

    if (listaNumSecreto.includes(numEscolhido)){
        return numAleatorio();
    } 
    
    else {
        listaNumSecreto.push(numEscolhido);
        console.log(numEscolhido);
        return numEscolhido;

    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextos('h1', 'Jogo do Número Secreto');
    exibirTextos('p', 'Escolha um número de 1 a 100');

}

exibirMensagemInicial();

function novoNumero() {
    numSecreto = numAleatorio();
    
    limparCampo();
    
    tentativas = 1;

    exibirMensagemInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);

}


function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); 
    
    if (chute === numSecreto) {
        exibirTextos('h1', 'Acertou');
    
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;        
        
        document.getElementById ('reiniciar').removeAttribute('disabled');

        exibirTextos('p', mensagemTentativa);

    }

 else    {
        if (chute > numSecreto) {
           
            exibirTextos('h1', 'Ops, você errou, esse não era o número secreto');
            exibirTextos('p', 'O número secreto é menor');
       
        } else {
            
            exibirTextos('h1', 'Esse não era o número secreto');
            exibirTextos('p', 'O número secreto é maior');
        
        }
        tentativas++; //conta as tentativas
        limparCampo(); //limpa o campo quando o número inserido != do número secreto
    }

}


