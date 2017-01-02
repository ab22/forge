;(function(angular) {
	'use strict';

	angular.module('app.controllers').controller('LayoutCtrl', ['$scope',
		function($scope) {
			$scope.topBar = {
				isCollapsed: true
			};
		}
	]);
})(angular);
