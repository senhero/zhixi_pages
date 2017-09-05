
$(function(){
	
	
	//全屏幻灯
	$(".banner_slide").slide({titCell:".hd",mainCell:".bd",effect:"fold",autoPlay:true,autoPage:true,interTime:4000});
	
	$(".scroll-pic").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
	
	$(".news-scroll").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:2});
	
	$(".jqzoom").imagezoom();
	$(".sm-pic li").click(function(){
		//增加点击的li的class:tb-selected，去掉其他的tb-selecte
		
		//赋值属性
		$(".jqzoom").attr('src',$(this).find("img").attr("mid-pic"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big-pic"));
	});
	
	//倒计时
	var timer = setInterval(clock,1000);
	clock();
	function clock(){
		var time = $('.shop-time').attr('data-time');
		var $span = $('.shop-time').find('span');
		var newDate = new Date(time*1000);
		var nowDate = new Date();
		
		if( newDate.getTime() - nowDate.getTime() > 0 ){
			var times = Math.floor((newDate.getTime() - nowDate.getTime())/1000);
			var iD = Math.floor(times/86400);
			var iH = Math.floor(times%86400/3600);
			var iM = Math.floor(times%86400%3600/60);
			var iS = Math.floor(times%60);
			
			//alert( $span.length );
			var str = toZero(iD) + toZero(iH)  + toZero(iM) + toZero(iS);
			//alert(str);
			$span.each(function(i){
				
				$(this).html(str.charAt(i));
			})	
		}
		else{
			clearInterval(timer);
			$span.each(function(i){
				
				$(this).html(0);
			})
		}

	}
	
	function toZero(num){
		if( num < 10){
			return '0' + num;
		}else{
			return ''+num;
		}
	}

	
});

 
 

  
  
  
  
  
  
