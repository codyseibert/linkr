module.exports = function($q, $http, CrudDecorator) {
  CrudDecorator(this, 'entries');
  return this;
};
