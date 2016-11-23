angular.module('projectDemo.holidayPage',[])
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
     .controller('holidayCtrl',function($scope,getHolidayData,$timeout){
        console.log('2');
        var str="";
         getHolidayData.holidayData().success(function (res) {
//          $scope.data = res['snow'][0]["data"];
//          console.log(res['snow'][0]["data"]);
            var mag=res['snow'][0]["data"];
//          console.log(mag);
            
            var x=0;
            var y=4;
     function loadMore(z,f){
         $.each(mag,function(i,ele){
//       	console.log(ele);
       if(i>=z&&i<=f){
            str+='<div class="oneItem">'
   	 		+'<a href="##">'
   	 			+'<img src="'+ele.img+'" alt="'+ele.headline+'" class="topic"/>'

   	 			+'<div class="holiday-sale">'
   	 			if(ele.tag!=""){
   	 			str+='<div class="holiday-tag" data-action="index">'+ele.tag+'</div>'
   	 			}
   	 			
   	 			str+='<h2 class="motif">'+ele.headline+'</h2>'
   	 				 +'</div>'
   	 				  
   	 		+'</a>'
   	 	   +'<div class="scenery gray-introduce">'+ele.presentation+'</div>'
               //<!--要判断会员专享--> 
       if(ele.status==0){
   	 	str+='<a href="##" class="button"><span class="original">¥'+ele.former+'</span><span>¥</span>'
   	 	+'<strong>'+ele.price+'</strong><small>/  / 双人'+ele.person+'晚套餐</small>' 
   	 	+'<div class="round-icon"><span class="icon-arrow-right">'
   	 	+'</span></div></a>'
   	 	}else if(ele.status==1){
   	 	//<!--判断会员专享-->
   	 	str+='<a href="##" class="button">'
           +'<div class="title-percentage-min">'
              +'<div class="cell-member">'
                   +'<div class="percent-circle">'
               +'<div class="arr-right"></div>'
                +'<p class="count"><strong class="three">100</strong><span class="cent">%</span>'
                  +'</p>'
                  +'<p class="recommend">会员推荐</p>'
                 +'</div>'
               +'</div>'
  +'<div class="holiday-cell">'
              +'<div class="right round-icon holiday-btn"><span class="icon-arrow-right"></span>'
                            +'</div>'
                            +'<div class="price text-right">'
                                +'<div class="current">'
                                    +'<small>¥</small>'
                                    +'<strong>'+ele.price+'</strong>'
                                    +'<small> / 双人'+ele.person+'晚套餐</small>'
                                +'</div>'
                                +'<span class="original1">¥'+ele.former+'</span>'
                                
                            +'</div>'
                            +'<div class="clearfix"></div>'
                        +'</div>'
                    +'</div>'
                +'</a>'
   	 	+'</div>';
   	 	}
            		}
            	})
            	$("#holiday .details").html(str);
            }
         loadMore(x,y);
           $('#holiday .holiday-more').on('click',function () {
           	    y+=1;
           	    str="";
            	var strMore='加载中 <img src="./images/loader_transparent-w119.gif"/>';
            	$(this).addClass("holiday-loading").removeClass("#holiday .holiday-more");
            	$(".holiday-loading").html(strMore);
            	$timeout(function () {
            		var strL='查看更多 <span class="icon-refresh"></span>'
		            $("#holiday .holiday-loading").addClass("holiday-more").removeClass("holiday-loading").html(strL);
		            
		            
	            },1200);

                loadMore(x,y);
            	
                
            })
           
        });
       
    });
