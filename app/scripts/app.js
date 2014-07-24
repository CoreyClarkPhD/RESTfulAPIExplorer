'use strict';

/**
 * @ngdoc overview
 * @name toolsDemoApp
 * @description
 * # toolsDemoApp
 *
 * Main module of the application.
 */
(function(){
  var app = angular.module('app', [
                                    'ngAnimate',
                                    'ngResource',
                                    'ngRoute',
                                    'ui.bootstrap',
                                    'apiExplorer'
                                  ]);
    app.controller(
      'appCtrl', ['$scope', function ($scope) {
          var self = $scope;
          self.value = 0;

        }]);

    // app.config(function ($routeProvider) {
    //   $routeProvider
    //     .when('/', {
    //       templateUrl: 'views/main.html',
    //       controller: 'MainCtrl'
    //     })
    //     .when('/about', {
    //       templateUrl: 'views/about.html',
    //       controller: 'AboutCtrl'
    //     })
    //     .otherwise({
    //       redirectTo: '/'
    //     });
    // });
    
})();

