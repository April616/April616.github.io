<?php
require('./model/_connect.php');
//获取前端的参数
$master = $_REQUEST['master'];//获取当前购物车的主人
$img = $_REQUEST['img'];//商品img
$color = $_REQUEST['color'];//颜色
$size = $_REQUEST['size'];
$coding = $_REQUEST['coding'];//商品id
$name = $_REQUEST['name'];//商品name
$price = $_REQUEST['price'];//商品price
$pirceNew = $_REQUEST['priceNew'];//商品最新价格
$num = $_REQUEST['num'];//商品数量
$sql = "SELECT * FROM `cart` WHERE `coding`='$coding' AND `master`='$master' AND `color`='$color' AND `size`='$size' ";
    $res = mysqli_query($conn,$sql);
    $date = mysqli_fetch_all($res,MYSQLI_ASSOC);
    if(count($date)>0){
        $sql1 = "UPDATE `cart` SET `num`='$num' WHERE `coding`='$coding' AND `master`='$master' AND `color`='$color' AND  `size`='$size' ";
        $res1 = mysqli_query($conn,$sql1);
    }else {
        $sql1 = "INSERT INTO `cart`  VALUES (null,'$img','$color','$size','$num','$price','$pirceNew','$master','$name','$coding')";
        $res1 = mysqli_query($conn,$sql1);
    }
    mysqli_close($conn);
        if($res1){
    	echo json_encode(array("code"=>1));
    }else{
    	echo json_encode(array("code"=>0));
    }

?>