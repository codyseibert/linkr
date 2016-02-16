require './routes'
require './models/entry'
require './relationships'
require('./sequelize').sync().then ->
  require('./app').listen 9000
