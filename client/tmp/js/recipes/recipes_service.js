module.exports = [
  '$q', '$http', function($q, $http) {
    var baseUrl;
    baseUrl = 'http://192.168.1.19:8081';
    this.getAll = function() {
      return $q(function(resolve, reject) {
        return $http.get(baseUrl + "/recipes", {}).success(function(recipes) {
          return resolve(recipes);
        });
      });
    };
    this.update = function(recipe) {
      return $q(function(resolve, reject) {
        return $http.put(baseUrl + "/recipes/" + recipe.id, recipe).success(function(recipe) {
          return resolve(recipe);
        });
      });
    };
    this["delete"] = function(recipe) {
      return $q(function(resolve, reject) {
        return $http["delete"](baseUrl + "/recipes/" + recipe.id, {}).success(function(recipe) {
          return resolve(recipe);
        });
      });
    };
    this.create = function() {
      return $q(function(resolve, reject) {
        return $http.post(baseUrl + "/recipes", {}).success(function(recipe) {
          console.log(recipe);
          return resolve(recipe);
        });
      });
    };
    return this;
  }
];
