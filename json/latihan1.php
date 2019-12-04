<?php 

// $mahasiswa = [
// 	[
// 		"nama" => "Amanda Shakila",
// 		"nrp" => "173040063",
// 		"email" => "amanda_173040063@gmail.com"
// 	],
// 	[
// 		"nama" => "Evi Silvia",
// 		"nrp" => "173040050",
// 		"email" => "evi_173040050@gmail.com"
// 	]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpmvc', 'root', '');
$db= $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

 ?>