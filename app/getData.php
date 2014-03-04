<?php
$json = file_get_contents('http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?srchKey=homo%20sapiens&pageSize=10&pageNum=1&ascend=false');
$obj = json_decode($json);
echo json_encode($obj);//->access_token;
?>
