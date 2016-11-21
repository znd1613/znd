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
    name:'freeWalker',
    url:'/freeWalker',
    css:'app/models/freeWalker/freeWalker.css',
    templateUrl:'app/models/freeWalker/freeWalker.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'villa',
    url:'/villa',
    css:'app/models/freeWalker/villa.css',
    templateUrl:'app/models/freeWalker/villa.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'cruise',
    url:'/cruise',
    css:'app/models/cruise/cruise.css',
    templateUrl:'app/models/cruise/cruise.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'holiday',
    url:'/holiday',
    css:'app/models/cruise/holiday.css',
    templateUrl:'app/models/cruise/holiday.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'particulars',
    url:'/particulars',
    css:'app/models/cruise/particulars.css',
    templateUrl:'app/models/cruise/particulars.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'sailing',
    url:'/sailing',
    css:'app/models/cruise/sailing.css',
    templateUrl:'app/models/cruise/sailing.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'destination',
    url:'/destination',
    css:'app/models/bourn/destination.css',
    templateUrl:'app/models/bourn/destination.html'
    // controller:'homeCtrl'
  })
  .state({
    name:'praise',
    url:'/praise',
    css:'app/models/bourn/praise.css',
    templateUrl:'app/models/bourn/praise.html'
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
})

