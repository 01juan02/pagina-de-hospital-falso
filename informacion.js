let paginaActual = "informacion.html"; 
let inicio = "pagina2.html"; let main = document.querySelector(".inicio");
let contacto = "contacto.html"; let contact = document.querySelector(".contacto");
let nosotros = "nosotros.html"; let nos = document.querySelector(".nosotros");
let reclamos = "reclamos.html"; let rqs = document.querySelector(".rqs");
main.addEventListener("click",irAInicio);
function irAInicio(){
	window.open(inicio);
	window.close(paginaActual)
}
contact.addEventListener("click",irAContacto);
function irAContacto(){
	window.open(contacto);
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