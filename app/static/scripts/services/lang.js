;(function(angular) {
	'use strict';

	angular.module('app.services').factory('Lang', ['$rootScope',
		function($rootScope) {
			var spanish = {
				title: 'Servicio de Internet por Fibra e Inalámbrico',
				subTitle: '25 años de servicio',
				services: {
					title: 'Servicios',
					wirelessTitle: 'Internet Inálambrico',
					camerasTitle: 'Instalación de Camaras de Vigilancia',
					fiberTitle: 'Internet por Fibra Óptica'
				},
				citiesAvailable: {
					title: 'Ciudades Disponible'
				},
				contact: {
					address: {
						title: 'Dirección',
						primary: '6 y 7 calle, 4ta. Avenida',
						secondary: 'Barrio El Centro, Puerto Cortés, Honduras.'
					},
					phones: {
						title: 'Teléfonos',
						content: '####-####'
					},
					email: {
						title: 'E-mail'
					},
					schedule: {
						title: 'Horarios'
					}
				},
				copyright: 'Abemar © 2017 Todos los Derechos Reservados.'
			};

			var english = {
				title: 'Wireless and Fiber Internet Service Provider',
				subTitle: '25 years of service',
				services: {
					title: 'Services',
					wirelessTitle: 'Wireless Internet',
					camerasTitle: 'Surveillance Cameras Setup',
					fiberTitle: 'Fiber Internet'
				},
				citiesAvailable: {
					title: 'Cities Available'
				},
				contact: {
					address: {
						title: 'Address',
						primary: '6 y 7 calle, 4ta. Avenida',
						secondary: 'Barrio El Centro, Puerto Cortés, Honduras.'
					},
					phones: {
						title: 'Phones',
						content: '####-####'
					},
					email: {
						title: 'E-mail'
					},
					schedule: {
						title: 'Schedule'
					}
				},
				copyright: 'Abemar © 2017 All Rights Reserved.'
			};

			var languageService = {};

			languageService.setSpanish = function() {
				$rootScope.lang = spanish;
				$rootScope.option = 'es';

				if (typeof (Storage) !== undefined) {
					localStorage.setItem('langOption', 'es');
				}
			};

			languageService.setEnglish = function() {
				$rootScope.lang = english;
				$rootScope.option = 'en';

				if (typeof (Storage) !== undefined) {
					localStorage.setItem('langOption', 'en');
				}
			};

			languageService.loadDefaultLanguage = function() {
				if (typeof (Storage) === undefined) {
					this.setSpanish();
					return;
				}

				var currentLang = localStorage.getItem('langOption');

				if (currentLang === 'en') {
					this.setEnglish();
				} else {
					this.setSpanish();
				}
			};

			languageService.loadDefaultLanguage();

			return languageService;
		}
	]);
})(angular);
