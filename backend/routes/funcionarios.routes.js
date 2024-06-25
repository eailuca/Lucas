const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

// Criar um novo funcionário
router.post('/', funcionarioController.create);

// Obter todos os funcionários
router.get('/', funcionarioController.findAll);

// Obter um funcionário pelo ID
router.get('/:id', funcionarioController.findOne);

// Atualizar um funcionário pelo ID
router.put('/:id', funcionarioController.update);

// Deletar um funcionário pelo ID
router.delete('/:id', funcionarioController.delete);

module.exports = router;
