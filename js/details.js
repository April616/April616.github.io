$("h1>a").click(function () {
    location.href = "./index.html"
})
$(".from>a:eq(1)").click(function () {
    location.href = "./login.html"
})
$(".from>a:eq(2)").click(function () {
    location.href = "./add.html"
})

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
// $(".arrow-b").click(function () {
//     $(this).prev().children('li:last').css({
//         display: "block"
//     }).siblings("li:eq(1)").css({
//         display: "none"
//     })
// })
// $(".arrow-t").click(function () {
//     $(this).next().children('li:last').css({
//         display: "none"
//     }).siblings("li:eq(1)").css({
//         display: "block"
//     })
// })
// $(".view-left>ul>li").click(function () {
//     var $a = $(this).index()
//     $(".bigImg").children().eq($a).css({
//         display: "inline-block"
//     }).siblings().css({
//         display: 'none'
//     })
//     $(".mask").children().eq($a).css({
//         display: "inline-block"
//     }).siblings().css({
//         display: 'none'
//     })
//     $(".lens").children().eq($a).css({
//         display: "inline-block"
//     }).siblings().css({
//         display: 'none'
//     })
// })
// //鼠标划入，mask和center和lens出现，移除隐藏
// $('.bigImg').mouseenter(function () {
//     $(".mask").css({
//         display: "block",
//     })
//     $(".lens").css({
//         display: "block",
//     })
//     $(".center").css({
//         display: "block",
//     })
// })
// $('.bigImg').mouseleave(function () {
//     $(".mask").css({
//         display: "none",
//     })
//     $(".lens").css({
//         display: "none",
//     })
//     $(".center").css({
//         display: "none",
//     })
// })
// //鼠标移动的时候，图片放大的位置随之变化，且鼠标位于mask中间
// $('.bigImg').mousemove(function (event) {
//     var x = event.pageX - $(".bigImg").offset().left - ($(".mask").width() / 2)/* mask的x坐标 */
//     var y = event.pageY - $(".bigImg").offset().top - ($(".mask").height() / 2)/* mask的x坐标 */
//     if (x < 0) {
//         x = 0
//     }
//     if (x > $(this).width() - $(".mask").width() - 2) {
//         x = $(this).width() - $(".mask").width() - 2
//     }
//     if (y < 0) {
//         y = 0
//     }
//     if (y > $(this).height() - $(".mask").height() - 2) {
//         y = $(this).height() - $(".mask").height() - 2
//     }
//     $(".mask").css({
//         left: `${x}px`,
//         top: `${y}px`,
//     }).children().css({
//         left: `${-x}px`,
//         top: `${-y}px`,
//     })
//     var left = (x / ($(this).width() - 2)) * $(".lens>img").width();
//     var top = (y / ($(this).height() - 2)) * $(".lens>img").height();
//     $(".lens").children().css({
//         left: `${-left}px`,
//         top: `${-top}px`,
//     })
// })
// $(".size>li").click(function () {
//     $(this).css({
//         border: "2px solid #03234c",
//     }).siblings().css({
//         border: "2px solid #eeeeee",
//     }).parent().prev().html(`尺码：${$(this).html()}`)
// })
// $(".col").click(function () {
//     $(this).css({
//         border: "2px solid #03234c",
//     }).parent().prev().html(`颜色：正黑色`)
// })
// $(".add").click(function () {
//     var x = parseInt($(this).prev().val())
//     $(this).prev().val(x + 1)
// })
// $(".reduce").click(function () {
//     var x = $(this).next().val()
//     if (x > 1) {
//         $(this).next().val(x - 1)
//     }
// })

var str = location.href
str = str.split("?")[1].split("=")[1]
$.ajax({
    url: "../lib/details.json",
    type: "GET",
    dataType: "json",
    success: function (res) {
        var obj = res[str];
        $(".main").append($(`
            <div class="list clearfix">
            <div class="view clearfix">
              <div class="view-left">
                <a class="arrow-t"></a>
                <ul>
                 <li class="white"></li>
                </ul>
                <a class="arrow-b"></a>
              </div>
              <div class="bigImg">
            <div class="center"></div>
                <div class="mask">
                 </div>
              </div>
              <div class="lens">  
              </div>
            </div>
            <div class="infos clearfix">
              <div class="infos-t">
                <h3>${obj.heard}</h3>
                <p>${obj.number}</p>
                <p>${obj.price} <span>${obj.newprice}</span></p>
              </div>
              <div class="infos-z">
                <span>促销</span>
                <span>【免运费】会员专享</span>
              </div>
              <div class="infos-d">
                <p>颜色：</p>
                <ul>
                  <li class="col">
                    <img src="${obj.colimg}"/>
                  </li>
                </ul>
                <p>尺码：</p>
                <ul class="clearfix size">
                </ul>
                <div class="clearfix buy">
                  <p>购买数量</p>
                  <p>
                    <a class="reduce">-</a>
                    <input type="text" value="1" />
                    <a class="add">+</a>
                  </p>
                </div>
                <div class="shop clearfix">
                  <a>加入购物车</a>
                  <a>立即购买</a>
                </div>
              </div>
            </div>
          </div>
          <div class="img">
           </div>`))
        $.each(obj.simg, function (index, item) {
            $(".white").before($(`<li><img src="${item}"></li>`))
        })
        $.each(obj.img, function (index, item) {
            $(".center").before($(`<img src="${item}">`))
            $(".mask").append($(`<img src="${item}">`))
            $(".lens").append($(`<img src="${item}">`))
        })
        $.each(obj.size, function (index, item) {
            $(".size").append($(`<li>${item}</li>`))
        })
        $.each(obj.imgs, function (index, item) {
            $(".img").append($(`<img src="${item}">`))
        })

        $(".arrow-b").click(function () {
            $(this).prev().children('li:last').css({
                display: "block"
            }).siblings("li:eq(1)").css({
                display: "none"
            })
        })
        $(".arrow-t").click(function () {
            $(this).next().children('li:last').css({
                display: "none"
            }).siblings("li:eq(1)").css({
                display: "block"
            })
        })
        $(".view-left>ul>li").click(function () {
            var $a = $(this).index()
            $(".bigImg").children().eq($a).css({
                display: "inline-block"
            }).siblings().css({
                display: 'none'
            })
            $(".mask").children().eq($a).css({
                display: "inline-block"
            }).siblings().css({
                display: 'none'
            })
            $(".lens").children().eq($a).css({
                display: "inline-block"
            }).siblings().css({
                display: 'none'
            })
        })
        //鼠标划入，mask和center和lens出现，移除隐藏
        $('.bigImg').mouseenter(function () {
            $(".mask").css({
                display: "block",
            })
            $(".lens").css({
                display: "block",
            })
            $(".center").css({
                display: "block",
            })
        })
        $('.bigImg').mouseleave(function () {
            $(".mask").css({
                display: "none",
            })
            $(".lens").css({
                display: "none",
            })
            $(".center").css({
                display: "none",
            })
        })
        //鼠标移动的时候，图片放大的位置随之变化，且鼠标位于mask中间
        $('.bigImg').mousemove(function (event) {
            var x = event.pageX - $(".bigImg").offset().left - ($(".mask").width() / 2)/* mask的x坐标 */
            var y = event.pageY - $(".bigImg").offset().top - ($(".mask").height() / 2)/* mask的x坐标 */
            if (x < 0) {
                x = 0
            }
            if (x > $(this).width() - $(".mask").width() - 2) {
                x = $(this).width() - $(".mask").width() - 2
            }
            if (y < 0) {
                y = 0
            }
            if (y > $(this).height() - $(".mask").height() - 2) {
                y = $(this).height() - $(".mask").height() - 2
            }
            $(".mask").css({
                left: `${x}px`,
                top: `${y}px`,
            }).children().css({
                left: `${-x}px`,
                top: `${-y}px`,
            })
            var left = (x / ($(this).width() - 2)) * $(".lens>img").width();
            var top = (y / ($(this).height() - 2)) * $(".lens>img").height();
            $(".lens").children().css({
                left: `${-left}px`,
                top: `${-top}px`,
            })
        })
        $(".size>li").click(function () {
            $(this).css({
                border: "2px solid #03234c",
            }).siblings().css({
                border: "2px solid #eeeeee",
            }).parent().prev().html(`尺码：${$(this).html()}`)
        })
        $(".col").click(function () {
            $(this).css({
                border: "2px solid #03234c",
            }).parent().prev().html(obj.color)
        })
        $(".add").click(function () {
            var x = parseInt($(this).prev().val())
            $(this).prev().val(x + 1)
        })
        $(".reduce").click(function () {
            var x = $(this).next().val()
            if (x > 1) {
                $(this).next().val(x - 1)
            }
        })
        $(".infos > .infos-d > .shop > a").click(function(){
            if($(".infos > .infos-d > p").eq(0).text() == "颜色："){
                alert("请选择商品颜色")
            }else if( $(".infos > .infos-d > p").eq(1).text()=="尺码：" ){
                alert("请选择商品尺码")
            }else{
                $.ajax({
                    url:"../interface/addwq.php",
                    type:"GET",
                    dataType:"json",
                    data:{
                        master:str1,
                        img:$(".view > .view-left > ul > li > img").attr("src"),
                        color:$(".infos > .infos-d > p").eq(0).text().split("：")[1],
                        size:$(".infos > .infos-d > p").eq(1).text().split("：")[1],
                        num:$(".infos > .infos-d > .buy > p:nth-of-type(2) > input").val(),
                        coding:$(".infos > .infos-t > p:nth-of-type(1)").text().split("：")[1],
                        name:$(".infos > .infos-t > h3").text(),
                        price:$(".infos > .infos-t > p:nth-of-type(2)").text().split(" ")[1],
                        priceNew:$(".infos > .infos-t > p:nth-of-type(2)").text().split(" ")[0],
                    },
                    success:function(res){
                        if(res.code==1){
                            alert("加入成功");
                        }
                    }
                })
            }
            
        })

    }
})
