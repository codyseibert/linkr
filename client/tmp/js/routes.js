module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('recipes', {
    url: '/',
    views: {
      'main': {
        controller: 'RecipesController',
        templateUrl: 'recipes/recipes.html'
      }
    }
  });
  return this;
};
