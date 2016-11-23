
	angular.module('projectDemo',['ui.router','angularCSS',
		'projectDemo.homePage','projectDemo.second_frame','projectDemo.register'])	
		.config(function($stateProvider,$urlRouterProvider){

		 $urlRouterProvider.otherwise('/home')
		 
		})
		// 点击切换侧边栏隐藏或者出现
		.controller("ctr1",function($scope,$location){
			$scope.istext1=false;
			$scope.istext2=false;
			$scope.istext3=true;
			$scope.lsClick = function(){
				if ($scope.istext3==true) {
					$(".centre").show();
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
		// 当注册成功的时候，侧边栏会自动显示最新注册用户名，同时注册登录模块消失
		.controller("reg_success",function($scope,$location){
			// localStorage.clear();
				// location.reload(true);
			// 	if (localStorage.length!=0) {
			// 		var key=localStorage.key(localStorage.length-1);
			// 		var value=JSON.parse(localStorage.getItem(key));
			// 		$(".join").hide();
			// 		$(".success").show();
			// 		$(".input_user").html(value.user_name);
			// 		$(".exit_login").show();
			// }
			$(".exit_login").on("touchstart",function(){
				$(".join").show();
				$(".success").hide();
				$(".input_user").html("");
				$(".exit_login").hide();
			})
		})



