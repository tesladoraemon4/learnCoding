function  iniciar() {
	maximo = 600;//declaramos los pixeles maximos
	//obtenemos los elementos
	medio = document.getElementById('medio');
	reproducir = document.getElementById('reproducir');
	barra = document.getElementById('barra');
	progreso = document.getElementById('progreso');

	//fijamos los eventos
	//evento funcion booleano
	reproducir.addEventListener('click',presionar,false);
	barra.addEventListener('click',mover,false);

}


function presionar(){
	//si no esta pausado o no esta finalizado
	if(!medio.paused && !medio.ended){
		medio.pause();
		reproducir.innerHTML = 'Reproducir';
		window.clearInterval(bucle);
	}else{
		medio.play();
		reproducir.innerHTML='Pausa';
		bucle = setInterval(estado,1000);
	}
}


function estado(){
	if(!medio.ended){
	// obtiene el tiempo actual * 
		var total=parseInt(medio.currentTime*maximo/medio.duration);
		progreso.style.width=total+'px';
		//fija las barras de progreso
	}else{//cuando termina 
		progreso.style.width='0px';
		reproducir.innerHTML='Reproducir';
		window.clearInterval(bucle);
	}
}

function mover(e){//envia el evento en la letra e
	//si esta reproducido y no ha terminado
	if(!medio.paused && !medio.ended){
		//saca la posicion x del raton relativa a la pagina
		//offsetLeft distancia desde el lado izquierdo al comienzo de la pagina
		var ratonX = e.pageX-barra.offsetLeft;

		//sacas el nuevo tiempo por regla de 3
		var nuevoTiempo = ratonX*medio.duration/maximo;

		//fija el nuevo tiempo
		medio.currentTime = nuevoTiempo;
		//fija el nuevo ancho
		progreso.style.width = ratonX+'px';

	}


}


window.addEventListener('load', iniciar, false);









