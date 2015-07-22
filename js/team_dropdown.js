function team_dropdown(data,base) {
	var metric_parent = $(base).parent().siblings().find("select"); 
    team_parent_id =$(base).attr("name").replace("[type]","[context][definition_id]");


  var type_value = "<input type='hidden'  name='requires[context][type]'>";
  var team_drop = '<select class="form-control" name='+ team_parent_id +'><option value="">---Select a Team---</option>';
  for (var i = 0; i < data.length; i++) {
    team_drop += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
  }
  team_drop += '</select>';
  
  return team_drop;
}