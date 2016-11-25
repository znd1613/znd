var app=angular.module('projectDemo.particularsPage',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
		    .state('second_frame.holiday.particulars',{
		    url:'/particulars',
		    css:'app/models/cruise/particulars.css',
		    templateUrl:'app/models/cruise/particulars.html'
		  })
		  


		 $urlRouterProvider.otherwise('/second_frame.holiday.particulars');
 
    }])
.factory('anchorScroll', function () {
    function toView(element, top, height) {
        var winHeight = $(window).height();

        element = $(element);
        height = height > 0 ? height : winHeight / 10;
        $('html, body').animate({
            scrollTop: top ? (element.offset().top - height) : (element.offset().top + element.outerHeight() + height - winHeight)
        }, {
            duration: 200,
            easing: 'linear',
            complete: function () {
                if (!inView(element)) {
                    element[0].scrollIntoView( !! top);
                }
            }
        });
    }

    function inView(element) {
        element = $(element);

        var win = $(window),
            winHeight = win.height(),
            eleTop = element.offset().top,
            eleHeight = element.outerHeight(),
            viewTop = win.scrollTop(),
            viewBottom = viewTop + winHeight;

        function isInView(middle) {
            return middle > viewTop && middle < viewBottom;
        }

        if (isInView(eleTop + (eleHeight > winHeight ? winHeight : eleHeight) / 2)) {
            return true;
        } else if (eleHeight > winHeight) {
            return isInView(eleTop + eleHeight - winHeight / 2);
        } else {
            return false;
        }
    }

    return {
        toView: toView,
        inView: inView
    };
})
.service('bannerData',function ($http){
    	 this.banner= function () {
            return $http.get('./json/cruise.json/particulars.json');
        };
    }) 

.controller('particularsCtrl',function($scope,anchorScroll){
	        $scope.share=function(){
	        	$("#particulars interlinkage sub-menu").show();
	        }
         	$scope.overview1 = function () {
         		anchorScroll.toView('#overview', true);
                }
         	$scope.features1 = function () {
         		anchorScroll.toView('#features', true);
                }
         	$scope.options1 = function () {
         		anchorScroll.toView('#options', true);
                }
         	$scope.review1 = function () {
         		anchorScroll.toView('#review', true);
                }
         })
.controller('bannerCtrl',function($scope,bannerData){
	  bannerData.banner().success(function (res) {
	  	$scope.data=res.data;
	  	 $scope.slider = function () {
         var mySwiper = new Swiper ('#particulars .swiper-container', {
		    pagination : '#particulars .swiper-pagination',
		    loop : true,
		    autoplay : 1000,
		    loopAdditionalSlides : 1,
		    paginationType : 'fraction',
		    updateOnImagesReady : true,
		    autoplayDisableOnInteraction : false,

 
         })    
       };
        //执行轮播图service
        $scope.slider();
	  });
});
