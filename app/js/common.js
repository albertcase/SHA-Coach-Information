function gotoPin(i) {
	var $pin = $('.wrapper .pin');
	$pin.removeClass('current').eq(i).addClass('current');
}

;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		goHomepage:function(){
			gotoPin(0);
		},
		goWriteGreetingPage:function(){
			gotoPin(1);
		},
		goMyPhotoPage:function(){
			gotoPin(5);
		},
		goGallerypage:function(){
			window.location.href='gallery.html';
		},
		goMobilePage:function(){
			gotoPin(2);
		},
		goInfoPage:function(){
			gotoPin(3);
		},
		isWx:function(){
			return (/micromessenger/.test(ua)) ? true:false;
		},
		msgBox:function(msg,long){
			if(long){
				$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
			}else{
				$('body').append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+msg+'</div></div>');
			}
		},
		errorMsg : {
			add:function(ele,msg){
				if(!ele.find('.error').length){
					ele.append('<div class="error">'+msg+'</div>');
				}else{
					ele.find('.error').html(msg);
				}
			},
			remove:function(ele){
				if(ele.find('.error').length){
					ele.find('.error').remove();
				}
			}
		},


	};

	this.Common = Common;

}).call(this);
