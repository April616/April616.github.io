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

$(".tree-main").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass().siblings("ul").slideUp();
  } else {
    $(this)
      .addClass("active")
      .siblings("ul")
      .slideDown()
      .parent()
      .siblings()
      .children("a")
      .removeClass()
      .siblings("ul")
      .slideUp();
  }
})
$("h1>a").click(function () {
  location.href = "./index.html"
})
$(".from>a:eq(1)").click(function () {
  location.href = "./login.html"
})
$(".from>a:eq(2)").click(function () {
  location.href = "./add.html"
})


$(".main>nav>ul>li:eq(0)").click(function () {
  var i = $(this).index();
  location.href = `./main.html?index=${i}`;
})
$(".main>nav>ul>li:last").click(function () {
  var i = $(this).index();
  location.href = `./main.html?index=${i}`;
})



$(".main>nav>ul>li:eq(1)>ul>li").click(function(){
  var i = $(this).index();
  location.href = `./main.html?index=1;main=${i}`;
})
$(".main>nav>ul>li:eq(2)>ul>li").click(function(){
  var i = $(this).index();
  location.href = `./main.html?index=2;main=${i}`;
})
$(".main>nav>ul>li:eq(3)>ul>li").click(function(){
  var i = $(this).index();
  location.href = `./main.html?index=3;main=${i}`;
})



$(document).click(function (event) {
  var $target = $(event.target);
  if ($target.is('.sort')) {
    $target.css({
      margin: "0 20px 0 2px",
    }).next().css({
      display: 'block'
    })
  } else {
    $('.list-main>div>div>a').css({
      margin: "0 20px",
    }).next().css({
      display: 'none'
    })
  }
})
$('.list-main>div>div>ul>li').mouseenter(function () {
  $(this).css("background", 'rgba(200,200,200,0.7)').siblings().css("background", 'none')
})
$('.list-main>>div>div>ul>li').mouseleave(function () {
  $(this).css("background", 'none')
})
$('.list-main>div>div>ul>li').click(function () {
  $(this).parent().prev().html($(this).html())
})

var str = location.href;//获取当前页面的地址栏信息http://localhost/fila/src/pages/main.html?index=1;main=5
str = str.split("?")[1] //先把这个字符串分隔  分割完了后大概是这样的index=1;main=5
// if(str.indexOf(";")==-1){
//   var str1=str.split("=")[1]
//   $.ajax({
//     url: "../lib/main.json",
//     type: "GET",
//     dataType: "json",
//     success: function (res) { 
//       $.each(res[str1], function (index, item) {
//         $(".list-main>ol").append($(`<li>
//              <div>
//                 <img src= "${item.imgMax}"/>
//                <p>${item.head}</p>
//                <h5>
//                   <p>
//                     <img src="${item.imgMin}"/>
//                   </p>
//                   <a>${item.priceNew}</a>
//                   <span>${item.price}</span>
//                </h5>
//              </div>
//         </li> `))
//       })
//       $('.list-main>div>h3>span').html(`(${res[str1].length})`)
//       $('.list-main>ol>li').mouseenter(function () {
//         $(this).children('div').css({
//           boxShadow: " 0 0 10px 2px #8d8a8a",
//         }).children("h5").children("p").slideDown().siblings('span').css({
//           display: "inline-block",
//         }).parents("li").siblings().children('div').css({
//           boxShadow: " none",
//         }).children("h5").children("p").slideUp().siblings('span').css({
//           display: "none",
//         })
//       })
//       $('.list-main>ol').mouseleave(function () {
//         $(this).children("li").children('div').css({
//           boxShadow: " none",
//         }).children("h5").children("p").slideUp().siblings('span').css({
//           display: "none",
//         })
//       })
//       $(".list-main>ol>li").click(function () {
//         location.href = "./details.html"
//       })
//     }
//   })
// }else{
//   var str1=str.split(";")[0].split("=")[1];
//   var str2=str.split(";")[1].split("=")[1];
//   $.ajax({
//     url: `../lib/main${str1}.json`,
//     type: "GET",
//     dataType: "json",
//     success: function (res) {
//       $.each(res[str2], function (index, item) {
//         $(".list-main>ol").append($(`<li>
//              <div>
//                 <img src= "${item.imgMax}"/>
//                <p>${item.head}</p>
//                <h5>
//                   <p>
//                     <img src="${item.imgMin}"/>
//                   </p>
//                   <a>${item.priceNew}</a>
//                   <span>${item.price}</span>
//                </h5>
//              </div>
//         </li> `))
//       })
//       $('.list-main>div>h3>span').html(`(${res[str2].length})`)
//       $('.list-main>ol>li').mouseenter(function () {
//         $(this).children('div').css({
//           boxShadow: " 0 0 10px 2px #8d8a8a",
//         }).children("h5").children("p").slideDown().siblings('span').css({
//           display: "inline-block",
//         }).parents("li").siblings().children('div').css({
//           boxShadow: " none",
//         }).children("h5").children("p").slideUp().siblings('span').css({
//           display: "none",
//         })
//       })
//       $('.list-main>ol').mouseleave(function () {
//         $(this).children("li").children('div').css({
//           boxShadow: " none",
//         }).children("h5").children("p").slideUp().siblings('span').css({
//           display: "none",
//         })
//       })
//       $(".list-main>ol>li").click(function () {
//         location.href = "./details.html"
//       })
//     }
//   })
// }

if(str.indexOf(";")==-1){   //先判断现在的字符串里面有没有";"  
  var str1 = str.split("=")[1];  //假如没有;号  那就再次进行分割  就会变成一个数字
  $.ajax({                
    url: "../lib/main.json",    //向main.json请求数据
    type: "GET",
    dataType: "json",
    success: function (res) {
      var arr = res[`${str1}`]    
      $.each(arr, function (index, item) {
        $(".list-main>ol").append($(`<li>
            <div>
                <img src= "${item.imgMax}"/>
              <p>${item.head}</p>
              <h5>
                  <p>
                    <img src="${item.imgMin}"/>
                  </p>
                  <a>${item.priceNew}</a>
                  <span>${item.price}</span>
              </h5>
            </div>
        </li> `))
      })
      $('.list-main>div>h3>span').html(`(${arr.length})`)
      $('.list-main>ol>li').mouseenter(function () {
        $(this).children('div').css({
          boxShadow: " 0 0 10px 2px #8d8a8a",
        }).children("h5").children("p").slideDown().siblings('span').css({
          display: "inline-block",
        }).parents("li").siblings().children('div').css({
          boxShadow: " none",
        }).children("h5").children("p").slideUp().siblings('span').css({
          display: "none",
        })
      })
      $('.list-main>ol').mouseleave(function () {
        $(this).children("li").children('div').css({
          boxShadow: " none",
        }).children("h5").children("p").slideUp().siblings('span').css({
          display: "none",
        })
      })
      $(".list-main>ol>li").click(function () {
        var z=$(this).index()
        location.href = `./details.html?index=${z}`
      })
    }
  })
}else{
  var str1 = str.split(";")[1].split("=")[1];
  var num = str.split(";")[0].split("=")[1];
  $.ajax({
    url: `../lib/main${num}.json`,
    type: "GET",
    dataType: "json",
    success: function (res) {
        var arr = res[str1]
          $.each(arr, function (index, item) {
            $(".list-main>ol").append($(`<li>
                 <div>
                    <img src= "${item.imgMax}"/>
                   <p>${item.head}</p>
                   <h5>
                      <p>
                        <img src="${item.imgMin}"/>
                      </p>
                      <a>${item.priceNew}</a>
                      <span>${item.price}</span>
                   </h5>
                 </div>
            </li> `))
          })
          $('.list-main>div>h3>span').html(`(${arr.length})`)
          $('.list-main>ol>li').mouseenter(function () {
            $(this).children('div').css({
              boxShadow: " 0 0 10px 2px #8d8a8a",
            }).children("h5").children("p").slideDown().siblings('span').css({
              display: "inline-block",
            }).parents("li").siblings().children('div').css({
              boxShadow: " none",
            }).children("h5").children("p").slideUp().siblings('span').css({
              display: "none",
            })
          })
          $('.list-main>ol').mouseleave(function () {
            $(this).children("li").children('div').css({
              boxShadow: " none",
            }).children("h5").children("p").slideUp().siblings('span').css({
              display: "none",
            })
          })
          $(".list-main>ol>li").click(function () {
            var z=$(this).index()
            location.href = `./details.html?index=${z}`
          })
        }
      })                          
}