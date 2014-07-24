'use strict';

/**
 * @ngdoc function
 * @name toolsDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toolsDemoApp
 */
 (function(){
	var app = angular.module('apiExplorer', ['ui.bootstrap']);


	  app.controller('APIExplorerCtrl',['$scope', function ($scope) {
	   		var self = $scope;
	   		self.val = 0;
          	this.queries = [];
	  }]);
	  app.controller('APIBuilderCtrl',['$scope', function($scope){
				this.type = 'GET';
				this.url = '';

				this.SaveQuery = function(queries){
					queries.push({
						type: 	this.type,
						url: 	this.url,
						response: 'Waiting For Response',
						headers: '',
						body: ''
					});
				};
			}]);
	  app.controller('APIViewerCtrl',['$scope', '$http', function($scope, $http){

				this.Execute = function(query){
					$http({method: query.type, url: query.url}).
					    success(function(data, status, headers, config) {
					      query.response = data;
					      query.headers = headers();
					      query.status = status;
					      query.config  = config;
					    }).
					    error(function(data, status, headers, config) {
					      query.status = status;
					      query.response = 'ERROR: ' + data;
					      query.headers = headers();
					      query.config = config;
					    });
				};
			}]);

	  app.directive('apiExplorer', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/api-explorer.html',
			controller: 'APIExplorerCtrl',
			controllerAs: 'api'
		};
	});

	  app.directive('apiBuilder', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/api-builder.html',
			controller: 'APIBuilderCtrl',
			controllerAs: 'builder'
		};
	});

	app.directive('apiViewer', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/api-viewer.html',
			controller: 'APIViewerCtrl',
			controllerAs: 'viewer'
		};
	});
 })();

