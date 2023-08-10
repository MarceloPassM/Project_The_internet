const anos = document.querySelectorAll('.link');

anos.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        removerSelecaoDoLink();

        link.classList.add('selecionado');
    })
})

function removerSelecaoDoLink() {
    const linkSelecionado = document.querySelector('.selecionado');
    linkSelecionado.classList.remove('selecionado')
}