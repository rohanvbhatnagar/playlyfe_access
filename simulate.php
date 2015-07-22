<?php
include('connect.php');
$simulate = $pl->post('/design/versions/latest/simulate',array('player_id' => 'rrr'));
header('Content-Type:application/json');
?>