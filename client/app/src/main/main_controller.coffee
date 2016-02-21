module.exports = ($scope, $compile, EntriesService) ->

  EntriesService.findAll entryId: null
    .then (entries) =>
      console.log entries
      $scope.entries = entries
      elm = angular.element '<entries entries="entries"></entries>'
      angular.element(document.querySelector '#main').append elm
      $compile(elm)($scope)

  # $scope.$on 'categoryClicked', (evt, category) ->
  #   $scope.$broadcast 'loadLinks', category
  #
  # $scope.$on 'linkClicked', (evt, category) ->
  #   $scope.$broadcast 'loadNotes', category
