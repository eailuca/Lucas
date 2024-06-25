const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db.config');

const fornecedorRoutes = require('./routes/fornecedores.routes');
const produtoRoutes = require('./routes/produtos.routes');
const funcionarioRoutes = require('./routes/funcionarios.routes');
const itemRoutes = require('./routes/itens.routes');
const vendaRoutes = require('./routes/vendas.routes');
const clienteRoutes = require('./routes/cliente.routes'); // Importar as rotas de clientes

const app = express();
const PORT = process.env.PORT || 3001  // Alterado para 3002

app.use(cors());
app.use(bodyParser.json());

app.use('/api/fornecedores', fornecedorRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/itens', itemRoutes);
app.use('/api/vendas', vendaRoutes);
app.use('/api/clientes', clienteRoutes); // Usar as rotas de clientes

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to sync database:', error);
});
