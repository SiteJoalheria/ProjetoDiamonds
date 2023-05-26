function authenticate(req, res, next) {
    // Verifique a presença e a validade do token de autenticação aqui

    // Exemplo de verificação simples
    const token = req.headers.authorization;
    if (!token || token !== 'seu_token_de_autenticacao') {
        return res.status(401).json({ error: 'Não autorizado' });
    }

    // Decodifique o token para obter o email
    const decoded = jwt.decode(token);

    // Defina corretamente se o usuário é administrador ou não com base nos dados do banco de dados
    req.user = {
        email: decoded.email,
        isAdmin: false // Defina inicialmente como falso
    };

    // Consulta ao banco de dados para verificar se o usuário é um administrador
    Cliente.findOne({ email: decoded.email })
        .then(function(cliente) {
            if (cliente && cliente.isAdmin) {
                req.user.isAdmin = true; // Define como verdadeiro se o cliente for um administrador
            }
            next();
        })
        .catch(function(erro) {
            console.log(erro);
            next();
        });
}

module.exports = authenticate;
