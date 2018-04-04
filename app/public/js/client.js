//crsf token
var csrftoken = getcookie('csrfToken');

function getcookie(objname){//获取指定名称的cookie的值
    var arrstr = document.cookie.split("; ");
    for(var i = 0;i < arrstr.length;i ++){
    var temp = arrstr[i].split("=");
    if(temp[0] == objname) return unescape(temp[1]);
    }
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
} 

function chooseDistrictItem(obj){
    var item = obj.innerHTML;
    // console.log(item);
    $('.sideNav').animate({right:'-5rem'},200,'swing',function(){
        $('#selectDistrict').text(item);
        getPosts('district',{'district':item});
    });
    
}

function chooseDepartmentItem(obj){
    var item = obj.innerHTML;
    // console.log(item);
    $('.sideNav').animate({right:'-5rem'},200,'swing',function(){
        $('#selectDepartment').text(item);
        getPosts('department',{'department':item});
    });
}

function chooseYearItem(obj){
    var item = obj.innerHTML;
    // console.log(item);
    $('.sideNav').animate({right:'-5rem'},200,'swing',function(){
        $('#selectYear').text(item);
        getPosts('year',{'year':item});
    });
}

function chooseMonthItem(obj){
    var item = obj.innerHTML;
    // console.log(item);
    $('.sideNav').animate({right:'-5rem'},200,'swing',function(){
        $('#selectMonth').text(item);
        getPosts('month',{'month':item});
    });
}

/* function getPosts(obj){
    console.log(obj);
    var district = obj.district;
    var department = obj.department;
    var year = obj.year;
    var month = obj.month;
    var posts = [];
    $.ajax({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader('x-csrf-token', csrftoken);
            }
          },
        url:'/getPosts',
        method:'get',
        data: obj,
        contentType: false,
        processData: false,
    }).done(function(data){
        console.log(1);
    }).fail(function(data){
        console.log(2);
    })
} */

function getPosts(type,data){
    // console.log(type);
    var posts = [];
    var url = '';
    switch(type){
        case 'district':
            url = '/getPostsByDistrict';
            break;
        case 'department':
            url = '/getPostsByDepartment';
            break;
        case 'year':
            url = '/getPostsByYear';
            break;
        case 'month':
            url = '/getPostsByMonth';
            break;
        default:break;
    }
    $.ajax({
        url: url,
        method:'get',
        data: data
    }).done(function(data){
        console.log(data.posts);
        posts =  data.posts;
    }).fail(function(data){
        console.log('err');
    })
    
}

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
                var item = $('<li class="navitem district" onClick=chooseDistrictItem(this)>'+districts[i]+'</li>');
                $('.sideNav').find('ul').append(item);
            }
            $('.sideNav').animate({right:0},200,'swing');
            // console.log(data);
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
            var departments = data.departments;
            for(var i =0;i<departments.length;i++){
                var item = $('<li class="navitem department" onClick=chooseDepartmentItem(this)>'+departments[i]+'</li>');
                $('.sideNav').find('ul').append(item);
            }
            $('.sideNav').animate({right:0},200,'swing');
            // console.log(data);
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
            $('.sideNav').find('ul').html('');
            var years = data.years;
            for(var i =0;i<years.length;i++){
                var item = $('<li class="navitem year" onClick=chooseYearItem(this)>'+years[i]+'</li>');
                $('.sideNav').find('ul').append(item);
            }
            $('.sideNav').animate({right:0},200,'swing');
            // console.log(data);
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
            $('.sideNav').find('ul').html('');
            var months = data.months;
            for(var i =0;i<months.length;i++){
                var item = $('<li class="navitem year" onClick=chooseMonthItem(this)>'+months[i]+'</li>');
                $('.sideNav').find('ul').append(item);
            }
            $('.sideNav').animate({right:0},200,'swing');
            // console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    });

})