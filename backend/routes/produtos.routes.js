const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtocontroller');

// Criar um novo produto
router.post('/', produtoController.create);

// Obter todos os produtos
router.get('/', produtoController.findAll);

// Obter um produto pelo ID
router.get('/:id', produtoController.findOne);

// Atualizar um produto pelo ID
router.put('/:id', produtoController.update);

// Deletar um produto pelo ID
router.delete('/:id', produtoController.delete);

module.exports = router;
