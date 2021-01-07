<?php
require('./_connect.php');

//书写sql语句
$sql = "CREATE TABLE cart (
			id VARCHAR(300) NOT NULL PRIMARY KEY,
			serial VARCHAR(300) NOT NULL,
			master VARCHAR(300) NOT NULL,
			color VARCHAR(300) NOT NULL,
			versions VARCHAR(300) NOT NULL,
			name VARCHAR(300) NOT NULL,
			img VARCHAR(300000) NOT NULL,
			price VARCHAR(30) NOT NULL,
			num VARCHAR(30) NOT NULL,
			date TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>