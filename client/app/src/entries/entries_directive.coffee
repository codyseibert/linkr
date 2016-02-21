module.exports = ($compile, EntriesService) ->

  restrict: 'E'

  scope:
    entries: '='

  templateUrl: 'entries/entries.html'

  link: (scope, elem, attr) ->

    scope.entryClicked = (index) ->
      id = scope.entries[index].id
      console.log id
      EntriesService.findAll entryId: id
        .then (entries) =>
          console.log entries
          $scope.entries = entries
          elm = angular.element '<entries entries="entries"></entries>'
          angular.element(document.querySelector '#main').append elm
          $compile(elm)($scope)

          
    # @entry = {}
    # currentEntry = null
    #
    # @createEntry = (entry) =>
    #   entry =
    #     title: entry.title
    #   EntriesService.create entry
    #     .then (created) =>
    #       @entries.push created
    #       @entry = {}
    #
    # @deleteEntry = (index) =>
    #   EntriesService.delete @entries[index]
    #     .then =>
    #       @entries.splice index, 1
