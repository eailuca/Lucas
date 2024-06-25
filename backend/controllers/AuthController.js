const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Funcionario = require('../models/Funcionario');

exports.login = async (req, res) => {
  const { fun_cpf, fun_senha } = req.body;

  try {
    const funcionario = await Funcionario.findOne({ where: { fun_cpf } });

    if (!funcionario || !await bcrypt.compare(fun_senha, funcionario.fun_senha)) {
      return res.status(401).json({ message: 'Invalid CPF or password' });
    }

    const user = { id: funcionario.fun_codigo, nome: funcionario.fun_nome };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.register = async (req, res) => {
  const { fun_nome, fun_cpf, fun_senha, fun_funcao } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(fun_senha, salt);

    const newFuncionario = await Funcionario.create({
      fun_nome,
      fun_cpf,
      fun_senha: hashedPassword,
      fun_funcao,
    });

    res.status(201).json(newFuncionario);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.logout = (req, res) => {
  // No need for explicit logout with JWT, just manage the token client-side
  res.json({ message: 'Logout successful' });
};
