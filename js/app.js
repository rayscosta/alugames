function alterarStatus(id) {
    // document.getElementById('game-1').setAttribute('disabled', true);
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img')
    let button = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    // alert(nomeJogo.textContent);
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
    }
}