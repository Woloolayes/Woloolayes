function memoria(){
	// menu aspecto del area de lectura
	if (localStorage.getItem("toppizarra1") != null) {
		toppizarra = parseFloat(localStorage.getItem("toppizarra1"));
		leftpizarra = parseFloat(localStorage.getItem("leftpizarra1"));

		
		separacionmuestras = parseFloat(localStorage.getItem("anchopizarra1")); 	// separación de las muestras (en caracteres)

		ancholetra = parseFloat(localStorage.getItem("ancholetra1"));
		separletras = parseFloat(localStorage.getItem("separletras1"));
	}else{					// valores por defecto al borrar el historial
		toppizarra = 0;
		leftpizarra = 0;

		separacionmuestras = 1; 	// separación de las muestras (en caracteres)

		ancholetra = 126;
		separletras = 70;
	}

	// menu velocidad de lectura
	if (localStorage.getItem("fijacionesportest1") != null) {	
		fijacionesportest = parseFloat(localStorage.getItem("fijacionesportest1"));
		tamanofijacion = parseFloat(localStorage.getItem("tamanofijacion1"));
		fijacionesporsegundo = parseFloat(localStorage.getItem("fijacionesporsegundo1"));
		proporcionmuestras = parseFloat(localStorage.getItem("proporcionmuestras1"));
		intervalorespuesta = parseFloat(localStorage.getItem("intervalorespuesta1"));
	}else{					// valores por defecto al borrar el historial
		fijacionesportest = 100;
		tamanofijacion = 2;
		fijacionesporsegundo = 0.75;
		proporcionmuestras = 20;
		intervalorespuesta = 3;
	}
}


function contenidopizarra(){
	//****Debuging****
	//****Debuging****
	let ancho = 2 * tamanofijacion + separacionmuestras;
	for (let i=0; i < ancho; i++){
		if (i<tamanofijacion){
			contenido[i]=muestra[i];
		}
		if (i >= tamanofijacion && i < tamanofijacion + separacionmuestras) {
			contenido[i]=espacio;
		}
		if (i>=tamanofijacion+separacionmuestras){
			contenido[i]=muestra1[i-tamanofijacion-separacionmuestras];
		}
	}
		
	turno=0;// Si llega al final de la pizarra, vuelve al principio.
	//}
}


function muestraresultados(){

	// Eliminamos todos los elementos de la pantalla.
	borrapagina();	
	// al párrafo le añadimos un id para poder darle cualidades con CSS
	let p = document.createElement("p");
    p.setAttribute("id", "resultados");								
    p.innerHTML = 	"TOTAL MUESTRAS = " + (aciertos + pasadas) + 
    				"<br> <br> ACIERTOS = " + aciertos + 
    				"<br> <br> SE TE HAN PASADO = " + pasadas +
    				"<br> <br> HAS PULSADO CUANDO NO TOCABA = " + fallos +    				
    				"<br> <br> TU NIVEL HA SIDO DEL " + Math.trunc(100* (aciertos - fallos) / (aciertos + pasadas)) + "%";
    document.body.appendChild(p);

    a4.play();
    contadoracero() // aciertos y fallos = 0
}


function contadoracero(){
	aciertos = 0;
	pasadas = 0;
	fallos = 0;
	multaen = [];
}


function borrapizarra(){
	// elimina lo anteriormente escrito
    let elements = document.getElementsByClassName("tiza");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

////////// ELIMINA TODOS LOS ELEMENTOS DE LA PAGINA //////////////////////////
function borrapagina(){
    let elbody = document.body;
    if (elbody.hasChildNodes()) {
  elbody.removeChild(elbody.childNodes[0]);
  borrapagina();
	}    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////



function cargaraudios(){
	//Carga los audios.
	//a1 = document.createElement("audio");
	a1.setAttribute ("id","acierto");
	a1.setAttribute ("src","audios/acierto.mp3");

	//a2 = document.createElement("audio");
	a2.setAttribute ("id","fallo");
	a2.setAttribute ("src","audios/fallo.mp3");

	//a3 = document.createElement("audio");
	a3.setAttribute ("id","sepaso");
	a3.setAttribute ("src","audios/sepaso.mp3");

	//a4 = document.createElement("audio");
	a4.setAttribute ("id","terminado");
	a4.setAttribute ("src","audios/terminado.mp3");
}






