module.exports = [
  '$scope', 'RecipesService', function($scope, RecipesService) {
    $scope.attributes = {
      name: true,
      title: true,
      directions: true,
      ingredients: true,
      description: true,
      servings: true,
      juice: true,
      image: true
    };
    RecipesService.getAll().then(function(recipes) {
      return $scope.recipes = recipes;
    });
    $scope.update = function(recipe) {
      return RecipesSerivce.update(recipe);
    };
    $scope.newRecipe = function() {
      return RecipesService.create().then(function(recipe) {
        return $scope.recipes.push(recipe);
      });
    };
    return $scope.$on('delete', function(evt, recipe) {
      return $scope.recipes.splice($scope.recipes.indexOf(recipe), 1);
    });
  }
];
