const Sequelize = require('sequelize');
require('dotenv').config(); // Import sensitive data from .env

const sequelize = process.env.'https://shrouded-sierra-56762-1b49780caeb9.herokuapp.com/'
  ? new Sequelize(process.env.'https://shrouded-sierra-56762-1b49780caeb9.herokuapp.com/)' // https://shrouded-sierra-56762-1b49780caeb9.herokuapp.com/ is for HEROKU
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // This is for Local
      host: 'http://localhost:3001/',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;