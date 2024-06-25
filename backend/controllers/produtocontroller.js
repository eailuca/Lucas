const Produto = require('../models/Produtos');

// Criar e salvar um novo produto
exports.create = async (req, res) => {
  try {
    const { pro_codigo, pro_descricao, pro_valor, pro_quantidade, for_codigo } = req.body;
    const produto = await Produto.create({ pro_codigo, pro_descricao, pro_valor, pro_quantidade, for_codigo });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Produto', error });
  }
};

// Obter todos os produtos
exports.findAll = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Produtos', error });
  }
};

// Obter um produto pelo ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ message: 'Produto not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Produto', error });
  }
};

// Atualizar um produto pelo ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { pro_descricao, pro_valor, pro_quantidade, for_codigo } = req.body;
    const produto = await Produto.findByPk(id);
    if (produto) {
      produto.pro_descricao = pro_descricao;
      produto.pro_valor = pro_valor;
      produto.pro_quantidade = pro_quantidade;
      produto.for_codigo = for_codigo;
      await produto.save();
      res.status(200).json(produto);
    } else {
      res.status(404).json({ message: 'Produto not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating Produto', error });
  }
};

// Deletar um produto pelo ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Produto not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Produto', error });
  }
};
