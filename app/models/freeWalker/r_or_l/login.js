angular.module('projectDemo.login',[])
.config(function($stateProvider,$urlRouterProvider){
		  $stateProvider
		 .state({
		    name:'register.login',
		    url:'/login',
		    css:'app/models/freeWalker/r_or_l/login.css',
		    templateUrl:'app/models/freeWalker/r_or_l/login.html'
		    // controller:'homeCtrl'
		  })
})
.controller("lg",function($scope,$location){

	$(".login_sub").on("touchstart",function(){
		if ($(".login_name").val()==""||$(".login_pass").val()=="") {
			alert("请不要为空，请重新输入！");
			return;
		}
		for (var i = 0; i < localStorage.length; i++) {
			var key=localStorage.key(i);
			var value=JSON.parse(localStorage.getItem(key));
			if ($(".login_name").val()==key&&$(".login_pass").val()==value.password) {
				alert("欢迎回来赞拿度！");
				$(".login_name").val("");
				$(".login_pass").val("");
				return;
			}
		}
		alert("您输入的邮箱名或者密码有误，请重新输入！")

	})
})