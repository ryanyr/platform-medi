$(function(){
   
    //会议
    $('#selectDistrict').click(function(){
        $.ajax({
            url:'/getAllDistricts',
            method:'get'
        }).done(function(data){
            console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    });
})