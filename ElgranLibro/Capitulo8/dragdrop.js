//funcion dragstart y preventDefault
function iniciar1(){
	origen1 = document.getElementById('imagen');
	//evt dragstart cuando el arrastre comienza
	origen1.addEventListener("dragstart", arrastrado,false);


	destino= document.getElementById('cajasoltar');
	
	destino.addEventListener('dragenter', function(e){//cancela eventos
		e.preventDefault(); }, false);


	destino.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);

	

	destino.addEventListener('drop', soltado, false);
}
function arrastrado1(e){
	var codigo='<img src="'+origen1.getAttribute('src')+'">';
	//Preparamos la informacion
	e.dataTransfer.setData('Text', codigo);
}
function soltado1(e){
	e.preventDefault();
	//obtenemos los datos 
	destino.innerHTML=e.dataTransfer.getData('Text');
}



//dataTransfer contiene informacion de arrastrar y soltar
//dataTransfer metodos
function iniciar2(){
	origen1=document.getElementById('imagen');
	origen1.addEventListener('dragstart', arrastrado, false);
	origen1.addEventListener('dragend', finalizado, false);
	soltar=document.getElementById('cajasoltar');
	soltar.addEventListener('dragenter', entrando, false);
	soltar.addEventListener('dragleave', saliendo, false);
	soltar.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}
function entrando2(e){
	e.preventDefault();
	soltar.style.background='rgba(0,150,0,.2)';
}
function saliendo2(e){
	e.preventDefault();
	soltar.style.background='#FFFFFF';
}
function finalizado2(e){
	elemento=e.target;
	elemento.style.visibility='hidden';
}
function arrastrado2(e){
	var codigo='<img src="'+origen1.getAttribute('src')+'">';
	e.dataTransfer.setData('Text', codigo);
}
function soltado2(e){
	e.preventDefault();
	soltar.style.background='#FFFFFF';
	soltar.innerHTML=e.dataTransfer.getData('Text');
}






//validar el tipo de imagen
//solo guardar el id en el data
function iniciar3(){
	//seleccionamos todas las imagenes dentro de la caja de imagenes
	var imagenes=document.querySelectorAll('#cajaimagenes > img');
	//fijamos el evento dragstart
	for(var i=0; i<imagenes.length; i++){
		imagenes[i].addEventListener('dragstart', arrastrado, false);
	}
	soltar=document.getElementById('cajasoltar');
	soltar.addEventListener('dragenter', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}
function arrastrado3(e){
	//guardamos el id en data 
	elemento=e.target;
	e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
function soltado3(e){
	e.preventDefault();
	//obtenemos id en data
	var id=e.dataTransfer.getData('Text');
	if(id!="imagen4"){
		var src=document.getElementById(id).src;
		soltar.innerHTML='<img src="'+src+'">';
		soltar.style.background="#FFFFFF";
	}else{
		soltar.style.background="#E50909";
		soltar.innerHTML='la imagen no es admitida';
	}
}



//setDragImage genera una imagen en miniatura
//agrega un lienzo para pintar la imagen   e.datatransfer
function iniciar4(){
	var imagenes=document.querySelectorAll('#cajaimagenes > img');
	for(var i=0; i<imagenes.length; i++){
		imagenes[i].addEventListener('dragstart', arrastrado, false);
		imagenes[i].addEventListener('dragend', finalizado, false);
	}
	soltar=document.getElementById('lienzo');
	lienzo=soltar.getContext('2d');


	soltar.addEventListener('dragenter', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}
function finalizado4(e){
	elemento=e.target;

	if(bandera){
		elemento.style.visibility='hidden';
		bandera=false;
	}
}
function arrastrado4(e){
	elemento=e.target;
	e.dataTransfer.setData('Text', elemento.getAttribute('id'));
	e.dataTransfer.setDragImage(elemento, 0, 0);
}
function soltado4(e){
	e.preventDefault();
	var id=e.dataTransfer.getData('Text');
	var elemento=document.getElementById(id);
	
	var posx=e.pageX-soltar.offsetLeft;
	var posy=e.pageY-soltar.offsetTop;
	lienzo.drawImage(elemento,posx,posy);
	bandera = true;

}


//SOLTAR ARCHIVOS
function iniciar(){
	soltar=document.getElementById('cajasoltar');
	soltar.addEventListener('dragenter', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}
function soltado(e){
	e.preventDefault();
	var archivos=e.dataTransfer.files;
	var lista='';
	for(var f=0;f<archivos.length;f++){
		lista+='Archivo: '+archivos[f].name+' '+archivos[f].size+'<br>';
	}
	soltar.innerHTML=lista;
}









window.addEventListener
('load',iniciar,false);