var mySwiper = new Swiper(".swiper-container", {
  //   direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // autoplay:true,//等同于以下设置
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 如果需要滚动条
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
mySwiper.el.onmouseover = function () {
  mySwiper.autoplay.stop();
};
mySwiper.el.onmouseout = function () {
  mySwiper.autoplay.start();
};
$(".warp").mouseenter(function () {
  $(".z").css({
    display: "block",
  });
  $(".y").css({
    display: "block",
  });
});
$(".warp").mouseleave(function () {
  $(".z").css({
    display: "none",
  });
  $(".y").css({
    display: "none",
  });
});
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
});
$("footer>nav>a:nth-of-type(4)>i").mouseenter(function () {
  $("footer>nav>a:nth-of-type(4)>i>span").css({
    display: "block",
  });
});
$("footer>nav>a:nth-of-type(4)>i").mouseleave(function () {
  $("footer>nav>a:nth-of-type(4)>i>span").css({
    display: "none",
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("#header").css({
      background: "rgba(255,255,255,0)",
    });
  } else {
    $("#header").css({
      background: "#fff",
    });
  }
});
$("h1>a").click(function(){
  location.href = "./index.html"
})
$(".from>a:eq(1)").click(function(){
  location.href = "./login.html"
})
$(".from>a:eq(2)").click(function(){
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


