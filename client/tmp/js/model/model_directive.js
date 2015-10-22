module.exports = [
  'RecipesService', function(RecipesService) {
    return {
      restrict: 'E',
      scope: {
        model: '=',
        key: '@',
        display: '@',
        attributes: '='
      },
      link: function(scope, elem, attr) {
        scope.expanded = {};
        scope.toggle = function(model) {
          return scope.expanded[model[scope.key]] = !scope.expanded[model[scope.key]];
        };
        scope.save = function(model) {
          return RecipesService.update(model);
        };
        return scope["delete"] = function(model) {
          RecipesService["delete"](model);
          return scope.$emit('delete', model);
        };
      },
      templateUrl: 'model/model.html'
    };
  }
];
