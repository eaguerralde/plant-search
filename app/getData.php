<?php
$request = json_decode(file_get_contents('php://input'));
$queryString = '';
$url = 'http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?pageSize=10&pageNum=1&ascend=false';

foreach ($request as $key => $value) {
    $queryString .= '&' . $key . '=' . $value;
}
$url .= $queryString;
//echo $url;
try
  {
//    $json = file_get_contents( $url );
//    $obj = json_decode($json);
//    echo json_encode($obj);//->access_token;
    echo file_get_contents( $url );
  }
catch(Exception $e)
  {
    echo json_encode('Error: ' .$e->getMessage());
  }
?>
