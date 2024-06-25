const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Fornecedor = sequelize.define('tb_fornecedores', {
  for_codigo: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  for_descricao: {
    type: Sequelize.STRING(45),
    allowNull: false
  }
});

module.exports = Fornecedor;
