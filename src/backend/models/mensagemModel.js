const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Mensagem = sequelize.define("mensagem", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoMensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricaoMensagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = Mensagem;