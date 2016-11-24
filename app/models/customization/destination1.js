angular.module('projectDemo.destination1', [])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'destination',
				url: '/destination',
				css: 'app/models/customization/destination.css',
				templateUrl: 'app/models/customization/destination.html',
			})
	})
	.controller("dest1", function($scope) {
		console.log(1);

	})
	.service('getmagaMoreData', function($http) {
		this.magaMoreD = function() {
			return $http.get('./json/magazine_json/maga-more.json');
		};
	})
	.controller('destMore', function($scope, getmagaMoreData) {
		console.log('2');
		getmagaMoreData.magaMoreD().success(function(res) {
			//			$scope.data = res.data;
			var strH = "";

				for (var i = 0; i < res.data.length; i++) {
						strH+='<dl><dt style="background-image: url('+ res.data[i].img +') no-repeat"><a href="##"></a></dt>';
						strH+='<dd><a href="##">'+ res.data[i].name +'</a></dd></dl>';
					}
				$('#page-destination .destination-items').html(strH);

			

		});

	});