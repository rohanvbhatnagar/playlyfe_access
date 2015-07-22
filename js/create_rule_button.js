
  var button=0;
  function addButton()
  {
    button++;
    console.log(button);
    //change it to jquery see create_require_menu.js
    
    var row = '<p id="button'+button+'"><button type="button" class="btn btn-success" style="margin-left:800;" onclick="create_require(this,\'root\')">Create a Rule</button></p>';

    $('#condition').append(row); 
  }  
