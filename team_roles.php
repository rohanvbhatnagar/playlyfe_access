<?php
include ('connect.php');
$team_roles = $pl->get('/runtime/definitions/teams', array('player_id' => 'rrr'));
print_r(json_encode($team_roles));
header('Content-Type:application/json');
?>