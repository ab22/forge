;(function(angular) {
	'use strict';

	angular.module('app').config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			var viewsPath = 'static/views/';
			$urlRouterProvider.otherwise('/main/home');

			$stateProvider.
				state('main', {
					url: '/main',
					templateUrl: viewsPath + 'layout.html',
					controller: 'LayoutCtrl'
				}).state('main.home', {
					url: '/home',
					templateUrl: viewsPath + 'home.html',
					controller: 'HomeCtrl'
				});
		}
	]);
})(angular);
