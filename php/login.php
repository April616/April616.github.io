<?php
    include "./base.php";
    $type = $_REQUEST["type"];
    $uname = $_REQUEST['username'];
    $upass = $_REQUEST['password'];

    // $type = "login";
    // $uname = "wwbdsg666";
    // $upass = "wwbdsg666!@#";
    // $expires = '1';
    // 建立连接
    $link =  mysqli_connect('localhost','root','root','fila');
    if($type === "login"){          //add为注册  login登录
        $sql = "SELECT * FROM `user` WHERE `username`='$uname' AND `password`='$upass'";
            $res = mysqli_query($link,$sql);
            $row = mysqli_fetch_assoc($res);
            if(count($row)>0){
                echo '{"err":1,"msg":"登录成功"}';
            }else{
                echo '{"err":-1,"msg":"登录失败"}';
            };
    };
    
    
    if($type==='add'){
    $uphone = $_REQUEST['uphone'];
        $sql = "SELECT * FROM `user` WHERE `username`='$uname'";
        $res = mysqli_query($link,$sql);
        $row = mysqli_fetch_all($res,MYSQLI_ASSOC);
        if(count($row)>0){
            echo '{"err":2,"msg":"对不起用户名已经占用"}';
        }else{
            $sql1 = "INSERT INTO `user`  VALUES (null,'$uname','$upass','$uphone',null)";
            $res1 =  mysqli_query($link,$sql1);
            $num = mysqli_affected_rows($link);//返回受影响的条数\
            if( $num > 0 ){
                echo '{"err":3,"msg":"注册成功"}';
            }else{
                echo '{"err":4,"msg":"注册失败"}';
            };

            mysqli_close($link);
        };
    };

?>