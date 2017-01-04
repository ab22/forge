;(function(angular) {
	'use strict';

	angular.module('app.services').factory('Lang', ['$rootScope',
		function($rootScope) {
			var spanish = {
				title: 'Servicio de Internet por Fibra e Inalámbrico',
				subTitle: '25 años de servicio',
				services: {
					title: 'Servicios',
					wireless: {
						title: 'Internet Inalámbrico',
						content: 'Contamos con la mejor estructura inalámbrica en Puerto Cortés con servicio sin interrumpciones 24/7 y atención inmediata. Nuestro servicio esta orientado a empresas, agencias navieras ó aduaneras, pequeños negocios y residencias.'
					},
					cameras: {
						title: 'Camaras de Vigilancia',
						content: 'Instalación de cámaras de vigilancia para monitoreo de su empresa o casa desde cualquier dispositivo y desde parte del mundo.'
					},
					fiber: {
						title: 'Internet por Fibra Óptica',
						content: 'Cobertura en toda la ciudad de Puerto Cortés y enlace de su empresa en cualquier parte de Honduras a través de Canal de Datos e Internet para un mejor manejo de ambiente de trabajo en su empresa. Ancho de banda garantizado.'
					},
					telephony: {
						title: 'Telefonía IP',
						content: 'Contamos con el servicio de telefonía IP para empresas o casas de habitación con la cantidad de números que requieras.'
					}
				},
				reach: {
					title: 'Alcance'
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
					wireless: {
						title: 'Wireless Internet',
						content: 'The best wireless structure in Puerto Cortés with uninterrumpted service 24/7 and immediate support. Our service is oriented for businesses, shipping or custom agencies and homes.'
					},
					cameras: {
						title: 'Surveillance Cameras Setup',
						content: 'Live monitoring for your home or business from any part of the world on any device.'
					},
					fiber: {
						title: 'Fiber Internet',
						content: 'Coverage in all of Puerto Cortés for home and business plans. Coverage available in all of Honduras for business plans through Data Channels and Internet. Bandwidth guaranteed.'
					},
					telephony: {
						title: 'IP Telephony',
						content: 'Available for homes and businesses with the amount of numbers you require.'
					}
				},
				reach: {
					title: 'Places We Reach'
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
