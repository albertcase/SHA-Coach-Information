//redpacket
;(function(){
    'use strict';
    var controller = function(){

    };
    controller.prototype = {
        init:function(){
            //loading all the resourse, such as css,js,image
            var self = this;
            self.SubmitInformationForm();
            self.closePop();
        },
        FormInforValidate:function(){
            var validate = true,
                inputName = $('.input-name'),
                inputMobile = $('.input-phone'),
                inputAddress = $('.input-address');

            //姓名
            if(!inputName.val()){
                Common.errorMsg.add(inputName.parent(),'姓名不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputName.parent());
            }
            //手机
            if(!inputMobile.val()){
                Common.errorMsg.add(inputMobile.parent(),'手机不能为空');
                validate = false;
            }else{
                var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                if(!(reg.test(inputMobile.val()))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parent());
                }
            }
            //地址
            if(!inputAddress.val()){
                Common.errorMsg.add(inputAddress.parent(),'地址不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputAddress.parent());
            }

            if(validate){
                return true;
            }else{
                return false;
            }
        },
        SubmitInformationForm:function(){
            /*
            * Submit the register information form
            * */
            var self = this;
            var inputName = $('.input-name'),
                inputMobile = $('.input-phone'),
                inputAddress = $('.input-address');
            //validate when input
            inputName.on('keyup',function(){
                self.FormInforValidate();
            });
            inputMobile.on('keyup',function(){
                self.FormInforValidate();
            });
            inputAddress.on('keyup',function(){
                self.FormInforValidate();
            });

            //submit
            $('.form-btn-submit').on('touchstart',function(){
                if(self.FormInforValidate()){
                    Api.submitForm({
                        name:inputName.val(),
                        mobile:inputMobile.val(),
                        address:inputAddress.val()
                    },function(data){
                        if(data.status==1){
                            Common.alertBox.add('提交成功');
                        }else{
                            Common.alertBox.add('提交失败');
                        }
                    });
                }
            });

        },
        closePop:function(){
          $('body').on('touchstart','.btn-alert-ok',function(){
              //alert(0);
              WeixinJSBridge.call('closeWindow');
          });
        },


    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return controller;
        });
    }
    else {
        this.controller = controller;
    }


}).call(this);

$(document).ready(function($){
    //load for home page
    var redpacket = new controller();
    redpacket.init();

//    hide all wxshare function

//hide weixin share button
    wx.ready(function(){

        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

        wx.hideOptionMenu();
        wx.hideMenuItems({
            menuList: [] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
        wx.hideAllNonBaseMenuItem();
    });

});