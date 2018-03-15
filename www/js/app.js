// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('GeneralController', generalController);

function generalController($scope) {
  var centesimas = 0;
  var segundos = 0;
  $scope.texto = 'Inicio';
  $scope.tiempo = 0;
  $scope.velocidad = 0;
  $scope.profundidad = 0;

  $scope.calculo = function () {
    if($scope.texto == 'Inicio'){
      $scope.texto = 'Parar';
      centesimas = 0;
      segundos = 0;
      Centesimas.innerHTML = centesimas;
      Segundos.innerHTML = segundos;
      $scope.control = setInterval(function () {
        if (centesimas < 99) {
          centesimas++;
          if (centesimas < 10) {
            centesimas = "0" + centesimas;
          }
          Centesimas.innerHTML = centesimas;
        }
        if (centesimas == 99) {
          centesimas = -1;
        }
        if (centesimas == 0) {
          segundos ++;
          Segundos.innerHTML = segundos;
        }
      }, 10);
    } else {
      $scope.texto = 'Inicio';
      clearInterval($scope.control);
      $scope.tiempo = segundos + '.' + centesimas;
      $scope.velocidad = Math.round((9.81 * $scope.tiempo) * 100) / 100;
      $scope.profundidad = Math.round(((9.81 * Math.pow($scope.tiempo, 2)) / 2) * 100) / 100;
    }
  };
}
