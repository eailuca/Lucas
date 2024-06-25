const Funcionario = require('../models/Funcionario');

// Criar e salvar um novo funcionário
exports.create = async (req, res) => {
  try {
    const { fun_codigo, fun_nome, fun_cpf, fun_senha, fun_funcao } = req.body;
    const funcionario = await Funcionario.create({ fun_codigo, fun_nome, fun_cpf, fun_senha, fun_funcao });
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Funcionario', error });
  }
};

// Obter todos os funcionários
exports.findAll = async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Funcionarios', error });
  }
};

// Obter um funcionário pelo ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const funcionario = await Funcionario.findByPk(id);
    if (funcionario) {
      res.status(200).json(funcionario);
    } else {
      res.status(404).json({ message: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Funcionario', error });
  }
};

// Atualizar um funcionário pelo ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fun_nome, fun_cpf, fun_senha, fun_funcao } = req.body;
    const funcionario = await Funcionario.findByPk(id);
    if (funcionario) {
      funcionario.fun_nome = fun_nome;
      funcionario.fun_cpf = fun_cpf;
      funcionario.fun_senha = fun_senha;
      funcionario.fun_funcao = fun_funcao;
      await funcionario.save();
      res.status(200).json(funcionario);
    } else {
      res.status(404).json({ message: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating Funcionario', error });
  }
};

// Deletar um funcionário pelo ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const funcionario = await Funcionario.findByPk(id);
    if (funcionario) {
      await funcionario.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Funcionario', error });
  }
};
