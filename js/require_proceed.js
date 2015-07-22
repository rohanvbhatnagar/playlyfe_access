// var metric_value=["Adventure","Expereince","Badge","Level"];
function select_values(selector, el) {
  console.log(selector);
  el.empty();
  var selector = $(selector);
  var values = $(selector).val();
  console.log(values);
  if (values == "metric") {
    el.append(metric_proceed(selector));
  } else if (values == "action") {
    $.get('action.php', function(data) {
      el.append(action_proceed(data,selector));
    });
  } else if (values == "time") {
    el.append(time_slice_dropdown(selector));
  } else if (values == "team") {
    $.get('team.php', function(data) {
      el.append(team_dropdown(data,selector));
    });
    $.get('team_roles.php', function(data) {
      el.append(team_roles_dropdown(data,selector));
    });
  } else if (values == "and") el.append(all_rules());
}