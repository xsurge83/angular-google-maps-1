// Generated by CoffeeScript 1.3.3
(function() {
  var initializeGoogleMap, module;

  module = angular.module("ofm.services", []);

  initializeGoogleMap = function(options, $location) {
    var $window;
    $window = $(window);
    $("#map").hide();
    $window.bind('resize', function() {
      return $("#map").css({
        height: ($window.height() - 45) + 'px',
        width: $window.width(),
        top: '45px'
      });
    });
    return new google.maps.Map(document.getElementById("map"), {
      zoom: options.zoom,
      center: new google.maps.LatLng(options.lat, options.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  };

  module.factory("GoogleMap", function($rootScope, $location) {
    var MapData, map;
    map = initializeGoogleMap({
      zoom: 10,
      lat: 10,
      lng: 10
    });
    MapData = {
      zoom: 10,
      lat: 10,
      lng: 10
    };
    $rootScope.$watch((function() {
      return MapData.zoom;
    }), function(zoom, oldValue) {});
    $rootScope.$watch((function() {
      return MapData.lat;
    }), function(lat, oldValue) {
      return console.log('new lat is ' + lat);
    });
    $rootScope.$watch((function() {
      return MapData.lng;
    }), function(lng, oldValue) {});
    google.maps.event.addListener(map, "zoom_changed", function() {
      return $rootScope.$apply(function() {
        return MapData.zoom = newValue;
      });
    });
    return MapData;
  });

}).call(this);
