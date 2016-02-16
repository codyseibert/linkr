module.exports = {
  bindings: {
    entries: '<'
  },
  templateUrl: 'entries/entries.html',
  controller: function($scope, EntriesService) {
    var currentEntry;
    this.entry = {};
    currentEntry = null;
    this.createEntry = (function(_this) {
      return function(entry) {
        entry = {
          title: entry.title
        };
        return EntriesService.create(entry).then(function(created) {
          _this.entries.push(created);
          return _this.entry = {};
        });
      };
    })(this);
    this.deleteEntry = (function(_this) {
      return function(index) {
        return EntriesService["delete"](_this.entries[index]).then(function() {
          return _this.entries.splice(index, 1);
        });
      };
    })(this);
    return this;
  }
};
