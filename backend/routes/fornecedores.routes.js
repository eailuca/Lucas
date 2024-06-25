const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorcontroller');

// Criar um novo fornecedor
router.post('/', fornecedorController.create);

// Obter todos os fornecedores
router.get('/', fornecedorController.findAll);

// Obter um fornecedor pelo ID
router.get('/:id', fornecedorController.findOne);

// Atualizar um fornecedor pelo ID
router.put('/:id', fornecedorController.update);

// Deletar um fornecedor pelo ID
router.delete('/:id', fornecedorController.delete);

module.exports = router;
