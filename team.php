<?php
include('connect.php');
$team = $pl->get('/design/versions/latest/teams', array('player_id' => 'rrr'));


print_r(json_encode($team));
header('Content-Type:application/json');
?>
