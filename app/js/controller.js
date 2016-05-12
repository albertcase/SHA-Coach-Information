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
});