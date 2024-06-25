const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Item = sequelize.define('tb_itens', {
  item_codigo: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  item_nome: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  item_descricao: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  item_valor: {
    type: Sequelize.DECIMAL(7, 2),
    allowNull: false
  },
  item_quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Item;
