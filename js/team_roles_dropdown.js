function team_roles_dropdown(data, base) {
  var metric_parent = $(base).parent().siblings().find("select");
  var team_parent_name = $(base).attr("name").replace("[type]", "[context][role]");
  var team_roles_drop = '<select class="form-control" name='+ team_parent_name +'><option value="">---Any Role---</option>';
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].roles.length; j++) {
      team_roles_drop += '<option value="' + data[i].roles[j] + '">' + data[i].roles[j] + '</option>';
    }
  }
  team_roles_drop += '</select>';
  return team_roles_drop;
}