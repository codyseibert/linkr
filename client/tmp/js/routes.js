module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('main', {
    url: '/',
    views: {
      'main': {
        template: '<main></main>'
      }
    }
  });
  return this;
};
