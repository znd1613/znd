
	angular.module('projectDemo',['ui.router','angularCSS',
		'projectDemo.homePage',
		'projectDemo.second_frame'])	
		.config(function($stateProvider,$urlRouterProvider){


		 $urlRouterProvider.otherwise('/home')


		  $stateProvider
		  .state({
		    name:'register',
		    url:'/register',
		    css:'app/models/freeWalker/register.css',
		    templateUrl:'app/models/freeWalker/register.html'
		    // controller:'homeCtrl'
		  })
		 
		})
		// 点击切换侧边栏隐藏或者出现
		.controller("ctr1",function($scope,$location){
			$scope.istext1=false;
			$scope.istext2=false;
			$scope.istext3=true;
			$scope.lsClick = function(){
				if ($scope.istext3==true) {
					$scope.istext3=false;
					$scope.istext1=false;
					$scope.istext2=true;
				}
				else{
					$scope.istext3=true;
					$scope.istext1=true;
					$scope.istext2=false;
				}
				
   			}
   			// 点击头部左侧图标，统一回到首页部分
   			$scope.backClick=function(){
   				$location.url('/home');
   			}

		})



