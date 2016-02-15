Sequelize = require 'sequelize'
module.exports = do ->
  new Sequelize 'linkr', 'linkr', 'linkr',
    host: 'localhost'
