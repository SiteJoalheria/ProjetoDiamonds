// // Botão excluir cadastro
// const deleteButtons = document.querySelectorAll('.btn-delete');

// deleteButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         const id = button.dataset.id;

//         if (confirm('Tem certeza que deseja excluir o fornecedor?')) {
//             fetch(`/admin/excluirforne/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => {
//                 if (response.ok) {
//                     // Fornecedor excluído com sucesso
//                     // Redirecionar para a página desejada ou realizar outra ação
//                 } else {
//                     throw new Error('Erro ao excluir fornecedor');
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//                 // Exibir mensagem de erro ao usuário
//             });
//         }
//     });
// });