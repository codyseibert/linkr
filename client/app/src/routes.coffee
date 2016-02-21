module.exports = (
  $stateProvider,
  $urlRouterProvider
) ->

  $urlRouterProvider.otherwise '/'

  $stateProvider
    .state 'main',
      url: '/'
      views:
        'main':
          controller: 'MainController'
          templateUrl: 'main/main.html'


  return this
