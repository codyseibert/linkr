Sequelize = require 'sequelize'
sequelize = require '../sequelize'

module.exports = do ->
  Entry = sequelize.define 'entry',
    title: Sequelize.STRING
    icon: Sequelize.INTEGER
    markdown: Sequelize.STRING
    popularity: Sequelize.INTEGER
    date: Sequelize.DATE
    folder: Sequelize.BOOLEAN
  Entry
