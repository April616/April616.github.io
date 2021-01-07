<?php
require('./model/_connect.php');
$coding = $_REQUEST['coding'];
$master = $_REQUEST['master'];
$size  = $_REQUEST['size'];
// $coding = "F11M118601F";
// $master = "wwbdsg666";
// $size  = "2XL";
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `coding`='$coding' AND `master`='$master' AND `size`='$size' ";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>