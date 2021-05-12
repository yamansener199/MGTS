<?php 

$conn = pg_pconnect("host=localhost port=5432 dbname=alpera_mfifo_test user=postgres password=123");
if (!$conn) {
echo "An error occurred.\n";
exit;
}
if(isset($_POST['submit'])&&!empty($_POST['submit'])){

    $hashpassword = md5($_POST['password']);
    $sql ="select * from users where username = '".pg_escape_string($_POST['username'])."' and password ='".$hashpassword."'";
    $data = pg_query($conn,$sql); 
    $login_check = pg_num_rows($data);
    if($login_check > 0 && $_POST['car_type']!="0"){ 
    session_start();
      $_SESSION["loggedin"] = true;
      $_SESSION["password"] = $hashpassword; 
      $_SESSION["tabnum"] = -1;
      $_SESSION["is_checked"] ="";
      $obj = pg_fetch_object($data);
      $_SESSION["username"] = $obj->username;   
      $_SESSION["acclvl"] = $obj->acclvl;   
      $_SESSION["car_type"] = $_POST['car_type']; 
        header('Location: index.php');

      } 
    else{
      if(empty(trim($_POST["username"])) || empty(trim($_POST["password"]))){
      $er1 = "Please enter a username and password."; 
      }elseif ($_POST["car_type"]=="0") {
      $er1 = "Please select a vehicle type";
      }else{
      $er1 = "Username or password is wrong";
      }
      $t=$er1;
      require 'login_page.php';
    }
}


?>