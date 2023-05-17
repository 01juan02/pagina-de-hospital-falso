let paginaActual = "pagina2.html"; 
let contacto = "contacto.html"; let contact = document.querySelector(".contacto");
let informacion = "informacion.html"; let info = document.querySelector(".informacion");
let nosotros = "nosotros.html"; let nos = document.querySelector(".nosotros");
let reclamos = "reclamos.html"; let rqs = document.querySelector(".rqs");
contact.addEventListener("click",irAContacto);
function irAContacto(){
	window.open(contacto);
	window.close(paginaActual)
}
info.addEventListener("click",irAInformacion);
function irAInformacion(){
	window.open(informacion);
	window.close(paginaActual);
}
nos.addEventListener("click",irANosotros);
function irANosotros(){
	window.open(nosotros);
	window.close(paginaActual);
}
rqs.addEventListener("click",irAReclamos);
function irAReclamos(){
	window.open(reclamos);
	window.close(paginaActual);
}