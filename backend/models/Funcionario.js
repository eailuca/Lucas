const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Funcionario = sequelize.define('tb_funcionarios', {
  fun_codigo: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  fun_nome: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  fun_cpf: {
    type: Sequelize.STRING(45),
    allowNull: false,
    unique: true
  },
  fun_senha: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  fun_funcao: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
});

module.exports = Funcionario;
