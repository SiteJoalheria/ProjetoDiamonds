// router.delete('/admin/excluirforne/:id', (req, res) => {
//     const id = req.params.id;
//     Fornecedor.destroy({
//         where: {
//             id: id
//         }
//     })
//     .then(() => {
//         res.sendStatus(200); // Resposta de sucesso (status 200)
//     })
//     .catch((error) => {
//         res.status(500).send('Houve um erro ao excluir o fornecedor: ' + error); // Resposta de erro (status 500)
//     });
// });