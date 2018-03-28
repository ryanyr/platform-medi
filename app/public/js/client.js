$(function(){
   
    //会议
    //选择地区
    $('#selectDistrict').click(function(){
        $.ajax({
            url:'/getAllDistricts',
            method:'get'
        }).done(function(data){
            $('.sideNav').find('ul').html('');
            var districts = data.districts;
            for(var i =0;i<districts.length;i++){
                var item = $('<li class="navitem">'+districts[i]+'</li>');
                $('.sideNav').find('ul').append(item);
            }
            $('.sideNav').animate({right:0},200,'swing');
            console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    });
    //选择学科
    $('#selectDepartment').click(function(){
        $.ajax({
            url:'/getAllDepartments',
            method:'get'
        }).done(function(data){
            $('.sideNav').find('ul').html('');
            var districts = data.districts;
            for(var i =0;i<districts.length;i++){
                var item = $('<li class="navitem">'+districts[i]+'</li>');
                $('.sideNav').find('ul').append(item);
            }
            $('.sideNav').animate({right:0},200,'swing');
            console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    });
    //选择年份
    $('#selectYear').click(function(){
        $.ajax({
            url:'/getAllYears',
            method:'get'
        }).done(function(data){
            console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    });
    //选择地区
    $('#selectMonth').click(function(){
        $.ajax({
            url:'/getAllMonths',
            method:'get'
        }).done(function(data){
            console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    });
})