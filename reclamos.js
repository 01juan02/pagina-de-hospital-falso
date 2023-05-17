let reclamos = "reclamos.html";
let inicio = "pagina2.html"; let main = document.querySelector(".inicio");
let informacion = "informacion.html"; let info = document.querySelector(".informacion");
let nosotros = "nosotros.html"; let nos = document.querySelector(".nosotros");
let contacto = "contacto.html"; let contact = document.querySelector(".contacto");
main.addEventListener("click",irAInicio);
function irAInicio(){
	window.open(inicio);
	window.close(reclamos);
}
info.addEventListener("click",irAInformacion);
function irAInformacion(){
	window.open(informacion);
	window.close(reclamos);
}
nos.addEventListener("click",irANosotros);
function irANosotros(){
	window.open(nosotros);
	window.close(reclamos);
}
contact.addEventListener("click",irAContacto);
function irAContacto(){
	window.open(contacto);
	window.close(reclamos);
}