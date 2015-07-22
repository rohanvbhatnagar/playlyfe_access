var rule = 0;

function create_require(el,id) {
  
  var container = $('<div class="operator_flow"></div>');
  rule++;
  var row = '<div class="flow-control"><div id="rule' + rule + '">';
  row += '<select class="option_value">';
  row+='<option value="select">--Select any expression--</option>';
  row += '<option value="metric">If Player has a metric</option>';
  row += '<option value="action">If action has been triggered N times</option>';
  row += '<option value="time">If the following timed condition is satisfied</option>';
  row += '<option value="team">If Player is a part of team</option>';
  row += '<option value="and">All of the following rules</option>';
  row += '<option value="or">Any of the following rules</option></select>';
  row += '';
   

  $row = $(row);
  
  $row.append(container);
  var parent = $(el).parent();
  //$('#button-create').append(row);
  parent.append($row);
  $row.find('select').on('change', function() {
    select_values(this, container);
  });
  if(id!=null){
    $row.attr("id",id);

  }
  
    
    var name_attr = name_and_type($row);
    console.log(name_attr);
    $row = $row.children().find("select");
    $row.attr("name",name_attr);
    




    
    
  


}
/*Condition = {

  create: -
    // 
$(id).select(condition.onChange)

  createMetric: function () {

  }

  onChange: function (value) {
    switch(type) {
      case 'Metric'
        createMetric()
      case: 'TYpe2'
    }

  }
}
*/