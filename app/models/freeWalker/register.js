angular.module('projectDemo.register',['projectDemo.register_1','projectDemo.login'])
.config(function($stateProvider,$urlRouterProvider){
		  $stateProvider
		  .state({
		    name:'register',
		    url:'/register',
		    css:'app/models/freeWalker/register.css',
		    templateUrl:'app/models/freeWalker/register.html'
		    // controller:'homeCtrl'
		  })
		 
})
// .controller("ctrl_register",function($scope){
// 	console.log("11");
// })