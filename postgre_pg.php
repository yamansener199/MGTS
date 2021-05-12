
<?php

$conn = pg_pconnect("host=localhost port=5432 dbname=alpera_test user=postgres password=8748 ");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

echo "<form action=\"$PHP_SELF\" method=\"GET\">";
echo "<b>Number of Paging :</b>
<select name='batas'>
<option value='3'>3
<option value='5'>5
<option value='10'>10
<option value='12000'>12000
</select>&nbsp;";
echo "<input type=submit value='submit'>";
echo "</form>";

$flname=basename($PHP_SELF);
$query_code="SELECT * FROM daily ORDER BY arac_id";
$res = pg_query($conn,$query_code);

$jml = @pg_num_rows($res);
if ($jml == 0) {
echo "<font color=red>
<b>Ooops.... Data not found</b></font>";
exit;
}

// Initialization default value for paging
if (isset($_GET["batas"])) {
$batas = $_GET["batas"];
} else {
$batas = 3;
}

if (($jml % $batas) == 0) {
$jmlpage=(int)($jml/$batas);
} else {
$jmlpage=((int)$jml/$batas)+1;
}

// Inisialisasi variabel page
if (isset($_GET["page"])) {
$page = $_GET["page"];
} else {
$page = 1;
}

if ($page>$jmlpage) {
$page = $jmlpage;
}

while ($rows = pg_fetch_array($res,null)) {
$arrdata[] = $rows;
}

$end = ($page*$batas)-1;
$start= $end-($batas-1);
if ($end > $jml) {
$end = $jml-1;
}

$css = file_get_contents('table.css');
echo '<div id = "scrollit">';
echo '<style type = "text/css">'.$css.'</style>';
for ($i=$start; $i<=$end; $i++) {
$arr[] = $arrdata[$i];
}
echo "<table width= 1080 style='border:1pt solid #666666;'>";
foreach ($arr as $row) {
echo "<tr><td>Araç Adı</td>
<td>:</td><td>$row[1]</td></tr>";
echo "<tr><td>Lat</td><td>:</td><td>$row[2]</td></tr>";
echo "<tr><td>Lng</td>
<td>:</td><td>$row[3]</td></tr>";
echo "<tr><td>&nbsp;</td></tr>";
}

echo "</table> <br>";
echo "</div>";


// Manage paging navigation
for ($n=1; $n<=$jmlpage; $n++) {
$b = $page + 1;
if ($n != $page) {
echo "&nbsp;<a href='$flname?page=$n&batas=$batas'>$n</a>&nbsp;";
} else {
echo "<font color='#999999'><b>$n </b></font>";
}
}

// Next navigation paging
if (($n != $page) && ($n > $b)) {
echo "&nbsp;<a href='$flname?page=$b&batas=$batas'>
Next</a>";
}
?>