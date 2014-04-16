<?php
$request = json_decode(file_get_contents('php://input'));//json
$requestType = $_REQUEST['srv'];//querystring
$urlItis = 'http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?pageSize=10&pageNum=1&ascend=false';
$urlWiki = 'http://en.wikipedia.org/w/api.php?format=json'
            .'&action=query&list=search&srprop=snippet|sectionsnippet|sectiontitle'
            //.'&action=query&prop=info|images' // &titles=[search term]
            //.'&list=allimages&ailimit=10&aiprop=url'//&aifrom=[search term]
            ;
$url = $requestType == 'wiki' ? $urlWiki : $urlItis;
$queryString = '';

if($request){
    foreach ($request as $key => $value) {
        if($key != 'srv'){//type of service, ignore this one
            $queryString .= '&' . $key . '=' . urlencode($value);
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
