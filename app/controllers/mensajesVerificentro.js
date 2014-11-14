var args = arguments[0] || {};

function regresar(){
	$.winVerificentro.close();
}

$.winVerificentro.addEventListener("close", function(){
	$.destroy();
	console.log("****DESTRUIDO****");
});
