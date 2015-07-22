var operator_object = {
  eq: "equal to",
  ne: "not equal to",
  gt: "greater than",
  ge: "greater than or equal to",
  lt: "less than",
  le: "less than or equal to"
};
var badge_object = {
  S: "Star",
  Sm: "Smiley",
  I: "ICQ",
  G: "Game"
};
var level_object = {
  l1: "Level 1",
  l2: "Level 2",
  l3: "Level 3"
};

function select_dropdown(el) {
  var operator = '<select id="operator_value" style="margin-top:10px;" class="form-control"><option value="">Select a operator</option>';
  var metric_dropdown_process = document.getElementById("metric_dropdown_value").value;
  console.log(metric_dropdown_process);
  var id_type = idtotype(metric_dropdown_process);
  $(el).siblings().filter('input[name]').val(id_type);
  if (id_type == "point") {
    for (var operator_dropdown in operator_object) {
      operator += '<option value="' + operator_object[operator_dropdown] + '">' + operator_object[operator_dropdown] + '</option>';
    }
    operator += '</select>';
    $('#operator_control').empty();
    $('#operator_control').append(operator);
    operator = '<input type="text" placeholder="points" class="form-control" style="margin-top:10px; margin-left:5px;"/>';
    $('#operator_control').append(operator);
  }
  if (id_type == "badge") {
    console.log("jbdjnsl");
    for (var operator_dropdown in operator_object) {
      operator += '<option value="' + operator_object[operator_dropdown] + '">' + operator_object[operator_dropdown] + '</option>';
    }
    operator += '</select>';
    $('#operator_control').append(operator);
    operator = '<input type="text" placeholder="points" class="form-control" style="margin-top:10px; margin-left:5px;"/>';
    $('#operator_control').append(operator);
    var badge = '<select  id="badges_value" class="form-control" style="margin-left:5px; margin-top:10px"><option value="">Select a set item</option>';
    for (var badge_dropdown in badge_object) {
      badge += '<option value="' + badge_object[badge_dropdown] + '">' + badge_object[badge_dropdown] + '</option>';
    }
    badge += '</select>';
    $('#operator_control').append(badge);
  }
  if (id_type == "level") {
    console.log("bjndl");
    $('#operator_control').empty();
    for (var operator_dropdown in operator_object) {
      operator += '<option value="' + operator_object[operator_dropdown] + '">' + operator_object[operator_dropdown] + '</option>';
    }
    operator += '</select>';
    $('#operator_control').append(operator);
    var level = '<select  id="level_values" class="form-control" style="margin-left:5px;margin-top:10px;"><option value"">Select a state</option>';
    for (var level_dropdown in level_object) {
      level += "<option value=" + level_object[level_dropdown] + ">" + level_object[level_dropdown] + "</option>";
    }
    level += '</select>';
    $('#operator_control').append(level);
  }
}
/*function metric_dropdown_proceed()
{
  var metric_dropdown_2 = document.getElementById("metric_dropdown_value");
  console.log(metric_dropdown_2);
}*/