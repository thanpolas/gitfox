<?php
require_once(__DIR__.'/credentials.php');
if(isset($_GET['code']) || isset($_GET['debug'])) {
    if(!isset($_GET['debug'])) {
        $params['code']=$_GET['code'];
        $url='https://github.com/login/oauth/access_token';

        $ch = curl_init();
        //set the url, number of POST vars, POST data
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_POST, count($params));
        curl_setopt($ch,CURLOPT_POSTFIELDS, http_build_query($params));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result = curl_exec($ch);
    }
    header('Content-type: application/json');
    parse_str($result);
    echo json_encode(array('access_token'=>$access_token, 'token'=>$token_type));
} else if(isset($_GET['error'])) {
    //HTTP status for access_denied
}
