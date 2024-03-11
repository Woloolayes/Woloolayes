
function turnosmuestra(){
	turnosconantiobjetivo = turnosnoconsec(fijacionesportest, Math.floor(fijacionesportest*proporcionmuestras/100), 1, intervalorespuesta);
}

function formaobjetivo(){

	let guarismos=["0","1","2","3","4","5","6","7","8","9"," "," "," "," "," "];
	let eleccion;

		for (let i=0; i<tamanofijacion; i++){
			if (tamanofijacion<4 || objetivo[i-1]==" " || i==0 || i==tamanofijacion-1){
				eleccion=9;
			}else if (tamanofijacion>3 && tamanofijacion<5){
				eleccion=10;
			}else if (tamanofijacion>4 && tamanofijacion<7){
				eleccion=11;
			}else if (tamanofijacion>6 && tamanofijacion<9){
				eleccion=12;
			}else if (tamanofijacion>8 && tamanofijacion<12){
				eleccion=13;
			}else{
				eleccion=14;
			}
			objetivo[i]=guarismos[Math.round(Math.random() * eleccion)];
			}
		return objetivo;
}


function formaantiobjetivo(){	
	
	let sologuarismos=["0","1","2","3","4","5","6","7","8","9"];
	let paracambiar=[];

	for (i=0; i<tamanofijacion; i++){
		antiobjetivo[i]=objetivo[i];
	}

	for (let u=0; u<tamanofijacion; u++){
			if (objetivo[u]==" ")
				{continue;
			}else{paracambiar.push(u);
					}
		}

	let posicionFalsa= paracambiar[Math.round(Math.random() * (paracambiar.length-1))];	
	
	let index = sologuarismos.indexOf(antiobjetivo[posicionFalsa]);

	sologuarismos.splice(index,1);

	let cifraFalsa=sologuarismos[Math.round(Math.random() * 8)];

	antiobjetivo[posicionFalsa]=cifraFalsa;	

	return antiobjetivo;
}



//// ELIGE (NTURNOS) TURNOS ALEATORIOS, NUNCA CONSECUTIVOS, DE UN RANGO DADO, ELIMINANDO TAMBIÉN LOS N1 PRIMEROS Y LOS N2 ÚLTIMOS/////////////
/////ADEMÁS ORDENA LAS ALTERNATIVAS DE MENOR A MAYOR. NTURNOS DEBE SER INFERIOR AL 50% DE (RANGO-N1-N2). REQUIERE LA FUNCIÓN ALEATORIOENTRE()////////////////////////////
function turnosnoconsec(rango, nturnos, n1, n2){ 
        
    let contenedor=[]; // iremos eliminando los elementos seleccionados y sus consecutivos.
    for (i=0; i<rango; i++){
        contenedor[i]=i;
    }
    
    contenedor.splice(0,n1);
    contenedor.splice(contenedor.length-n2,n2);
    
    let resultado = [];
    // si hay turnos consecutivos al elegido, elimínalo en contenedor[].
    // repite el proceso hasta que resultado.length = nturnos o bien contenedor.lenght=0.
    while(resultado.length<nturnos && contenedor.length>0){
        // escoge al azar uno de los turnos. Guárdalo en resultado[].
        let alea=contenedor[aleatorioentre(0, contenedor.length-1)];
        resultado.push(alea);        
        // elimina dicho turno y sus dos vecinos consecutivos, de haberlos, en el contenedor.
        let index = contenedor.indexOf(alea); 
        contenedor.splice(index,1);
        
        let index1 = contenedor.indexOf(alea-1);
        if (index1>=0){
        contenedor.splice(index1,1);
        }

        let index2 = contenedor.indexOf(alea+1);
        if (index2>=0){
        contenedor.splice(index2,1);
        }     
    }
    resultado.sort((a, b) => a - b);
    return resultado;
  } ///////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////DEVUELVE UN Nº ENTERO ALEATORIO ENTRE MIN Y MAX, AMBOS INCLUSIVE//////////////////////////////////////////
function aleatorioentre(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


