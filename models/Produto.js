const db = require('./db');
const { DataTypes } = require('sequelize');
const Fornecedor = require('./Fornecedor'); // Importar o modelo Fornecedor

const Produto = db.sequelize.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      field: 'id_prod' // Mapeando o nome da coluna da tabela
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Nome_prod' // Mapeando o nome da coluna da tabela
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      field: 'Preco_prod' // Mapeando o nome da coluna da tabela
    },
    nomeForne: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'nomeForne_prod' // Mapeando o nome da coluna da tabela
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      field: 'QuantAtualEst_prod' // Mapeando o nome da coluna da tabela
    },
    imagem: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
      field: 'Imagem_prod' // Mapeando o nome da coluna da tabela
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      field: 'Categoria_prod' // Mapeando o nome da coluna da tabela
}
},{
  tableName: 'produto' // Especifica o nome correto da tabela
});

Produto.belongsTo(Fornecedor, { foreignKey: 'nomeForne' });
Fornecedor.hasMany(Produto, { foreignKey: 'nomeForne' });

module.exports =  Produto;