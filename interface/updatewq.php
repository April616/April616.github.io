<?php
require('./model/_connect.php');

$coding = $_REQUEST['coding'];
$num = $_REQUEST['num'];//商品数量
$master = $_REQUEST['master'];//获取当前购物车的主人
// $id = 100649368;
// $num = 7;
// $master = "wwbdsg666";
$sql = "UPDATE `cart` SET `num`='$num' WHERE `coding`='$coding' AND `master`= '$master' ";

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>