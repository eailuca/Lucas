const Fornecedor = require('../models/Fornecedor');

// Criar um novo fornecedor
exports.create = async (req, res) => {
  try {
    const { for_codigo, for_descricao } = req.body;

    const novoFornecedor = await Fornecedor.create({
      for_codigo,
      for_descricao
    });

    res.status(201).json(novoFornecedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter todos os fornecedores
exports.findAll = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.findAll();
    res.status(200).json(fornecedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um fornecedor pelo ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const fornecedor = await Fornecedor.findByPk(id);

    if (!fornecedor) {
      return res.status(404).json({ error: 'Fornecedor não encontrado' });
    }

    res.status(200).json(fornecedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um fornecedor pelo ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { for_descricao } = req.body;

    const fornecedor = await Fornecedor.findByPk(id);

    if (!fornecedor) {
      return res.status(404).json({ error: 'Fornecedor não encontrado' });
    }

    fornecedor.for_descricao = for_descricao;

    await fornecedor.save();

    res.status(200).json(fornecedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar um fornecedor pelo ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const fornecedor = await Fornecedor.findByPk(id);

    if (!fornecedor) {
      return res.status(404).json({ error: 'Fornecedor não encontrado' });
    }

    await fornecedor.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
