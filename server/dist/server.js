require('./routes');

require('./models/entry');

require('./relationships');

require('./sequelize').sync().then(function() {
  return require('./app').listen(9000);
});
