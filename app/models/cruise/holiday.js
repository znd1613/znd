angular.module('projectDemo.holidayPage',['projectDemo.particularsPage','projectDemo.commentsPage'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('second_frame.holiday',{
				    url:'/holiday',
				    css:'app/models/cruise/holiday.css',
				    templateUrl:'app/models/cruise/holiday.html',
				     
				  })
            

    }])
    .service('getHolidayData',function ($http){
    	 this.holidayData= function () {
            return $http.get('./json/cruise.json/holiday.json');
        };
    }) 
//  .service('moreEvent',function () {
//      this.addClick = function () {
//          //更多事件
//          
//      }
//  })
     .controller('holidayCtrl',function($scope,getHolidayData,$css,$timeout){
        console.log('2');
 getHolidayData.holidayData().success(function (res) { 
            $scope.data=res['snow'][0]["data"];
            $scope.num=3;
            $scope.hideH=false;
            $scope.flag=true;
            $scope.lodingMore=function(){
            	$scope.num=$scope.num+2;
            		$scope.flag=false;
            	
            	$timeout(function(){
            		$scope.flag=true;
            	},1000)

            
            	if($scope.num==$scope.data.length){
            		$scope.hideH=true;
            	}
             
            }

            
            	
                
            })
           
        });
       
//  });
