<?php
    function create_table($table){
        $conn = pg_pconnect("host=localhost port=5432 dbname=master_alpera user=postgres password=123 ");
        $query = "CREATE TABLE $table (id serial primary key, json_file JSON)";
        pg_query($conn, $query);
    }

$url = './arac.json';
$data = file_get_contents($url);
$b =json_encode(array('Saat' => $data),JSON_UNESCAPED_UNICODE,JSON_UNESCAPED_LINE_TERMINATORS  );
file_put_contents("data.json", $b);

/* $query = "SELECT json_file FROM daily WHERE arac_id = 1";
$result = pg_query($conn, $query);
$jsons = array();
for($i = 0; $i<$result.row(); $i++){
    $data = json_decode($result);
    $jsons.push($data);

} */




?>