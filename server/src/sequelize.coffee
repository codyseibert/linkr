Sequelize = require 'sequelize'
module.exports = do ->
  new Sequelize(
    process.env.LINKR_DB_NAME or 'linkr',
    process.env.LINKR_DB_USER or 'linkr',
    process.env.LINKR_DB_PASS or 'linkr',
    host: process.env.LINKR_HOST or 'localhost'
  )
