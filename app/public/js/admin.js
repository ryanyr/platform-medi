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

function getCsrf() {
    var keyValue = document.cookie.match('(^|;) ?csrfToken=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  }

function doLogin(){
    var account = $('#inputAccount').val();
    var pwd = $('#inputPassword').val();
    var data = {
        account : account,
        pwd : pwd
    };
   /*  var data = new FormData();
    data.append('account',account);
    data.append('pwd',pwd); */
    $.ajax({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader('x-csrf-token', csrftoken);
            }
          },
        url:'doLogin',
        method:'post',
        datatype: 'json',
        // contentType:'application/x-www-form-urlencoded',
        data : JSON.stringify(data),
        contentType: 'application/json',
        processData: false,
    }).done(function(res){
        var data = res.posts;
        // if(data.length>0){
            console.log(1);
            console.log(data);
            window.location.pathname ='admin/index';
            // displayPost(data);
        // }        
    }).fail(function(err){
        console.log(err);
        alert('error');
    })  
}


