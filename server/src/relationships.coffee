Entry = require './models/entry'

module.exports = do ->
  Entry.hasMany Entry
  Entry.belongsTo Entry
