module.exports = ($q, $http, API_URL) ->
  (service, resource) ->

    service.findAll = (query) ->
      parameters = for key, val of query
        "#{key}=#{val}"

      $q (resolve, reject) ->
        $http.get "#{API_URL}/#{resource}?#{parameters.join ','}", query
          .success (entries) ->
            resolve entries

    service.getAll = ->
      $q (resolve, reject) ->
        $http.get "#{API_URL}/#{resource}", {}
          .success (entries) ->
            resolve entries

    service.get = ->
      $q (resolve, reject) ->
        $http.get "#{API_URL}/#{resource}/#{entry.id}", {}
          .success (entries) ->
            resolve entries

    service.update = (entry) ->
      $q (resolve, reject) ->
        $http.put "#{API_URL}/#{resource}/#{entry.id}", entry
          .success (entry) ->
            resolve entry

    service.delete = (entry) ->
      $q (resolve, reject) ->
        $http.delete "#{API_URL}/#{resource}/#{entry.id}", {}
          .success (entry) ->
            resolve entry

    service.create = (entry) ->
      $q (resolve, reject) ->
        $http.post "#{API_URL}/#{resource}", entry
          .success (entry) ->
            resolve entry
