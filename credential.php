 <?php
include ('connect.php');
?>
 <html>
 <head>
  <title>Playlyfe</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="./js/trigger.js" type="text/javascript"></script>
  <script src="./js/create_action.js"></script>
  <script src="./js/create_require_menu.js"></script>
  <script src="./js/create_rule_button.js"></script>
  <script type="text/javascript" src="./js/select_dropdown.js"></script>
  <script src="./js/idtotype.js"></script>
  <script src="./js/require_metric_proceed.js"></script>
  <script src="./js/require_proceed.js"></script>
  <script src="./js/reward.js"></script>
  <script src="./js/simulate.js"></script>
  <script src="./js/action_proceed.js"></script>
  <script src="./js/time_slice_dropdown.js"></script>
  <script type="text/javascript" src="./js/team_dropdown.js"></script>
  <script type="text/javascript" src="./js/team_roles_dropdown.js"></script>
  <script type="text/javascript" src="./js/all_rules.js"></script>
  <script type="text/javascript" src="./js/select_button.js"></script>
  <script type="text/javascript" src="./js/name_and_type.js"></script>
</head>
<body style= "background">
  
        
      </div>
      <div class="navbar-collapse collapse">
        <form class="navbar-form navbar-right" role="form" id="form" action="create_action.php" >
          <div class="form-group">
            <input type="text" placeholder="Action" name="Action" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="ID" name = "ID" class="form-control">
          </div>
          <p id="rows" style="display:inline-block;">
            <input onclick="addRow();" type="button" class="btn btn-success"  value="Reward" id="reward" />
            <button type="button" class="btn btn-success" onclick="create()">Create</button></p>
            <p id="condition" style="dispaly:inline-block;">
              <button type="button" class="btn btn-success" onclick="addButton()" style="margin-left:600" value="conditions" id="conditions">Awarded on conditions</button></p>
              <p id="simulate">
                <input type="button" class="btn  btn-success" value="Deploy" id="deploy" onclick="simulator()" /></p>


              </form>
            </div><!--/.navbar-collapse -->
          </div>
        </div>

        <div class="jumbotron">
          <div class="container">
            <ul>

              <?php
$players = $pl->get('/runtime/players', array('player_id' => 'rrr'));
echo "<li class='list-group-item disabled'><h2>Players</h2></li>";
foreach ($players["data"] as $value) {
  $id = $value["id"];
  echo "<li class='list-group-item'><h3>$id</h3></li>";
}

$actions = $pl->get('/runtime/actions', array('player_id' => 'rrr'));

echo "<li class = 'list-group-item disabled'><h3>Player Action</h3></li>";

foreach ($actions as $action) {
  $name = $action["Action"];
  $id = $action["ID"];
  
  echo "<li class = 'list-group-item'>";
  
  /*foreach($action["rewards"] as $reward){                           //pintintg reward according to respective actions
              $value = $reward['value'];
              $verb = $reward['verb'];
              print_r($value);
              echo "<div>$verb</div>";
              echo $reward['metric']['name'];
              echo "<div></div>";
            }*/
  echo "<h4>$name</h4></li>";
  
  echo "<div id='score'></div>";
  
  /*
            echo "<input type='submit'  value = 'Comment' class = 'btn btn-success' onclick='trigger(\"Comment\")'   name='action_id'>\n";
    
             echo "<input type='submit' value='Like' class = 'btn btn-success' onclick='trigger(\"Like\")' name='action_id' style = 'margin-left:100px'  >";
             echo "<input type='submit' value = 'Login' class = 'btn btn-success' onclick='trigger(\"Login\")' name='action_id' style = 'margin-left:200px'>";
            echo "<input type='submit' value='Spam' class = 'btn btn-success' onclick='trigger(\"Spam\")' name='action_id' style = 'margin-left:300px'  >";
             
  */
  for ($i = 0; $i < 1; $i++) {
    echo "<input type='submit' value = '$id' class = 'btn btn-success' onclick='trigger(\"$id\")'  name='action_id'>";
  }
}

$player = $pl->get('/runtime/player', array('player_id' => 'rrr'));

foreach ($player["scores"] as $score) {
  switch ($score['metric']['type']) {
    case 'point':
      echo "<div id='updating'>";
      echo $score['metric']['name'] . "-";
      echo $score['value'] . "</div>";
      break;
  }
}
?>
        </ul>
      </div>
    </div>
    


  </body>
  </html>








