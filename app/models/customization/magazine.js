angular.module('projectDemo.magazine', ['projectDemo.article', 'projectDemo.destination1'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'second_frame.magazine',
				url: '/magazine',
				css: 'app/models/customization/magazine.css',
				templateUrl: 'app/models/customization/magazine.html',
			})
			//			.state({
			//				name: 'article',
			//				url: '/article',
			//				css: 'app/models/customization/article.css',
			//				templateUrl: 'app/models/customization/article.html',
			//			})
	})
	.service('getmagaMoreData', function($http) {
		this.magaMoreD = function() {

			return $http.get('./json/magazine_json/maga-more.json');
		};
	})
	.service('getArticleData', function($http) {
		this.magaMoreArti = function() {
			return $http.get('./json/magazine_json/maga-aritical.json');
		};
		this.magaMoreArtiLx = function() {
			return $http.get('./json/magazine_json/maga-ariticalLx.json');
		};
		this.magaMoreArtiSs = function() {
			return $http.get('./json/magazine_json/maga-ariticalSs.json');
		};
	})
	.controller('magaMore', function($scope, getmagaMoreData) {

		getmagaMoreData.magaMoreD().success(function(res) {
			//			$scope.data = res.data;
			var strH = "";
			var x = 0;
			var m = 6;

			function show(x, m) {
				for (var i = 0; i < res.data.length; i++) {
					if (i >= x && i < m) {

						strH += '<div class="item margin-bottom-5 left " data-index="0" ng-repeat="x in data"><div class="padding-right-10"><a href="/destination/695.html" class="main-img" rel="nofollow" style="background-image: url(' + res.data[i].img + '); height: 112px;"></a>';
						strH += '<div class="text-center margin-top-5"><a href="/destination/695.html" class="color-gray">' + res.data[i].name + '<span class="hidden"> 〖赞品定制〗 </span></a></div></div></div>'
					}
				}
				$('.destination-items .item-wrap').append(strH);

			}
			show(x, m);
			$('.show-more').click(function() {
				strH = "";
				x = m;
				m = x + 6;
				show(x, m);
				if (m = 11) {
					$(this).hide();
					$(".link-all").css("display", "inline-block")
					return;
				}
			})

		});

	})
	.controller('magaArticle', function($scope, getArticleData) {
		$scope.clickAll = function() {
			getArticleData.magaMoreArti().success(function(res) {
				$scope.title = res.title;
				$scope.arr = res.hotArticle;
				console.log(res);

			});
		};
		$scope.clickLx = function() {
			getArticleData.magaMoreArtiLx().success(function(res) {
				$scope.title = res.title;
				$scope.arr = res.hotArticle;
				console.log(res);

			});
		};
		$scope.clickSs = function() {
			getArticleData.magaMoreArtiSs().success(function(res) {
				$scope.title = res.title;
				$scope.arr = res.hotArticle;
				console.log(res);

			});
		};
		
		getArticleData.magaMoreArti().success(function(res) {
			$scope.title = res.title;
			$scope.arr = res.hotArticle;
			console.log(res);

		});

	})