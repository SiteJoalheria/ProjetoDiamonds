const db = require('./db');
const { DataTypes } = require('sequelize');

const Fornecedor = db.sequelize.define('fornecedor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      field: 'id_forne' // Mapeando o nome da coluna da tabela
    },
    razaoSocial: {
      type: DataTypes.STRING,
      allowNull: false,
    field: 'razaoSocial_forne' // Mapeando o nome da coluna da tabela
  },
    nomeFantasia: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'NomeFantasia_forne' // Mapeando o nome da coluna da tabela
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'CNPJ_forne' // Mapeando o nome da coluna da tabela
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Email_forne' // Mapeando o nome da coluna da tabela
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Telefone_forne' // Mapeando o nome da coluna da tabela
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Endereco_forne' // Mapeando o nome da coluna da tabela
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Cep_forne' // Mapeando o nome da coluna da tabela
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Cidade_forne' // Mapeando o nome da coluna da tabela
}
},{
  tableName: 'fornecedor' // Especifica o nome correto da tabela
});

module.exports = Fornecedor;