// sweetalert.js
function exibirErro(message) {
  Swal.fire({
    icon: 'error',
    title: 'Erro!',
    text: message
  });
}

function exibirSucesso(message) {
  Swal.fire({
    icon: 'success',
    title: 'Sucesso!',
    text: message
  });
}

function exibirAlerta(message) {
  Swal.fire({
    icon: 'warning',
    title: 'Alerta!',
    text: message
  });
}

function exibirInformacao(message) {
  Swal.fire({
    icon: 'info',
    title: 'Informação',
    text: message
  });
}

// Exporte as funções para que possam ser usadas em outros arquivos
module.exports = {
  exibirErro,
  exibirSucesso,
  exibirAlerta,
  exibirInformacao
};
