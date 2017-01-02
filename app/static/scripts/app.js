;(function(angular) {
	'use strict';

	angular.module('app.controllers', []);
	angular.module('app.services', []);
	angular.module('app.directives', []);

	angular.module('app', [
		'app.controllers',
		'app.services',
		'app.directives',

		'ui.router',
		'ui.bootstrap'
	]);

})(angular);
