angular.module('projectDemo.customization', ['projectDemo.private-ordering-my'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'second_frame.customization',
				url: '/customization',
				css: 'app/models/customization/customization.css',
				templateUrl: 'app/models/customization/customization.html',
			})
	})
	.controller("primy", function($scope) {
		console.log(2);
	})