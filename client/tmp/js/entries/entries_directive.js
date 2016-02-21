module.exports = function($compile, EntriesService) {
  return {
    restrict: 'E',
    scope: {
      entries: '='
    },
    templateUrl: 'entries/entries.html',
    link: function(scope, elem, attr) {
      return scope.entryClicked = function(index) {
        var id;
        id = scope.entries[index].id;
        console.log(id);
        return EntriesService.findAll({
          entryId: id
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
    }
  };
};
