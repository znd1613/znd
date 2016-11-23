angular.module('projectDemo.sailingPage',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
		    .state( 'second_frame.cruise.sailing',{
		    url:'/sailing',
		    css:'app/models/cruise/sailing.css',
		    templateUrl:'app/models/cruise/sailing.html'
		  })
 
    }])

// .service('getSailingData',function ($http){
//  	 this.sailingData= function () {
//          return $http.get('./json/cruise.json/cruise.json');
//      };
//  })
//   .controller('cruiseCtrl',function($scope,getCruiseData){
//      console.log('2');
//       getSailingData.sailingData().success(function (res) {
//          $scope.data = res['大航海时代'][0]["data"];
//          console.log(res['大航海时代'][0]["data"][0]["img"]);
//      });
//      
//  });
//
