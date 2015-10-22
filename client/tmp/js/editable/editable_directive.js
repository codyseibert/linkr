module.exports = [
  function() {
    return {
      restrict: 'E',
      scope: {
        attribute: '@',
        model: '='
      },
      link: function(scope, elem, attr) {},
      templateUrl: 'editable/editable.html'
    };
  }
];
