let contacto = "contacto.html";
let inicio = "pagina2.html"; let main = document.querySelector(".inicio");
let informacion = "informacion.html"; let info = document.querySelector(".informacion");
let nosotros = "nosotros.html"; let nos = document.querySelector(".nosotros");
let reclamos = "reclamos.html"; let rqs = document.querySelector(".rqs");
main.addEventListener("click",irAInicio);
function irAInicio(){
	window.open(inicio);
	window.close(contacto);
}
info.addEventListener("click",irAInformacion);
function irAInformacion(){
	window.open(informacion);
	window.close(contacto);
}
nos.addEventListener("click",irANosotros);
function irANosotros(){
	window.open(nosotros);
	window.close(contacto);
}
rqs.addEventListener("click",irAReclamos);
function irAReclamos(){
	window.open(reclamos);
	window.close(contacto);
}