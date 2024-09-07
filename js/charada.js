const inputPalavra = document.querySelector('input[type="text"]');
const botaoPesquisar = document.querySelector('button');

botaoPesquisar.addEventListener('click', () => {
    const palavraDigitada = inputPalavra.value.toLowerCase();

    if (palavraDigitada === 'mellon') {
        window.location.href = 'terramedia.html';
    } else {
        alert('Tente novamente! Você está quase lá...');
    }
})