function voltarPagina() {
    history.back();
}

// Função para exibir a janela de erro
function exibirErro() {
Swal.fire({
    icon: 'error',
    title: 'Erro!',
    text: 'Ocorreu um erro. Tente novamente mais tarde.',
});
}

//Obtem o nome do usuario pelo cookie e salva em uma variavel para usar no header.
const nomeUsuarioCookie = document.cookie.replace(/(?:(?:^|.*;\s*)NomeUsuario\s*=\s*([^;]*).*$)|^.*$/, "$1");
const nomeUsuarioHeader = document.getElementById('nomeUsuarioHeader');

if (nomeUsuarioCookie) {
    nomeUsuarioHeader.textContent = nomeUsuarioCookie;
} else {
    nomeUsuarioHeader.textContent = ' ';
}

//Deixa o ultimo item selecionado de outra cor
const icons = document.querySelectorAll('.itemPintado');

icons.forEach(icon => {
    icon.addEventListener('click', function() {
        console.log('Ícone clicado:', this); 
    // Remove a classe "active" de todos os ícones
    icons.forEach(icon => {
        icon.classList.remove('active');
    });

    // Adiciona a classe "active" apenas ao ícone clicado
    this.classList.add('active');
});
});

