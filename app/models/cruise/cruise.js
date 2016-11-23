angular.module('projectDemo.cruisePage',['projectDemo.sailingPage'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('second_frame.cruise',{
				    url:'/cruise',
				    
				    css:'app/models/cruise/cruise.css',

				    templateUrl:'app/models/cruise/cruise.html',
				     
				  })
            

    }])
    .service('getCruiseData',function ($http){
    	 this.cruiseData= function () {
            return $http.get('./json/cruise.json/cruise.json');
        };
    })
     .controller('cruiseCtrl',function($scope,getCruiseData){
     	
     	
        console.log('2');
       
         getCruiseData.cruiseData().success(function (res) {
         
            $scope.data = res['大航海时代'][0]["data"];
            
            console.log(res['大航海时代'][0]["data"][0]["img"]);
        });
        
    });
