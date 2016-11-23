angular.module('projectDemo.second_frame',['projectDemo.villa'])

.controller("ct1",function($scope){
     $scope.isp1=false;
})


.config(function($stateProvider){

	$stateProvider
	.state({
    name:'second_frame',
    url:'/second_frame',
    css:'app/models/second_frame.css',
    templateUrl:'app/models/second_frame.html',
  //   controller:function($state){
    	
		// $state.go('second_frame.freeWalker')
  //   }
  })
    // 自由行
	.state({
    name:'second_frame.freeWalker',
    url:'/freeWalker',
    css:'app/models/freeWalker/freeWalker.css',
    templateUrl:'app/models/freeWalker/freeWalker.html'
  })
    // 别墅
  //   .state({
  //   name:'second_frame.villa',
  //   url:'/villa',
  //   css:'app/models/freeWalker/villa.css',
  //   templateUrl:'app/models/freeWalker/villa.html'
  // })
    // 目的地
    .state({
    name:'second_frame.destination',
    url:'/destination',
    css:'app/models/bourn/destination.css',
    templateUrl:'app/models/bourn/destination.html'
  })
    // 赞品订制
    .state({
    name:'second_frame.praise',
    url:'/praise',
    css:'app/models/bourn/praise.css',
    templateUrl:'app/models/bourn/praise.html'
  })

    // 邮轮
    .state({
    name:'second_frame.cruise',
    url:'/cruise',
    css:'app/models/cruise/cruise.css',
    templateUrl:'app/models/cruise/cruise.html'
  })

    // 国内短假
    .state({
    name:'second_frame.holiday',
    url:'/holiday',
    css:'app/models/cruise/holiday.css',
    templateUrl:'app/models/cruise/holiday.html'
  })

    // 私人定制
    .state({
    name:'second_frame.customization',
    url:'/customization',
    css:'app/models/customization/customization.css',
    templateUrl:'app/models/customization/customization.html'
  })
    // 杂志
    .state({
    name:'second_frame.magazine',
    url:'/magazine',
    css:'app/models/customization/magazine.css',
    templateUrl:'app/models/customization/magazine.html',
    // controller:function($scope){
        
    //         $scope.isp1=true;    
    // }

  })

})

