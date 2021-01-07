<?php
    include "./base.php";
    $uname = $_REQUEST['username'];
    $upass = $_REQUEST['password'];
    // $uname = "789789789789";
    // $upass = "789789789789";
    // 建立连接
    $link =  mysqli_connect('localhost','root','root','fila');
        $sql = "SELECT * FROM `user` WHERE `username`='$uname'";
        $res = mysqli_query($link,$sql);
        $row = mysqli_fetch_all($res,MYSQLI_ASSOC);
        if(count($row)>0){
            echo '{"err":2,"msg":"对不起用户名已经占用"}';
        }else{
            $sql1 = "INSERT INTO `user`  VALUES (null,'$uname','$upass',null,null)";
            $res1 =  mysqli_query($link,$sql1);
            $num = mysqli_affected_rows($link);//返回受影响的条数\
            if( $num > 0 ){
                echo '{"err":3,"msg":"注册成功"}';
            }else{
                echo '{"err":4,"msg":"注册失败"}';
            };

            mysqli_close($link);
        };
?>