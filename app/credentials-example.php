<?php
//For debug reasons response of temporary code exchange of oauth token
$result = "access_token=".uniqid()."&token_type=bearer";
//credentials of app
$params = array(
    'client_id'     => 'xxx',
    'client_secret' => 'xxx',
);
