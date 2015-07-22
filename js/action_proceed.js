function action_proceed(data,base) {
  console.log(base);
      var action_parent = $(base).parent().siblings().find("select"); 

  action_parent_name =$(base).attr("name").replace("[type]","[context][id]");
 var type_value = "<input type='hidden'  name='requires[context][type]'>";
 var action_iterate = '<select class="form-control" name='+ action_parent_name + '><option value="">Select a action</option>';
  for (var i = 0; i < data.length; i++) {
    action_iterate += '<option value="' + data[i].name + '">' + data[i].name + '</option>';
  }
  action_iterate += '</select></div>';
  
  var operator_object = {
    eq: "equal to",
    neq: "not equal to",
    gt: "greater than",
    ge: "greater than or equal to",
    lt: "less than",
    le: "less than or equal to"
  };
  var operator_parent_name =$(base).attr("name").replace("[type]","[context][operator]");   

  var operator = '<select id="operator_value" name = '+ operator_parent_name +' class="form-control"><option value="">Select a operator</option>';
  for (var operator_dropdown in operator_object) {
    operator += '<option value="' + operator_dropdown + '">' + operator_object[operator_dropdown] + '</option>';
  }
  operator += '</select>';
    var input_parent_name = $(base).attr("name").replace("[type]","[context][value]");

  operator += '<input type="text" name ='+ input_parent_name +' placeholder="points" class="form-control" />';
  //action_iterate+=type_value;
  operator+=action_iterate;
  return operator;
}