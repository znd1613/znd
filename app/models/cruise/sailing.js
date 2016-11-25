angular.module('projectDemo.sailingPage',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
		    .state( 'second_frame.cruise.sailing',{
		    url:'/sailing',
		    css:'app/models/cruise/sailing.css',
		    templateUrl:'app/models/cruise/sailing.html'
		  })
 
    }])

   .service('getCruise',function ($http){
    	 this.sailingData= function () {
            return $http.get('./json/cruise.json/sailingBanner.json');
        };
    })
    .controller('sailingCtrl',function($scope,getCruise){
	  getCruise.sailingData().success(function (res) {
	  	$scope.data=res.data;
	  	console.log(res.data);
	  	 $scope.slider = function () {
         var mySwiper = new Swiper ('#sailing .swiper-container', {
		    pagination : '#sailing  .swiper-pagination',
		    loop : true,
		    autoplay : 1000,
		    loopAdditionalSlides : 1,
		    paginationType : 'fraction',
		    updateOnImagesReady : true,
		    autoplayDisableOnInteraction : false,
		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper

 
         })    
       };
        //执行轮播图service
        $scope.slider();
	  });
})
