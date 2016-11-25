angular.module('projectDemo.commentsPage',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
		    .state('second_frame.holiday.comments',{
		    url:'/comments',
		    css:'app/models/cruise/comments.css',
		    templateUrl:'app/models/cruise/comments.html'
		  })
		  


 
    }])
.controller('commentsCtrl',function($scope){})