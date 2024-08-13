

let numeroPreguntas = 10;
let preguntas = [
    '¿Cuáles son los beneficios de la Multimedia Visual? ',
    '¿Qué es la multimedia visual?',
    'La imagen multimedia se trata de la posibilidad del lenguaje verbal más otros lenguajes gráficos en la pantalla del ordenador. Se ubica dentro de las imágenes proyectadas en movimiento. Verdadero o falso',
    '¿Qué tiempo de imágenes existen en la multimedia visual?',
    'La multimedia visual sólo se basa en imágenes estáticas. Verdadero o Falso',
    '¿Qué elementos hay que tener en cuenta en la multimedia visual?',
    'Los podcast y los temas que tienen audio igual cuentan en la multimedia visual. Verdadero o Falso',
    'Tipo de información que es la multimedia visual',
    'La fase de conceptualización y diseño implica en el entorno multimedia. Verdadero o Falso',
    '¿Qué recursos son necesarios en la multimedia visual?'
]


class Pregunta {

    constructor(pregunta, numero) {
        this.pregunta = pregunta;
        this.numero = numero;
    }

    modelo() {

        let modeloPregunta = '';

        modeloPregunta = modeloPregunta + `<div class="modal fade" id= myModal${this.numero}  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="width: 90%;margin: auto">`
        modeloPregunta = modeloPregunta + '    <div class="modal-dialog" role="document" style="width: 90%;margin: auto">'
        modeloPregunta = modeloPregunta + '        <div class="modal-content" style="width: 90%;margin: auto">'
        modeloPregunta = modeloPregunta + '            <div class="modal-header">'
        modeloPregunta = modeloPregunta + '                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
        modeloPregunta = modeloPregunta + '                <center>'
        modeloPregunta = modeloPregunta + '                    <h2 class="modal-title" id="myModalLabel" style="color:#000">'
        modeloPregunta = modeloPregunta + `                        PREGUNTA ${this.numero}</h2>`
        modeloPregunta = modeloPregunta + '            </div>'
        modeloPregunta = modeloPregunta + '            <div class="modal-body">'
        modeloPregunta = modeloPregunta + '                <br>'
        modeloPregunta = modeloPregunta + `              <center><h2> ${this.pregunta}</h2></center> `
        modeloPregunta = modeloPregunta + '            </div>'
        modeloPregunta = modeloPregunta + '            </center>'
        modeloPregunta = modeloPregunta + '            <hr>'
        modeloPregunta = modeloPregunta + '            <div class="row">'
        modeloPregunta = modeloPregunta + '            </div>'
        modeloPregunta = modeloPregunta + '        </div>'
        modeloPregunta = modeloPregunta + '        <br>'
        modeloPregunta = modeloPregunta + '        <div class="modal-footer">'
        modeloPregunta = modeloPregunta + '            <button type="button" class="btn btn-danger" data-dismiss="modal">Salir</button>'
        modeloPregunta = modeloPregunta + '        </div>'
        modeloPregunta = modeloPregunta + '    </div>'
        modeloPregunta = modeloPregunta + '  </div>'
        modeloPregunta = modeloPregunta + '</div>'


        return modeloPregunta;


    }
}

// Generas color aleatorio
const generarColor = () => {
    let simbolos = '0123456789ABCDEF';
    color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
    return color;
}

// Creas la rebanada de pizza
const rebanadaPizza = () => {
    rebanadas = [];
    for(i = 0; i < numeroPreguntas; i++ ){
    
        rebanadas[i] = {
            'text': `Pregunta ${ i + 1}`,
            'fillStyle' : `${generarColor()}`
        }
       
    }
    return rebanadas;
}

// creas toda la pizza
let miRuleta = new Winwheel({

    'numSegments' : numeroPreguntas,
    'outerRadius' : 270,
    'segments': rebanadaPizza(),
    'animation':{
        'type':'spinToStop',
        'duration': 6,
        'callbackFinished':'Mensaje()',
        'callbackAfter':'dibujarIndicador()'
    }
});



// Dibujas el indicador
const dibujarIndicador = () => {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300,0);
    ctx.lineTo(320,0);
    ctx.lineTo(300,40);
    ctx.lineTo(280,0);
    ctx.stroke();
    ctx.fill();
}


dibujarIndicador();



// Crea el cuadro de la pregunta
const Mensaje = () => {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    alert("Listo para la  " + SegmentoSeleccionado.text);

    for(i = 0; i < numeroPreguntas; i++){
        if(SegmentoSeleccionado.text == `Pregunta ${ i + 1 }`){
            $( `#myModal${ i + 1}`).modal({backdrop:'static'});
         
        }
    }
    
   
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
}



let preguntaTexto = document.createElement( 'div' );
preguntaTexto.innerHTML = ''
const pregunta = new Pregunta();
for( i = 0; i < numeroPreguntas; i++){

    pregunta.pregunta = preguntas[i];
    pregunta.numero = i + 1;
    
    preguntaTexto.innerHTML = preguntaTexto.innerHTML + pregunta.modelo();
    
}
document.body.appendChild(preguntaTexto)



