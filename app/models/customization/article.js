angular.module('projectDemo.article', [])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'second_frame.magazine.article',
				url: '/article',
				css: 'app/models/customization/article.css',
				templateUrl: 'app/models/customization/article.html',
			})
	})
	.controller("arti", function($scope) {
		var btn=document.querySelector('#btn');console.log(btn);
		var inputEle = document.querySelector("#artical textarea");
    	var ulEle = document.querySelector("#artical .ds-comments");
    	var li = ulEle.querySelector('li:nth-of-type(1)');
    	var del = document.querySelector("#del");
		$(btn).on('click',save);
		$(del).on('click',clearAll);
    	function save(){
    		if(!inputEle.value){
    			return;
    		}

    		var news = {
    			info:inputEle.value,
    			dates:(new Date()).toLocaleString()
    		}
    		localStorage.setItem(news.dates,JSON.stringify(news));
    		ulEle.appendChild(createLi(news));
    		inputEle.value="";
    	}
    	function createLi(obj){
    		var li = document.createElement("li");
    		var str = '<div class="comment"><div class="head"><img src="https://avatar.duoshuo.com/avatar-50/35/180007.jpg" alt=""></div><div class="cnt"><div>昵称</div>';
    		str+='<div>'+ obj.info +'</div>';
    		str+='<div><span>'+ obj.dates +'</span><span>回复</span><span>顶</span><span>转发</span><span>举报</span></div></div></div>';
    		li.innerHTML = str;
    		li.index=obj.dates;
    		return li;
    	}
    	function readStorage(){
    		for(var key in localStorage){
    			if(key != 'jfVersion'){
    				
    			
    			var news = JSON.parse(localStorage.getItem(key));
    			ulEle.appendChild(createLi(news));
    			}
    		}
    	}
    	readStorage();
    	
    	function clearAll(){
    		alert(1);
    		localStorage.clear();
    		ulEle.innerHTML="";
    	}
    	
    	
	})