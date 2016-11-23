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
 	// 二级页面框架

})
.controller("ctrl2",function($scope,$http){
  // 轮播图
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay: 2000,//可选选项，自动滑动
		autoplayDisableOnInteraction:false,
		speed:1000,//滑动速度
		pagination : '.swiper-pagination',
		observe:true,// 启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
		observeParents:true//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
					
	})
// 入住时间的显示
  $(".mudi").on("touchstart",function(){
    $(".stay").show(1000);
  })

// 品介优选的json
  $http.get("json/home_json/character.json")
  .success(function(req){ 
    var str="";
    var m=1;
    var x=0;
    function show(x,m){
      $.each(req.data, function(i,elem) {
        if (i>=x&&i<=m) {
          str+='<li><img src="'+elem.img+'">'
          str+='<p>'+elem.name+'</p></li>'
        }
       });
       $(".choice ul").html(str)
    }
    show(x,m);
     $("#more_character").click(function(){
        x=m+1;
        m+=4;
        show(x,m);
       if (m==req.data.length-1) {
        $("#more_character").hide();
        return;
       }
     })
  })

})





