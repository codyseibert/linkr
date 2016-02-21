module.exports = function($scope, $compile, EntriesService) {
  return EntriesService.findAll({
    entryId: null
  }).then((function(_this) {
    return function(entries) {
      var elm;
      console.log(entries);
      $scope.entries = entries;
      elm = angular.element('<entries entries="entries"></entries>');
      angular.element(document.querySelector('#main')).append(elm);
      return $compile(elm)($scope);
    };
  })(this));
};
