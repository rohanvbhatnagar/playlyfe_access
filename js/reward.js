var rowNum = 0;

function addRow() {
    rowNum++;
    console.log(rowNum);
    var row = '<p id="rowNum' + rowNum + '"><select class="form-control" name="reward[' + (rowNum - 1) + '][metric]"><option value="expereince" id="Expereince">Expereince</option><option value="adventure" id="Adventure">Adventure</option></select>';
    row += '<select class="form-control" name="reward[' + (rowNum - 1) + '][verb]"><option value="add">add</option><option value="remove">remove</option></select>';
    row += '<input type="text" class="form-control" name="reward[' + (rowNum - 1) + '][point]" placeholder="Point"> <input type="button" class="btn btn-success" value="Remove" id="remove" onclick="removeRow(' + (rowNum) + ')"></p>';
    jQuery('#rows').append(row);
    jQuery('#rowNum').addClass('remove');
}

function removeRow(rnum) {
    jQuery('#rowNum' + rnum).remove();
}