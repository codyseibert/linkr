module.exports =

  bindings:
    entries: '<'

  templateUrl: 'entries/entries.html'

  controller: ($scope, EntriesService) ->
    @entry = {}
    currentEntry = null

    @createEntry = (entry) =>
      entry =
        title: entry.title
      EntriesService.create entry
        .then (created) =>
          @entries.push created
          @entry = {}

    @deleteEntry = (index) =>
      EntriesService.delete @entries[index]
        .then =>
          @entries.splice index, 1

    return this
