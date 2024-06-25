const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');
const Fornecedor = require('./Fornecedor');

const Produto = sequelize.define('tb_produtos', {
  pro_codigo: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  pro_descricao: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  pro_valor: {
    type: Sequelize.DECIMAL(7, 2),
    allowNull: false
  },
  pro_quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  for_codigo: {
    type: Sequelize.BIGINT,
    references: {
      model: Fornecedor,
      key: 'for_codigo'
    }
  }
});

module.exports = Produto;
