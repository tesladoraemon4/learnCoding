//gradientes
function iniciar1() {
	// body...

	var elemento = document.getElementById("lienzo");
	lienzo = elemento.getContext('2d');

	//posiciones desde la esquina superior izquierda lienzo.strokeRect(100,100, 120,120);
	//tamaño   Dibuja un rectangulo vacio

	//	rectangulo  lienzo.fillRect(100,100,50,50);

	//fijamos el efecto de gradiente en todo el camvas
	var gradiente=lienzo.createLinearGradient(0,0,10,100);

	gradiente=lienzo.createRadialGradient(0,0,30,0,0,300);


	gradiente.addColorStop(0.5, '#0000FF');
	gradiente.addColorStop(1, '#000000');
	lienzo.fillStyle=gradiente;



	lienzo.fillRect(10,10,100,100);
	lienzo.fillRect(150,10,200,100);
}
//hacer lineas y figuras
function iniciar2(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	lienzo.beginPath();
	// aquí va el trazado

	lienzo.moveTo(50,50);
	//arc(x, y, radio, ángulo inicio,
	// ángulo final Math.PI*2, dirección)
	// lienzo.arc(100,100,50,0,Math.PI,true);
	//lienzo.fill();
	//lienzo.clip();
	//quadraticCurveTo(putoControlx, putoControly, 
	//final de la curva x, y) 
	lienzo.quadraticCurveTo(150,130,50,200);

	lienzo.moveTo(250,50);
	//inicio de la curva con moveTo();
	//bezierCurveTo(ptoCtrol1x, ptoCtrol1y
	//, ptoCtrol2x, ptoCtrol2y, //final curva x, y) 
	lienzo.bezierCurveTo(200,125,300,125,250,200);

	lienzo.closePath();
	lienzo.stroke();
}

// estilos para las lineas
function iniciar3 () {
	elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	

	lienzo.beginPath();
	lienzo.arc(200,150,50,0,Math.PI*2, false);
	lienzo.stroke();


	//fijas el grosor de la linea
	lienzo.lineWidth=10;
	//forma de la terminacion de la linea
	//valores round butt square
	lienzo.lineCap="square";


	lienzo.beginPath();
		lienzo.moveTo(230,150);
		lienzo.arc(200,150,30,0,Math.PI, false);
	lienzo.stroke();
	
	lienzo.lineWidth=5;
	//Forma de como se conectan 2 lineas
	//round bevel miter
	lienzo.lineJoin="round";
	lienzo.beginPath();
		lienzo.moveTo(195,135);
		lienzo.lineTo(215,155);
		lienzo.lineTo(195,155);
	lienzo.stroke();
}

//texto 
function iniciar4(){
	elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');


	lienzo.font="bold 24px verdana, sans-serif";
	//start end left right
	lienzo.textAlign="start";

	//Establece la alineacion del texto
	// top, hanging, middle, alphabetic, ideographic y
	//bottom
	lienzo.textBaseline = "bottom";


	//dubijar texto solido
	lienzo.fillText("Mi mensaje",100,124);

	//dibujar vacio
	//lienzo.strokeText("Mi mensaje", 100,100);

	//ver caracteristicas de un texto
	var tamanio = lienzo.measureText("Mi mensaje");
	lienzo.strokeRect(100,100,tamanio.width,24);
}

//Sombras
function iniciar5() {

	elemento = document.getElementById("lienzo");

	lienzo = elemento.getContext('2d');


	//establecer sombras a todos los trazos
	lienzo.shadowColor="rgba(0,0,0,0.5)";
	lienzo.shadowOffsetX=4;
	lienzo.shadowOffsetY=4;
	//difuminacion de la sombra
	lienzo.shadowBlur=.5;



	lienzo.font="bold 50px verdana, sans-serif";
	lienzo.fillText("Mi mensaje ", 100,100);


	lienzo.beginPath();
		lienzo.strokeRect(100,250,60,45);
	lienzo.stroke();
}
//transformaciones 1
//C/U es acumulada
function iniciar6(){
	elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext("2d");

	lienzo.font = "bold 20px verdana sans-serif";

	lienzo.fillText("PRUEBA1",50,20);
	lienzo.translate(50,100);
	lienzo.rotate(Math.PI/180*45);


	lienzo.fillText("PRUEBA2",0,0);
	lienzo.rotate(-Math.PI/180*45);
	lienzo.translate(0,100);
	lienzo.scale(2,2);

	lienzo.fillText("PRUEBA3",0,0);
}
//transformaciones 2
function iniciar7(){
	elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext("2d");
	lienzo.transform(3,0,0,1,0,0);
	lienzo.font = "bold 20px verdana sans-serif";


	lienzo.fillText("PRUEBA",20,20);
	lienzo.transform(1,0,0,10,0,0);
	lienzo.font="bold 20px verdana, sans-serif";
	lienzo.fillText("PRUEBA",100,20);
}

//guardar estados de un lienzo y restaurarlos
function iniciar8 () {
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	lienzo.save();
	lienzo.translate(50,70);
	lienzo.font="bold 20px verdana, sans-serif";
	lienzo.fillText("PRUEBA1",0,30);
	lienzo.restore();
	lienzo.fillText("PRUEBA2",0,30);

}



// dibuja transparencias
//globalCompositeOperation
function iniciar9 () {
	elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	//fija un color de fondo para un rectangulo
	lienzo.fillStyle="#990000";
	lienzo.fillRect(100,100,300,100);
	//solo la parte del rectangulo es dibujada 
	//arriba PROPIEDADES pag 146:
	//source-out (borra la primera y muestra la ultima)
	//source-in(transparenta las primeras figuras) 
	//source-atop(mostrar primera y contenido de la segunda) 
	//lighter(combina colores)
	lienzo.globalCompositeOperation="source-out";

	//dibujamos un texto
	lienzo.fillStyle="#AAAAFF";
	lienzo.font="bold 80px verdana, sans-serif";
	lienzo.textAlign="center";
	lienzo.textBaseline="middle";
	lienzo.fillText("PRUEBA",250,110);

}

//dibujar imagenes con la api
//drawImage
function iniciar10(){
	elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');

	var imagen = new Image();
	imagen.src = "img.jpg";




	imagen.addEventListener("load", function(){
		//(imagen, posx, posy, tamx, tamy)
		lienzo.drawImage(imagen,0,0,elemento.width,elemento.height)
		//(imágen, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2)
		lienzo.drawImage(imagen,135,30,50,50,0,0,200,200)
	}, false);


}


//datos de imagenes
function iniciar11 () {
	elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');

	var imagen = new Image();

	imagen.src ="img.jpg";

	lienzo.drawImage(imagen,0,0);

	imagen.addEventListener("load", cargarimagen, false);
}
function cargarimagen (e) {
	imagen=e.target;
	lienzo.drawImage(imagen,0,0);
	var info=lienzo.getImageData(0,0,175,262);
	var pos;
	for(x=0;x<=175;x++){
		for(y=0;y<=262;y++){
			pos=(info.width*4*y)+(x*4);
			info.data[pos]=255-info.data[pos];
			info.data[pos+1]=255-info.data[pos+1];
			info.data[pos+2]=255-info.data[pos+2];
		}
	}
	lienzo.putImageData(info,0,0);
}
//patrones (repoeticiones de imagenes)
function iniciar12 () {
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	var imagen=new Image();
	imagen.src="img2.jpg";
	imagen.addEventListener("load", modificarimagen, false)
}
function modificarimagen (e) {
	imagen = e.target;
	var patron = lienzo.createPattern(imagen,'repeat');
	lienzo.fillStyle=patron;
	lienzo.fillRect(0,0,500,335);
}




function iniciar () {




	
}






window.addEventListener("load", iniciar,false);