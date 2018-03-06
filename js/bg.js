$(function(){
	var devWidth = $(window).width();
	var devHeight = $(window).height();
	// console.log(devWidth);
	var imglen = $("#main img").length;
	var x = 0; //初始飞机高度
	for(var i = 0; i < imglen ; ++i){
		if(i == 0 || i == (imglen-1)){
			$("#main img").eq(i).css({'width':devWidth-2,'height':devHeight})
		}else{
			$("#main img").eq(i).css({'width':devWidth*3,'height':devHeight})
		}
	}

	var initPlant = setInterval(function(){
		plant(0.1*devHeight+Math.floor(Math.sin(x)*4),0.1*devWidth,0.1*devWidth,devWidth);
		++x;
	},200);

	$("#main img").eq(0).one("swipeleft",function(){
		var i = 0;
		var timmer = setInterval(function(){
			i +=2.5;
			$(document).scrollLeft((i/100) * devWidth);
			if(i == 100) clearInterval(timmer);
		},10);
		$("#right").css("display","block");
	});	


	var bgTimmer;

	$("#right").on('vmouseover',function(){
		bgTimmer = setInterval(function(){
			var left = $(document).scrollLeft();
			$(document).scrollLeft(left + 0.05 * devWidth);
		},100);
	})
	
	$("#right").on('vmouseout',function(){
		clearInterval(bgTimmer);
	});
})

//控制飞机函数，pramer:上，左，大小,设备宽度
function plant(top,left,size,devWidth){
	console.log($(document).scrollLeft());
	if($(document).scrollLeft() >= 0.9*devWidth){
		left += 0.4*devWidth;
	}
	$("#plant").css({'top':top+'px','left':left+'px','width':size+'px'});
}

