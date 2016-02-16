module.exports = function($q, $http, API_URL) {
  return function(service, resource) {
    service.findAll = function(query) {
      var key, parameters, val;
      parameters = (function() {
        var results;
        results = [];
        for (key in query) {
          val = query[key];
          results.push(key + "=" + val);
        }
        return results;
      })();
      return $q(function(resolve, reject) {
        return $http.get(API_URL + "/" + resource + "?" + (parameters.join(',')), query).success(function(entries) {
          return resolve(entries);
        });
      });
    };
    service.getAll = function() {
      return $q(function(resolve, reject) {
        return $http.get(API_URL + "/" + resource, {}).success(function(entries) {
          return resolve(entries);
        });
      });
    };
    service.get = function() {
      return $q(function(resolve, reject) {
        return $http.get(API_URL + "/" + resource + "/" + entry.id, {}).success(function(entries) {
          return resolve(entries);
        });
      });
    };
    service.update = function(entry) {
      return $q(function(resolve, reject) {
        return $http.put(API_URL + "/" + resource + "/" + entry.id, entry).success(function(entry) {
          return resolve(entry);
        });
      });
    };
    service["delete"] = function(entry) {
      return $q(function(resolve, reject) {
        return $http["delete"](API_URL + "/" + resource + "/" + entry.id, {}).success(function(entry) {
          return resolve(entry);
        });
      });
    };
    return service.create = function(entry) {
      return $q(function(resolve, reject) {
        return $http.post(API_URL + "/" + resource, entry).success(function(entry) {
          return resolve(entry);
        });
      });
    };
  };
};
