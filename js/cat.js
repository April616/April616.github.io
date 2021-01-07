var str1 = getCookie("name");
if(!str1){
    alert("还没有登录哦")
}else{
    $(".from > a:nth-of-type(2)").text(`Hi ${str1}`);
    $(".judge").css("display","none");
}
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

    $.ajax({
        url:"../interface/showlist.php",
        type:"GET",
        dataType:"json",
        data:{
            master:str1
        },
        success:function(res){
            console.log(res);
            if(res.code==1){
                $(".loge").css("display","none");
                $.each(res.data,function(index,item){
                    $(".main-cat").append( $(`<div class="commodity">
                <span class="checkbox select">√</span>
                <div class="img"><img src="${item.img}" alt=""></div>
                <div class="describe">
                    <h1>${item.name}</h1>
                    <strong>颜色:<span class="color">${item.color}</span>;尺码:<span>${item.size}</span></strong>
                    <p><i>数量:</i><span class="z">-</span><strong class="num">${item.num}</strong><span class="y">+</span> </p>
                    <span>商品编号：<i>${item.coding}</i></span>
                </div>
                <div class="right">
                    <p class="pirve">${item.pirceNew}</p>
                    <p class="pirveNew">${item.pirce}</p>
                    <span class="del">删除</span>
                </div>
            </div>`) )
                })
                $(".me>span>strong").text(res.data.length)
                // 全选按钮
    $(".All").click(function(){
        
        if($(".All").css("backgroundColor")=="rgb(255, 255, 255)"){
            $(this).css({
                background:"#03234c"
            })
            $(".select").css({
                background:"#03234c"
            })
            .prop("index",true)
          
        }else{
            $(this).css({
                background:"#ffffff"
            })
            $(".select").css({
                background:"#ffffff"
            })
            .prop("index",false)
            var sum = 0;  //用来计算总价
            $.each($(".select"),function(i,t){
                if($(".select").eq(i).prop("index")==true){
                    sum += parseInt($(".pirve").eq(i).text().split("￥")[1]);
                }
            })
            sum = "￥" + sum.toFixed(2)
            $("footer>section>div>.l>strong").text(sum)
        }
        var sum = 0;  //用来计算总价
            $.each($(".select"),function(i,t){
                if($(".select").eq(i).prop("index")==true){
                    sum += parseInt($(".pirve").eq(i).text().split("￥")[1])*parseInt($(".num").eq(i).text());
                }
            })
            sum = "￥" + sum.toFixed(2)
            $("footer>section>div>.l>strong").text(sum)
    })
    
    $(".select").click(function(){
        if($(this).css("backgroundColor")=="rgb(255, 255, 255)"){
            $(this).css({
                background:"#03234c"
            })
            .prop("index",true)
          
        }else{
            $(this).css({
                background:"#ffffff"
            })
            .prop("index",false)
        }
        var sum = 0;  //用来计算总价
        $.each($(".select"),function(i,t){
            if($(".select").eq(i).prop("index")==true){
                sum += parseInt($(".pirve").eq(i).text().split("￥")[1])*parseInt($(".num").eq(i).text());
            }
        })
        console.log(sum);
        sum = "￥" + sum.toFixed(2);
        $("footer>section>div>.l>strong").text(sum)
    })
            $(".right>.del").click(function(){
                $(this).prop("filg",true);
                var t = 0
                $.each($(".right>.del"),function(i,t){
                    if($(".right>.del").eq(i).prop("filg")==true){
                        t = i;
                    }
                })
                $.ajax({
                    url:"../interface/delwq.php",
                    type:"post",
                    dataType:"json",
                    data:{
                        coding:$(".describe>span>i").eq(t).text(),
                        master:str1,
                        size:$(`.describe>strong:eq(${t})>span`).eq(1).text()
                    },
                    success:function(res){
                        if(res.code==1){
                            alert("删除成功")
                        }
                    }
                })
                $(this).parent().parent().remove();


            })
            //底部的全选按钮
            $(".all").click(function(){
                if($(".all").css("backgroundColor")=="rgb(255, 255, 255)"){
                    $(this).css({
                        background:"#03234c"
                    })
                    $(".select").css({
                        background:"#03234c"
                    })
                    .prop("index",true)
                    
                }else{
                    $(this).css({
                        background:"#ffffff"
                    })
                    $(".select").css({
                        background:"#ffffff"
                    })
                    .prop("index",false)
                }
                var sum = 0;  //用来计算总价
                    $.each($(".select"),function(i,t){
                        if($(".select").eq(i).prop("index")==true){
                            sum += parseInt($(".pirve").eq(i).text().split("￥")[1])*parseInt($(".num").eq(i).text());
                        }
                    })
                    sum = "￥" + sum.toFixed(2)
                    $("footer>section>div>.l>strong").text(sum)
            })
            // 加减操作
            $(".describe>p").click(function(e){
                $(this).prop("flag",true);
                var b;
                $.each($(".describe>p"),function(i,t){
                    if($(".describe>p").eq(i).prop("flag")==true){
                        b = i;
                    }
                })
                var a = $(".num").eq(b).text();
                if(e.target.className=="y"){
                    a++;
                    $(".num").eq(b).text(a);
                    $.ajax({
                        url:"../interface/updatewq.php",
                        type:"post",
                        dataType:"json",
                        data:{
                            coding:$(".describe>span>i").eq(b).text(),
                            num:a,
                            master:str1,
                        },
                        success:function(res){

                        }
                    })
                }
                if(e.target.className=="z"){
                    if(a>1){
                        a--;
                        $(".num").eq(b).text(a);
                        $.ajax({
                        url:"../interface/updatewq.php",
                        type:"post",
                        dataType:"json",
                        data:{
                            coding:$(".describe>span>i").eq(b).text(),
                            num:a,
                            master:str1,
                        },
                        success:function(res){
                            
                        }
                    })
                    }else{
                        alert("不能再减啦")
                    }
                }
            })

            }else{

            }
        }
    })
    