const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Leilao = sequelize.define("leilao", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataFim: {
        type: DataTypes.DATE,
        allowNull: false
    },
    precoAtual: {
        type: DataTypes.DOUBLE,
    }
},
{
    freezeTableName: true
});

module.exports = Leilao;