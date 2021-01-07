$("#text").on("input",function(){
    var reg  = /^\w{6,20}$/;
    if(reg.test($("#text").eq(0).val())){
        $(".verify").eq(0).text("")
        $(".main>p:nth-of-type(1)>input").css({
            border:"1px solid #40e769"
        })
        $("#text").eq(0).prop("index",true);
    }else{
        $(".main>p:nth-of-type(1)>input").css({
            border:"1px solid #ee3b3b"
        })
        $(".verify").eq(0).text("长度应为6-20个字符,可以为数字字母").css({
            color:"#ee3b3b"
        })
        $("#text").eq(0).prop("index",false);
    }
})
$("#pass").on("input",function(){
    var reg  = /^[\w\!\@\#\$\%\^\&\*\_\+\=\_\{\}\:\"\>\?\<"]{6,20}$/;
    if(reg.test($("#pass").eq(0).val())){
        var reg1 = /^\d{6,20}$/;
        var reg2 = /^[a-zA-Z]{6,20}$/;
        var reg3 = /^[\!\@\#\$\%\^\&\*\_\+\=\_\{\}\:\"\>\?\<]{6,20}$/;
        var reg4 =  /\d/;
        var reg5 = /[a-zA-Z]/;
        var reg6 = /[\!\@\#\$\%\^\&\*\_\+\=\_\{\}\:\"\>\?\<]/;
        $(".verify").eq(1).html("安全程度：<span>弱</span><span>中</span><span>强</span>").css({
            color:"#cccccc"
        });
        $(".main>p:nth-of-type(2)>input").css({
            border:"1px solid #40e769"
        })
        if(reg1.test($("#pass").eq(0).val()) || reg2.test($("#pass").eq(0).val()) || reg3.test($("#pass").eq(0).val())){
            $(".verify>span").css({
                background:"#a5a5a5"
            })
            $(".verify>span").eq(0).css({
                background:"#ff4c4c"
            })
        }else if(reg4.test($("#pass").eq(0).val()) && reg5.test($("#pass").eq(0).val())&&reg6.test($("#pass").eq(0).val())){
            $(".verify>span").css({
                background:"#a5a5a5"
            })
            $(".verify>span").css({
                background:"#a5a5a5"
            })
            $(".verify>span").eq(0).css({
                background:"#ff4c4c"
            })
            $(".verify>span").eq(1).css({
                background:"#ff4c4c"
            })
            $(".verify>span").eq(2).css({
                background:"#ff4c4c"
            })
        }else{
            $(".verify>span").css({
                background:"#a5a5a5"
            })
            $(".verify>span").eq(0).css({
                background:"#ff4c4c"
            });
            $(".verify>span").eq(1).css({
                background:"#ff4c4c"
            })
        }
        $("#add #form>p").eq(2).css({
            border:"1px solid #cccccc",
        })
        $("#pass").eq(0).prop("index",true);
    }else{
        $(".main>p:nth-of-type(2)>input").css({
            border:"1px solid #ee3b3b"
        })
        $("#pass").eq(0).next().remove();
        $(".verify").eq(1).empty();
        $(".verify").eq(1).text("6-20个字符，包含字母、数字或符号").css("color","#ff4c4c");
        $("#add #form>p").eq(1).css({
            border:"1px solid #ee3b3b",
        })
        $("#pass").eq(0).prop("index",false);
    }
})

$("#yzm").on("blur",function(){
    var str = $("#yzm").eq(0).val().toLocaleLowerCase();
    var str1 = ($("#sp1").text() + $("#sp2").text() + $("#sp3").text() + $("#sp4").text() + $("#sp5").text() + $("#sp6").text()).toLocaleLowerCase();
    if(str==str1){
        $("#yzm").prop("index",true);
    }else{
        $("#yzm").prop("index",false);
    }
})
$("#sub").click(function(){
    if( $("#checkbox").prop("checked") == true ){
        if( $("#text").prop("index") == true ){
            if( $("#pass").prop("index") == true ){
                if( $("#yzm").prop("index") == true ){
                    $.ajax({
                        url:"../php/add.php",
                        type:"post",
                        dataType:"json",
                        data:{
                            username:$("#text").val(),
                            password:$("#pass").val(),
                        },
                        success:function(res){
                            console.log(res);
                            if(res.err==3){
                                var flag = confirm("恭喜你注册成功，请问现在登录吗？")
                                if(flag){
                                    location.href = "./login.html";
                                }
                            }else{
                                alert("注册失败")
                            }
                        }
                    })
                }
            }else{
                alert("密码不符合条件")
            }
        }else{
            alert("账号格式错误")
        }
    }else{
        alert("请理解并接受隐私政策");
    }
})

function randomColor(){
    var str = "rgba("+parseInt(Math.random() *256) + ","+ parseInt(Math.random() *256) + ","+parseInt(Math.random() *256)+",1)"
    return str
}
function rand(n,m){
    return n + parseInt(Math.random()*(m-n+1))
}
function $id(id){
return  document.getElementById(id);
}
function stochastic(){        //这个函数是生成随机数
    for(var i=1;i<=6;i++){
        var num = rand(48,122);
        if((num>57&&num<65)||(num>90&&num<97)){
            i--;
        }else{
            $id(`sp${i}`).innerHTML = String.fromCharCode(num)
            $id(`sp${i}`).style.color = randomColor();
            $id(`sp${i}`).style.fontSize = rand(20,30)  +  'px';
        }
                    
    }              
}
stochastic()
$id(`st1`).onclick = function(){            //给谁添加点击事件
    stochastic()
}
$(".main>a").click(function(){
    location.href = "./login.html"
  })    