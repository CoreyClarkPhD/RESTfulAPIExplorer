'use strict';

/**
 * @ngdoc function
 * @name toolsDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toolsDemoApp
 */
angular.module('toolsDemoApp', ['apiExplorer'])
  .controller('MainCtrl', function ($scope) {
  	var self = $scope;
          self.value = 0;
  });
