function name_and_type(base){
	console.log("TYPE BASE", base);

	$base = $(base);
	var name_start="requires";
	while(!$base.is("#root")) {
		$parent = $base.parent();
		console.log("PARENT", $parent);
		var i = $base.index();	
		$base = $parent;
		name_start+="[expression][" + (i-2) + "]";
	}
	name_start +="[type]"; 
	return name_start;
}