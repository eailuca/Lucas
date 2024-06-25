const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vendadb', 'postgres', 'masterkey', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false, // Define como true ou console.log para ver as consultas SQL brutas
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
