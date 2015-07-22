function select_button(el){
	var parent = $(el).parent();
	console.log(window.el = el, window.par = parent);
	//console.log(parent);
	//console.log(select_values(parent));


	parent.append(create_require(parent[0]));
	

}