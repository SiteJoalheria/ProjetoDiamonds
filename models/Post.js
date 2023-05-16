const db= require('./db')

const Post = db.sequelize.define('Clientes', {
    Nome: {
        type: db.Sequelize.STRING
    },
    CPF: {
        type: db.Sequelize.INTEGER
    },
    Email: {
        type: db.Sequelize.STRING
    },
    Telefone: {
        type: db.Sequelize.INTEGER
    },
    Endereco: {
        type: db.Sequelize.STRING
    },
    Cidade: {
        type: db.Sequelize.STRING
    }
})

module.exports = Post