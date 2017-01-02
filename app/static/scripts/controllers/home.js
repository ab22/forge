;(function(angular) {
	'use strict';

	angular.module('app.controllers').controller('HomeCtrl', ['$scope', '$rootScope', 'Lang',
		function($scope, $rootScope, Lang) {
			$scope.lang = $rootScope.lang;
			$scope.langOption = $rootScope.option;

			$scope.loadEnglish = function() {
				Lang.setEnglish();
				$scope.lang = $rootScope.lang;
				$scope.langOption = $rootScope.option;
			};

			$scope.loadSpanish = function() {
				Lang.setSpanish();
				$scope.lang = $rootScope.lang;
				$scope.langOption = $rootScope.option;
			};
		}
	]);
})(angular);
