<?php
$request = json_decode(file_get_contents('php://input'));//json
$requestType = $_REQUEST['srv'];//querystring
$urlItis = 'http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?pageSize=10&pageNum=1&ascend=false';
$urlWiki = 'http://en.wikipedia.org/w/api.php?action=query&format=json&prop=info|images';
$url = $requestType == 'wiki' ? $urlWiki : $urlItis;
$queryString = '';

if($request){
    foreach ($request as $key => $value) {
        if($key != 'srv'){//type of service, ignore this one
            $queryString .= '&' . $key . '=' . $value;
        }
    }

    $url .= $queryString;
}
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
