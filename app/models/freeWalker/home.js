angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'app/models/freeWalker/home.css',
    templateUrl:'app/models/freeWalker/home.html'
    // controller:'homeCtrl'
  })

  .state({
    name:'budan',
    url:'/budan',
    css:'app/models/bourn/budan.css',
    templateUrl:'app/models/bourn/budan.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'china',
    url:'/china',
    css:'app/models/bourn/china.css',
    templateUrl:'app/models/bourn/china.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'gently',
    url:'/gently',
    css:'app/models/bourn/gently.css',
    templateUrl:'app/models/bourn/gently.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'customization',
    url:'/customization',
    css:'app/models/customization/private-ordering-rem.css',
    templateUrl:'app/models/customization/customization.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'magazine',
    url:'/magazine',
    css:'app/models/customization/magazine.css',
    templateUrl:'app/models/customization/magazine.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'destination1',
    url:'/destination1',
    css:'app/models/customization/destination1.css',
    templateUrl:'app/models/customization/destination1.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'private-ordering-my',
    url:'/private-ordering-my',
    css:'app/models/customization/private-ordering-my.css',
    templateUrl:'app/models/customization/private-ordering-my.html'
    // controller:'homeCtrl'
  })
  
 	// 二级页面框架

})
.controller("ctrl2",function($scope){
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay: 2000,//可选选项，自动滑动
		autoplayDisableOnInteraction:false,
		speed:1000,//滑动速度
		pagination : '.swiper-pagination',
		observe:true,// 启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
		observeParents:true//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
					
	})
})
.controller("cbl",function($scope){
	$(".mudi").on("touchstart",function(){
		$(".stay").show(1000);
	})
})




