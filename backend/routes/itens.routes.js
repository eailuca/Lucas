const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemcontroller');

// Criar um novo item
router.post('/', itemController.create);

// Obter todos os itens
router.get('/', itemController.findAll);

// Obter um item pelo ID
router.get('/:id', itemController.findOne);

// Atualizar um item pelo ID
router.put('/:id', itemController.update);

// Deletar um item pelo ID
router.delete('/:id', itemController.delete);

module.exports = router;
