$(".right>input").click(function(){
    location.href = "./add.html"
})
$("#sub").click(function(){
    if( $("#text").val()!= "" && $("#pass").val()!= "" ){
        $.ajax({
            url:"../php/login.php",
            type:"post",
            dataType:"json",
            data:{
                type:"login",
                username:$("#text").val(),
                password:$("#pass").val(),
            },
            success:function(res){
                if(res.err ==1){
                    setCookie("name",$("#text").val(),604800);
                    setCookie("pass",$("#pass").val(),604800);
                    alert("登陆成功");
                    location.href = "./index.html";
                }else{
                    alert("账号或者密码错误")
                }
            }
        })
    }
})
console.log(document.cookie)
function getCookie(key){
    // 传入key
        var str = '';
        var temp  =  document.cookie.split("; ");  //用; 进行分割
        for(var i=0;i<temp.length;i++){
        var a =  temp[i].split("=");
        if(a[0]===key){
                str += a[1];
                return str;
        }
        }
        
    }
    function setCookie(key,value,expires){
    // 接收三个参数
        if(expires){
            var time = new Date();
            time.setTime(time.getTime()-8*60*60*1000 + expires*1000);
            document.cookie = `${key}=${value};${time}`;
        }else{
            document.cookie = `${key}=${value}`;
        }
    }