const Venda = require('../models/Venda');

// Criar e salvar uma nova venda
exports.create = async (req, res) => {
  try {
    const { ven_codigo, ven_data, cli_codigo, ven_valor_total } = req.body;
    const venda = await Venda.create({ ven_codigo, ven_data, cli_codigo, ven_valor_total });
    res.status(201).json(venda);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Venda', error });
  }
};

// Obter todas as vendas
exports.findAll = async (req, res) => {
  try {
    const vendas = await Venda.findAll();
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Vendas', error });
  }
};

// Obter uma venda pelo ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const venda = await Venda.findByPk(id);
    if (venda) {
      res.status(200).json(venda);
    } else {
      res.status(404).json({ message: 'Venda not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Venda', error });
  }
};

// Atualizar uma venda pelo ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { ven_data, cli_codigo, ven_valor_total } = req.body;
    const venda = await Venda.findByPk(id);
    if (venda) {
      venda.ven_data = ven_data;
      venda.cli_codigo = cli_codigo;
      venda.ven_valor_total = ven_valor_total;
      await venda.save();
      res.status(200).json(venda);
    } else {
      res.status(404).json({ message: 'Venda not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating Venda', error });
  }
};

// Deletar uma venda pelo ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const venda = await Venda.findByPk(id);
    if (venda) {
      await venda.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Venda not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Venda', error });
  }
};
