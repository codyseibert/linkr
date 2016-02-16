module.exports = ($q, $http, CrudDecorator) ->
  CrudDecorator @, 'entries'
  return this
