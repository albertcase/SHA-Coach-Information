/*All the api collection*/
Api = {
    // greeting  background
    submitForm:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/submit',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    }

};
