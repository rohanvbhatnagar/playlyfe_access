<?php
include('connect.php');
$actions = $pl->get('/runtime/actions',array('player_id' => 'rrr'));


	print_r(json_encode($actions));
	header('Content-Type:application/json');


	?>