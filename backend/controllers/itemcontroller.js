const Item = require('../models/Item');

// Criar e salvar um novo item
exports.create = async (req, res) => {
  try {
    const { item_codigo, item_nome, item_descricao, item_valor, item_quantidade } = req.body;
    const item = await Item.create({ item_codigo, item_nome, item_descricao, item_valor, item_quantidade });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Item', error });
  }
};

// Obter todos os itens
exports.findAll = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Items', error });
  }
};

// Obter um item pelo ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Item', error });
  }
};

// Atualizar um item pelo ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { item_nome, item_descricao, item_valor, item_quantidade } = req.body;
    const item = await Item.findByPk(id);
    if (item) {
      item.item_nome = item_nome;
      item.item_descricao = item_descricao;
      item.item_valor = item_valor;
      item.item_quantidade = item_quantidade;
      await item.save();
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating Item', error });
  }
};

// Deletar um item pelo ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    if (item) {
      await item.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Item', error });
  }
};
