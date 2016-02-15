require('./routes');

require('./models/recipe');

require('./sequelize').sync().then(function() {
  return require('./app').listen(9000);
});
