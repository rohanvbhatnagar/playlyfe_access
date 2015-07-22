<?php
include ('connect.php');

/*[1,2,3]  // array(1,2,3)
array(1=>1, 2=>2)  // {1: 1, 2: 2}
// $first = array("name" , "id" , "rules" => array("rewards" => array("metric"=>array("id" , "type" => "point"), "value" , "verb" )));
{
  0: name
  1: id
  rules: {
    rewards: {
      metric: {
        0: id
        type: point
      }
      0: value
      1: verb
    }
  }
}*/

//echo "Post";
header('Content-Type:application/json');
try {
  $first = array();
  $first['name'] = $_POST['Action'];
  $first['id'] = $_POST['ID'];
  $first['rules'] = array();
  $first['rules'][0] = array("rewards" => array());
  
  for ($i = 0; $i < count($_POST['reward']); $i++) {
    
    $first['rules'][0]['rewards'][$i]['value'] = $_POST["reward"][$i]["point"];
    $first['rules'][0]['rewards'][$i]['verb'] = $_POST["reward"][$i]["verb"];
    $first['rules'][0]['rewards'][$i]['metric'] = array("id" => $_POST["reward"][$i]["metric"], "type" => "point");
  }
  $first['requires'] = $_POST['requires'];
  $create = $pl->post('/design/versions/latest/actions', array('player_id' => 'rrr'), $first);
  print_r(json_encode($create));
}
catch(Exception $e) {
  
  print_r(json_encode($e));
}

//

//echo "sakasnflanaslafsn";
//print_r(json_encode($first));

//echo "ndaklnadl";

?>