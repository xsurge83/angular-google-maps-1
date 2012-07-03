
module = angular.module("myApp.controllers", [])

module.controller "MainCtrl", ($scope, GoogleMap) ->
  $scope.map = GoogleMap


module.controller "HomeCtrl", ($scope) ->
module.controller "SearchCtrl", ($scope) ->


# Using this?
module.controller "MapCtrl", ($scope) ->