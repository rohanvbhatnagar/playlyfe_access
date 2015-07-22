function time_slice_dropdown(base) {
  var time_parent = $(base).parent().siblings().find("select");
  time_parent_name = $(base).attr("name").replace("[type]", "[context][func]");
  var type_value = "<input type='hidden'  name='requires[context][type]'>";
  var time_slice_dropdown = "<select class='form-control' name=" + time_parent_name + "><option  value='hour_of_day'>Hour of the day</option><option value='day_of_week'>Day of the week</option>";
  time_slice_dropdown += "<option  value='day_of_week'>Day of the week</option><option value='day_of_month'>Day of the month</option>";
  time_slice_dropdown += "<option value='day_of_year'>Day of the year</option><option value='week_of_year'>Week of the year</option>";
  time_slice_dropdown += "<option value='month_of_year'>Month of the year</option></select>";
  var operator_object = {
    eq: "equal to",
    neq: "not equal to",
    gt: "greater than",
    ge: "greater than or equal to",
    lt: "less than",
    le: "less than or equal to"
  };
  var operator_parent_name = $(base).attr("name").replace("[type]", "[context][operator]");
  var operator = '<select  style="margin-top:10px;" name = ' + operator_parent_name + ' class="form-control"><option value="">Select a operator</option>';
  for (var operator_dropdown in operator_object) {
    operator += '<option value="' + operator_dropdown + '">' + operator_object[operator_dropdown] + '</option>';
  }
  operator += '</select>';
  var input_parent_name = $(base).attr("name").replace("[type]", "[context][value]");
  operator += '<input type="text" placeholder="points" name =' + input_parent_name + ' class="form-control" style="margin-top:10px; margin-left:5px;"/>';
  operator += time_slice_dropdown;
  return operator;
}