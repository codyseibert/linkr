angular.module("linkr").run(["$templateCache", function($templateCache) {$templateCache.put("entries/entries.html","\n<div ng-repeat=\"entry in entries\" ng-click=\"entryClicked($index)\" class=\"entry\"> \n  <div class=\"title\">{{entry.title}}</div>\n  <button ng-click=\"deleteEntry($index)\">X</button>\n</div>\n<div class=\"entry\">\n  <input ng-model=\"entry.title\"/>\n  <button ng-click=\"createEntry(entry)\">Create</button>\n</div>");
$templateCache.put("main/main.html","\n<div id=\"main\"></div>");}]);