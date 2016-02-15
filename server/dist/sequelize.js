var Sequelize;

Sequelize = require('sequelize');

module.exports = (function() {
  return new Sequelize('linkr', 'linkr', 'linkr', {
    host: 'localhost'
  });
})();
