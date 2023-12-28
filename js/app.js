function alterarStatus(id) {
    // document.getElementById('game-1').setAttribute('disabled', true);
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img')
    let button = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    alert(nomeJogo.textContent);
    if (id == 1) {
    } else if (id == 2) {
        
    } else {

    }
}