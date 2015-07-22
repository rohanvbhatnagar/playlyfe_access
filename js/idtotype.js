function idtotype(metric_id) {
  var metric_value_dropdown = [{
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
  for (i = 0; i < metric_value_dropdown.length; i++) {
    if (metric_id == metric_value_dropdown[i].id) {
      console.log(metric_id);
      var type = metric_value_dropdown[i].type;
      break;
    }
  }
  console.log(type);
  return type;
}