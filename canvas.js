let vp = document.getElementById("villa-granja");
let papel = vp.getContext("2d");

const fondo = {
   url:"bgGranja.png",
   isVisible:false
};

const vaca = {
   url:"vaca.png",
   isVisible:false
};

const pollo = {
   url:"pollo.png",
   isVisible:false
};

const cerdo = {
   url:"cerdo.png",
   isVisible:false
};

fondo.image = new Image();
fondo.image.src = fondo.url;

vaca.image = new Image();
vaca.image.src = vaca.url;

pollo.image = new Image();
pollo.image.src = pollo.url;

cerdo.image = new Image();
cerdo.image.src = cerdo.url;

cargarFondo = () => {
	fondo.isVisible = true;
	dibujar();
};

cargarVaca = () => {
	vaca.isVisible = true;
	dibujar();
};

cargarPollo = () => {
	pollo.isVisible = true;
	dibujar();
};

cargarCerdo = () => {
	cerdo.isVisible = true;
	dibujar();
};

dibujar = () => {
	if (fondo.isVisible) {
		papel.drawImage(fondo.image,0,0);
	}

	if(vaca.isVisible){

		for (let i = 0; i <= numAleatorio(5,100); i++) {
			let x = numAleatorio(0,7);
			let y = numAleatorio(0,7);
			let x1 = x * 60;
			let y1 = y * 60;

			papel.drawImage(vaca.image,x1,y1);
		}
	}

	if(pollo.isVisible){
		papel.drawImage(pollo.image,10,300);
	}
}

fondo.image.addEventListener("load", cargarFondo);
vaca.image.addEventListener("load", cargarVaca);
pollo.image.addEventListener("load", cargarPollo);
cerdo.image.addEventListener("load", cargarCerdo);

numAleatorio = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

/********************************* EVENTS KEYDOWN **********************************************/
let xi = 250;
	let yi = 250;

const teclas = {
	UP : 38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39
}

cargaImage = (tecla) => {
	let movimiento = 10;
		switch(tecla){
			case "UP":  if(cerdo.isVisible){
						    papel.drawImage(cerdo.image,xi,yi - movimiento);
						  	yi -= movimiento;
						}
						break;
			case "DOWN":  if(cerdo.isVisible){
						    papel.drawImage(cerdo.image,xi,yi + movimiento);
						    yi += movimiento;
						}
						break;
			case "LEFT":  if(cerdo.isVisible){
						    papel.drawImage(cerdo.image,xi - movimiento,yi);
						    xi -= movimiento;
						}
						break;
			case "RIGHT":  if(cerdo.isVisible){
						    papel.drawImage(cerdo.image,xi + movimiento,yi);
						    xi += movimiento;
						}
						break;
		}
};

eventMovement = (event) => {
		switch(event.keyCode){
			case teclas.UP: cargaImage("UP");;
				break;
			case teclas.DOWN: cargaImage("DOWN");
				break;
			case teclas.LEFT: cargaImage("LEFT");
				break;
			case teclas.RIGHT: cargaImage("RIGHT");
				break;
		}
}

let tecla = addEventListener("keydown", eventMovement);


/*** GENERAR CANTIDAD ALEATORIA DE LOS OTROS ANIMASLES , HACER QUE EL CERDO SE MUEVA CON LAS TECLAS DE FLECHAS ***/




