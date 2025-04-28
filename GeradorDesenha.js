function pegarVariaveis() {
    const possuir_maiuscula = document.querySelector('input#incluir_letras_maiusculas').checked;
    const possuir_minuscula = document.querySelector('input#incluir_letras_minusculas').checked; 
    const possuir_numeros = document.querySelector('input#incluir_numeros').checked;
    const possuir_especial = document.querySelector('input#incluir_caracter_especial').checked;

    const tiposVariaveis = [];

    if(possuir_maiuscula){
        tiposVariaveis.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if(possuir_minuscula){
        tiposVariaveis.push('abcdefghijklmnopqrstuvwxyz')
    }
    if(possuir_numeros){
        tiposVariaveis.push('01234566789')
    }
    if(possuir_especial){
        tiposVariaveis.push('!@#$%¨&*(){}[]<>;:/\\~')
    }
    return tiposVariaveis;
}



function tamanhoSenha(){
    const tamanho = document.getElementById('tamanho').value;
    if(isNaN(tamanho) || tamanho < 4 || tamanho > 24){
        Mensagem('Tamanho inválido! Digite um número entre 4 à 24','red')
        document.querySelector('#tamanho').focus();
    }
    return tamanho;
}



function caracter_aleatorio(tiposVariaveis){
    const tamanhoArray = Math.floor(Math.random() * tiposVariaveis.length);
    const caracterAleatorio = tiposVariaveis[tamanhoArray][Math.floor(Math.random() * tiposVariaveis[tamanhoArray].length)];
    return caracterAleatorio;
}



function gerarSenha(tamanho,tiposVariaveis){
    let SenhaSegura = '';

    while(SenhaSegura.length < tamanho){
        SenhaSegura += caracter_aleatorio(tiposVariaveis)
    }
    return SenhaSegura;
}

function Mensagem(mensagem,CorDoFundo){
    Toastify({
        text: mensagem,
        duration: 2000,
        style: {
            background: CorDoFundo,
            boxShadow: 'none'
        }
    }).showToast()
}


function adicionarOpcao(SenhaSegura){
        const novaopcao = document.createElement('option');
        const SelectCaixa = document.getElementById('Senhas');

        novaopcao.value = SenhaSegura
        novaopcao.text = SenhaSegura 

        SelectCaixa.appendChild(novaopcao);
    }


document.getElementById('gerar_senha').addEventListener('click', function () {
    const tamanho = tamanhoSenha();
    const tiposVariaveis = pegarVariaveis();
    
    if(!tamanho){
        return;
    }
    if(!tiposVariaveis.length){
        Mensagem('Selecione pelo menos 1 caracter!','red')
        return;
    }

    const SenhaSegura = gerarSenha(tamanho,tiposVariaveis);
    Mensagem('Senha gerada!','green')
    document.querySelector('#caixa_senha').classList.add('mostrar_caixa')
    document.querySelector('#senha').textContent = SenhaSegura;
    adicionarOpcao(SenhaSegura);
    document.querySelector('#Senhas').classList.add('mostrar_caixa')

});

function copiar(){
    navigator.clipboard.writeText(document.querySelector('#senha').textContent)
    Mensagem('Texto copiado!','green')
}


document.querySelector('#copiar').addEventListener('click', function (){
    copiar();
})
