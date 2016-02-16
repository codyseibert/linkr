module.exports = {
  templateUrl: 'main/main.html',
  controller: function($scope, $compile, EntriesService) {
    EntriesService.findAll({
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
    return this;
  }
};
