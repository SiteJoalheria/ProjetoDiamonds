const db = require('./db');
const { DataTypes } = require('sequelize');

const Cliente = db.sequelize.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_cli' // Mapeando o nome da coluna da tabela
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Nome_cli' // Mapeando o nome da coluna da tabela
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'CPF_cli' 
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Telefone_cli' 
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Endereco_cli' 
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Cidade_cli' 
      },
      cep: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Cep_cli' 
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Email_cli' 
      },
      
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Senha_cli' 
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Define como falso por padrão para não administrador
        field: 'isAdmin' 
      }
  },{
    tableName: 'cliente' // Especifica o nome correto da tabela
  });
  
  module.exports = Cliente;