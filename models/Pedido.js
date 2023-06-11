const db = require('./db');
const { DataTypes } = require('sequelize');

const Pedido = db.sequelize.define('pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_pedido' 
    },
    id_cli: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_cli_pedido' 
    },
    ids_prod: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'idsProd_pedido' 
    },
    quantidadesProd: {
        type: DataTypes.TEXT, 
        allowNull: false,
        field: 'quantidadesProd_pedido' 
    },
    precoFinal: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'precoFinal_pedido' 
    },
    DataEmissao: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'DataEmissao_pedido' 
    }
    }, {
    tableName: 'pedido' 
    });

module.exports = Pedido;
