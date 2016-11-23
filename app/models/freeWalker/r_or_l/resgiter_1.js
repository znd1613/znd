angular.module('projectDemo.register_1',[])
.config(function($stateProvider,$urlRouterProvider){
		  $stateProvider
		 .state({
		    name:'register.resgiter_1',
		    url:'/resgiter_1',
		    css:'app/models/freeWalker/r_or_l/resgiter_1.css',
		    templateUrl:'app/models/freeWalker/r_or_l/resgiter_1.html'
		    // controller:'homeCtrl'
		  })
})
.controller("reg",function($scope,$location){
	// 邮箱的页面
	var email=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	$(".user_name").blur(function(){
		if (email.test($(".user_name").val())) {
			$(".user_name").css("border","1px solid green")
			$(".user_name").attr("title","right")
		}else{
			$(".user_name").css("border","1px solid red")
			
			return;
		}
	})
	// 密码框的验证
	var pass=/^[a-z0-9_-]{5,18}$/;
	$(".reg_pass").blur(function(){
		if (pass.test($(".reg_pass").val())) {
			$(".reg_pass").css("border","1px solid green")
			$(".reg_pass").attr("title","right")
		}else{
			$(".reg_pass").css("border","1px solid red")
			return;
		}
	})

	// 验证重复密码
	$(".repeat_input").blur(function(){
		if ($(".repeat_input").val()==$(".reg_pass").val()) {
			$(".repeat_input").css("border","1px solid green")
			$(".repeat_input").attr("title","right")
		}else{
			alert("两次密码请输入一致");
			$(".repeat_input").css("border","1px solid red")
			return;
		}
	})
	$(".sub").click(function(){
		if (($(".repeat_input").attr("title")=="right")&&($(".reg_pass").attr("title")=="right")
			&&($(".user_name").attr("title")=="right")) {
			var register_news={
			user_name:$(".user_name").val(),
			password:$(".reg_pass").val()
			}
			localStorage.setItem($(".user_name").val(),JSON.stringify(register_news));
			$location.url('/home');
			 window.location.reload();
			// localStorage.clear();
		}else{
			alert("注册信息有误，请重新输入！")
		}
		
	})
})