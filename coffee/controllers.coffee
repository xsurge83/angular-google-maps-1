
module = angular.module("myApp.controllers", [])

module.controller "MainCtrl", ($scope, $http, GoogleMap) ->
  $scope.map = GoogleMap
  $http.get('/data/locations.json')
    .success((locations)->
      console.log 'locations %j', locations 
      if Array.isArray locations 
        locations.forEach (loc) -> 
          $scope.map.addPlace(loc.lat, loc.lng)
      )



module.controller "HomeCtrl", ($scope) ->
module.controller "SearchCtrl", ($scope) ->


# Using this?
module.controller "MapCtrl", ($scope) ->