;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
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
		alertBox:{
			add:function(msg){
				$('body').append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+msg+'</div><div class="btn-alert-ok">是</div></div></div>');
			},
			remove:function(){
				$('.alertpop').remove();
			}
		},

	};

	this.Common = Common;

}).call(this);
