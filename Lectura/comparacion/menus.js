function menuseguimiento(){

	borrapagina();
	memoria();
						//************************ DEF controles **********************
	controles1 = document.createElement("div");	
	//body reference 
  	let body = document.getElementsByTagName("body")[0];

  	// create elements <table> and a <tbody>
  	let tbl = document.createElement("table");
  	let tblBody = document.createElement("tbody");

  	//-----------------pizarra-----------------------------------
  	let row1 = document.createElement("tr");
	let cell1a = document.createElement("td");
	let cell1b = document.createElement("td");
	let p1 = document.createElement("p");
	ancholecturainput = document.createElement("input");			//************************ DEF separaciónmuestras **************
	ancholecturainput.setAttribute ("type","number");
	ancholecturainput.setAttribute ("id","ancholecturainput");
	ancholecturainput.setAttribute ("step","1");
	ancholecturainput.setAttribute ("min",1);
	p1.append("Separaci\u00f3n Muestras");
	cell1a.appendChild(p1);
	cell1b.appendChild(ancholecturainput);
	row1.appendChild(cell1a);
	row1.appendChild(cell1b);
	tblBody.appendChild(row1);


	let row3 = document.createElement("tr");
	let cell3a = document.createElement("td");
	let cell3b = document.createElement("td");
	let p3 = document.createElement("p");
	ancholetrainput = document.createElement("input");			//************************ DEF ancholetrainput **************
	ancholetrainput.setAttribute ("type","number");
	ancholetrainput.setAttribute ("id","ancholetrainput");
	ancholetrainput.setAttribute ("step","1");
	ancholetrainput.setAttribute ("min",20);
	p3.append("Tama\u00f1o fuente");
	cell3a.appendChild(p3);
	cell3b.appendChild(ancholetrainput);
	row3.appendChild(cell3a);
	row3.appendChild(cell3b);
	tblBody.appendChild(row3);


	let row4 = document.createElement("tr");
	let cell4a = document.createElement("td");
	let cell4b = document.createElement("td");
	let p4 = document.createElement("p");
	separletrasinput = document.createElement("input");			//************************ DEF separletrasinput **************
	separletrasinput.setAttribute ("type","number");
	separletrasinput.setAttribute ("id","separletrasinput");
	separletrasinput.setAttribute ("step","1");
	separletrasinput.setAttribute ("min","1");
	p4.append("Separaci\u00f3n Caracteres", espacio);
	cell4a.appendChild(p4);
	cell4b.appendChild(separletrasinput);
	row4.appendChild(cell4a);
	row4.appendChild(cell4b);
	tblBody.appendChild(row4);


	//-----------------dinámica-----------------------------------
	let row6 = document.createElement("tr");
	let cell6a = document.createElement("td");
	let cell6b = document.createElement("td");
	let p6 = document.createElement("p");
	fijacionesportestinput = document.createElement("input");			//************************ DEF Fijaciones/Test **************
	fijacionesportestinput.setAttribute ("type","number");
	fijacionesportestinput.setAttribute ("id","Fijacionesportestinput");
	fijacionesportestinput.setAttribute ("step","1");
	fijacionesportestinput.setAttribute ("min",10);
	p6.append("Fijaciones/Test");
	cell6a.appendChild(p6);
	cell6b.appendChild(fijacionesportestinput);
	row6.appendChild(cell6a);
	row6.appendChild(cell6b);
	tblBody.appendChild(row6);


	let row7 = document.createElement("tr");
	let cell7a = document.createElement("td");
	let cell7b = document.createElement("td");
	let p7 = document.createElement("p");
	tamanofijacioninput = document.createElement("input");				//************************ DEF tamañoficación **************
	tamanofijacioninput.setAttribute ("type","number");
	tamanofijacioninput.setAttribute ("id","tamanofijacioninput");
	tamanofijacioninput.setAttribute ("step","1");
	tamanofijacioninput.setAttribute ("min","1");
	p7.append("Tama\u00f1o Fijaci\u00f3n");
	cell7a.appendChild(p7);
	cell7b.appendChild(tamanofijacioninput);
	row7.appendChild(cell7a);
	row7.appendChild(cell7b);
	tblBody.appendChild(row7);


	let row8 = document.createElement("tr");
	let cell8a = document.createElement("td");
	let cell8b = document.createElement("td");
	let p8 = document.createElement("p");
	fijacionesporsegundoinput = document.createElement("input");		//************************ DEF Fijaciones/Segundo **************
	fijacionesporsegundoinput.setAttribute ("type","number");
	fijacionesporsegundoinput.setAttribute ("id","fijacionesporsegundoinput");
	fijacionesporsegundoinput.setAttribute ("step","0.05");
	fijacionesporsegundoinput.setAttribute ("min","0.25");
	p8.append("Fijaciones/Segundo");
	cell8a.appendChild(p8);
	cell8b.appendChild(fijacionesporsegundoinput);
	row8.appendChild(cell8a);
	row8.appendChild(cell8b);
	tblBody.appendChild(row8);


	let row9 = document.createElement("tr");
	let cell9a = document.createElement("td");
	let cell9b = document.createElement("td");
	let p9 = document.createElement("p");
	proporcionmuestrasinput = document.createElement("input");			//************************ DEF Proporción Muestras **************
	proporcionmuestrasinput.setAttribute ("type","number");
	proporcionmuestrasinput.setAttribute ("id","proporcionmuestrasinput");
	proporcionmuestrasinput.setAttribute ("step","1");
	proporcionmuestrasinput.setAttribute ("min","1");
	proporcionmuestrasinput.setAttribute ("max","35");
	p9.append("Tasa de Muestras");
	cell9a.appendChild(p9);
	cell9b.appendChild(proporcionmuestrasinput);
	row9.appendChild(cell9a);
	row9.appendChild(cell9b);
	tblBody.appendChild(row9);


	let row10 = document.createElement("tr");
	let cell10a = document.createElement("td");
	let cell10b = document.createElement("td");
	let p10 = document.createElement("p");
	intervalorespuestainput = document.createElement("input");			//************************ DEF Intervalo Respuesta **************
	intervalorespuestainput.setAttribute ("type","number");
	intervalorespuestainput.setAttribute ("id","intervalorespuestainput");
	intervalorespuestainput.setAttribute ("step","1");
	intervalorespuestainput.setAttribute ("min","1");
	intervalorespuestainput.setAttribute ("max","9");
	p10.append("Intervalo Respuesta");
	cell10a.appendChild(p10);
	cell10b.appendChild(intervalorespuestainput);
	row10.appendChild(cell10a);
	row10.appendChild(cell10b);
	tblBody.appendChild(row10); 


  	// append the <tbody> inside the <table>
  	tbl.appendChild(tblBody);
  	controles1.appendChild(tbl);
  	// put <table> in the <body>
  	body.appendChild(controles1);


//---------------------------botones-------------------------------------

	let b1 = document.createElement("button");							//******************** DEF Botones aceptar y cancelar *********
	b1.setAttribute ("type","button");
	b1.setAttribute ("id","botonaceptar");
	b1.innerText = 'Aceptar';
	controles1.appendChild(b1);

	let b2 = document.createElement("button");
	b2.setAttribute ("type","button");
	b2.setAttribute ("id","botoncancelar");
	b2.innerText = 'Cancelar';
	controles1.appendChild(b2);

	document.body.appendChild(controles1);


	// asigna valores
	ancholecturainput.value = separacionmuestras;
	ancholetrainput.value = ancholetra;
	separletrasinput.value = separletras;

	fijacionesportestinput.value = fijacionesportest;
	tamanofijacioninput.value = tamanofijacion;
	fijacionesporsegundoinput.value = fijacionesporsegundo;
	proporcionmuestrasinput.value = proporcionmuestras;
	intervalorespuestainput.value = intervalorespuesta;
	// Eventlistener

	controles1.addEventListener("click", responsive, false);

	b1.addEventListener("click", function(){				// Botón Aceptar, memoriza nuevas variables y regresa a menú principal.
		localStorage.setItem("toppizarra1",toppizarra);
		localStorage.setItem("leftpizarra1",leftpizarra);
		//localStorage.setItem("altopizarra",altopizarra);
		localStorage.setItem("anchopizarra1",separacionmuestras);
		localStorage.setItem("ancholetra1",ancholetra);
		localStorage.setItem("separletras1",separletras);
		//localStorage.setItem("altorenglon",altorenglon);

		localStorage.setItem("fijacionesportest1",fijacionesportest);
		localStorage.setItem("tamanofijacion1",tamanofijacion);
		localStorage.setItem("fijacionesporsegundo1",fijacionesporsegundo);
		localStorage.setItem("proporcionmuestras1",proporcionmuestras);
		localStorage.setItem("intervalorespuesta1",intervalorespuesta);

		bala = 0;
		revolver();
	}, false);

	b2.addEventListener("click", function(){				// Botón Cancelar, regresa a menú principal sin guardar nada.
		bala = 0;
		revolver();
	})
	responsive();
}



function menugeneral(){

	// Borra lo anterior
	borrapagina();
	
	// Crea el menú de juego
	//************************ DEF menú **********************
	controles2 = document.createElement("div");
	controles2.style.position = "absolute";
	//controles.style.left = "23vw";
	controles2.style.fontSize = "7vh";
	controles2.style.textAlign = "center";

	//************************ DEF controles de aspecto del espacio de lectura y dinámica de juego**************
	let p1 = document.createElement("p");							
	p1.setAttribute ("class","neon");
	p1.setAttribute ("id","p1");
	p1.append("Controles de Lectura");
	controles2.appendChild(p1);
//************************ DEF datos jugador / cambio de jugador **************
	let p3 = document.createElement("p")							
	//p3.setAttribute ("class","neon");
	p3.setAttribute ("id","p3");
	p3.append("Cuentas de Jugador");
	controles2.appendChild(p3);
//************************ DEF práctica **************
	let p2 = document.createElement("p")							
	p2.setAttribute ("class","neon");
	p2.setAttribute ("id","p2");
	p2.append("Iniciar Pr\u00e1ctica");
	controles2.appendChild(p2);
//************************ DEF competición **************
	let p5 = document.createElement("p")							
	//p5.setAttribute ("class","neon");
	p5.setAttribute ("id","p5");
	p5.append("Iniciar competici\u00f3n");
	controles2.appendChild(p5);

	document.body.appendChild(controles2);
	controles2.style.position = "absolute";
	controles2.style.left =  "35%";

	controles2.addEventListener("click", function(event){
		let eleccion = (event.target.id);
		bala = parseInt(eleccion.slice(1,2));
		revolver();		
	}, false);
}
