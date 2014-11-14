var args = arguments[0] || {};

function enviarMenu(e){
	// Get the section of the clicked item
	var seccion = $.listConfiguracion.sections[e.sectionIndex];
	// Get the clicked item from that section
	var item = seccion.getItemAt(e.itemIndex);	
	console.log("****************************************" + JSON.stringify(item));
	
	// var verificentroView = Alloy.createController("").getView();
	// verificentroView.open();
}