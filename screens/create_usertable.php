<?php

  $conn = pg_pconnect("host=localhost port=5432 dbname=alpera_mfifo_test user=postgres password=123");
  if (!$conn) {
  echo "An error occurred.\n";
  exit;
  }

/*   $query_createtable = "CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );";
 
  $result_table =  pg_query($conn, $query_createtable);*/
  $psw = md5('12345');
  $query_insertUser = "INSERT INTO users (id,username,password,acclvl) VALUES (02,'user','$psw',2);";

  $result_insertUser = pg_query($conn,$query_insertUser);

?>