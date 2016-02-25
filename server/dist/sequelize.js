var Sequelize;

Sequelize = require('sequelize');

module.exports = (function() {
  return new Sequelize(process.env.LINKR_DB_NAME || 'linkr', process.env.LINKR_DB_USER || 'linkr', process.env.LINKR_DB_PASS || 'linkr', {
    host: process.env.LINKR_HOST || 'localhost'
  });
})();
