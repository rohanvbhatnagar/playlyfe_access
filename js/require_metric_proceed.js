function metric_proceed(base) {
  var metric_value = [{
    name: "Adventure",
    id: "adventure",
    type: 'point'
  }, {
    name: "Expereince",
    id: "expereince",
    type: 'point'
  }, {
    name: "Badge",
    id: "badge",
    type: 'badge'
  }, {
    name: "Level",
    id: "level",
    type: 'level'
  }];
  
  $base = $(base);
  var metric_parent = $(base).parent().siblings().find("select"); 
  var metric_parent_name =$(base).attr("name").replace("[type]","[context][id]");
  var context_type_name =$(base).attr("name").replace("[type]","[context][type]");
  var type_value = "<input type='hidden'  name='"+context_type_name+"'>";
  var metric_dropdown = "<select onchange='select_dropdown(this)' id='metric_dropdown_value' name=" + metric_parent_name +" class='form-control'><option value=''>--Select a metric--</option>";
  for (var i = 0; i < metric_value.length; i++) {
    metric_dropdown += '<option value=' + metric_value[i].id + ' >' + metric_value[i].name + '</option>';
  }
  metric_dropdown += '</select>';

  
  

  var operator_parent_name =$(base).attr("name").replace("[type]","[context][operator]");   
  var operator_object = {
    eq: "equal to",
    neq: "not equal to",
    gt: "greater than",
    ge: "greater than or equal to",
    lt: "less than",
    le: "less than or equal to"
  };
  var operator = '<select onchange="select_dropdown()" id="operator_value" name = ' + operator_parent_name + '  style="margin-top:10px;" class="form-control"><option value="">Select a operator</option>';
  for (var operator_dropdown in operator_object) {
    operator += '<option value="' + operator_dropdown + '">' + operator_object[operator_dropdown] + '</option>';
  }
  operator += '</select>';
  var input_parent_name = $(base).attr("name").replace("[type]","[context][value]");
  operator += '<input type="text" placeholder="points" class="form-control" name =' + input_parent_name +' style="margin-top:10px; margin-left:5px;"/>';

  metric_dropdown += type_value;
  metric_dropdown += operator;
  return metric_dropdown;
}