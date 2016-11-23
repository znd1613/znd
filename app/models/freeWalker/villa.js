angular.module('projectDemo.villa',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state({
    name:'second_frame.villa',
    url:'/villa',
    css:'app/models/freeWalker/villa.css',
    templateUrl:'app/models/freeWalker/villa.html'
	})
})
.controller("dayin",function($scope){
		console.log(1);
})

