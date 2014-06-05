$(document).ready(function(){
	
	
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
			
	//Twitter Setup
	$('.tweet_module').tweet({
		modpath: 'twitter/',
		count: 2,
		username : 'your_name'
	 });
	
	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	//Image hover
	$(".post_prev, .proj_block, .post").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.26},600);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".post_prev, .proj_block, .post").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},600);
			$(".preloader").css({'background':'none'});
		}
	);
	
	
	//H2 span
	$('h2.title').each(function(){								
		$(this).wrapInner("<span></span>");								
	});
	
	

});


//Menu respond
if ($(window).width()<767){
	$(".menu_btn a").click(function () {
		$("#main_menu").slideToggle("slow");
	}); 	
};













