const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Cliente = sequelize.define('tb_clientes', {
  cli_codigo: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true  // Assumindo que cli_codigo é um campo auto-incremental
  },
  cli_nome: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  cli_cpf: {
    type: Sequelize.STRING(11),
    allowNull: false,
    unique: true  // Garante que o CPF seja único no banco de dados
  },
  cli_endereco: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  cli_telefone: {
    type: Sequelize.STRING(15),
    allowNull: true  // Telefone pode ser opcional
  },
  cli_email: {
    type: Sequelize.STRING(100),
    allowNull: true  // Email pode ser opcional
  }
}, {
  timestamps: false  // Desativa os campos de timestamp (createdAt e updatedAt) se não forem necessários
});

module.exports = Cliente;
