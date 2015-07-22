<?php
		include('connect.php');

$str = strtolower($_POST['action_id']);


	if($str)
	{
		$response = $pl->post("/runtime/actions/".$str."/play",array('player_id' => 'rrr'));
	    header('Content-Type:application/json');
	    

       /* foreach($response['events']['local'] as $event){
        	
        		foreach($event["changes"] as $change){
        			$x = $change["delta"]["new"];

        			$change["delta"]["old"] = $x;

        			echo $change["delta"]["old"];

        	       
        		}
        }*/
        echo json_encode($response);
    }
?>