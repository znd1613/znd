angular.module('projectDemo.private-ordering-my', ['projectDemo.customization'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'second_frame.customization.private-ordering-my',
				url: '/private-ordering-my',
				css: 'app/models/customization/private-ordering-my.css',
				templateUrl: 'app/models/customization/private-ordering-my.html',
			})
	})
	.controller("cust", function($scope) {
		console.log(2);
		console.log($('#private-ordering-my'));
	})