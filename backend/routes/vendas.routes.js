const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

// Criar uma nova venda
router.post('/', vendaController.create);

// Obter todas as vendas
router.get('/', vendaController.findAll);

// Obter uma venda pelo ID
router.get('/:id', vendaController.findOne);

// Atualizar uma venda pelo ID
router.put('/:id', vendaController.update);

// Deletar uma venda pelo ID
router.delete('/:id', vendaController.delete);

module.exports = router;
