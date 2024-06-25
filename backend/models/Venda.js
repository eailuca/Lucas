const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');
const Cliente = require('./Cliente');

const Venda = sequelize.define('tb_vendas', {
  ven_codigo: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  ven_data: {
    type: Sequelize.DATE,
    allowNull: false
  },
  cli_codigo: {
    type: Sequelize.BIGINT,
    references: {
      model: Cliente,
      key: 'cli_codigo'
    }
  },
  ven_valor_total: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
});

module.exports = Venda;
