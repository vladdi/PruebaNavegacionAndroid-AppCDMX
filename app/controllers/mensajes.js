var args = arguments[0] || {};

function enviarMenu(e){
	// Get the section of the clicked item
	var seccion = $.listMensajes.sections[e.sectionIndex];
	// Get the clicked item from that section
	var item = seccion.getItemAt(e.itemIndex);	

	var verificentroView = Alloy.createController("mensajesVerificentro").getView();
	verificentroView.open();
}