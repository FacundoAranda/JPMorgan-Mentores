

let numeroPreguntas = 20;
let num = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
]
let mentores = [
    "Alan Nahuel, P.",
    "Alejandro Rodrigo, D.",
    "Alfredo Eduardo, A.",
    "Alma Delia, V. C. ",
    "Anahi Soledad, G.",
    "Angeles, R.",
    "Argenis Eduardo, M. T.",
    "Ariadna, N. ",
    "Augusto Matias, A.",
    "Brisa Ayelen, Y.",
    "Bruno Agustin, G.",
    "Camila Antonella, D.",
    "Carlos Javier, M. S.",
    "Daniela, P.",
    "Diego Ernesto, V.",
    "Diego Gerardo, F.",
    "Diego German, S.",
    "Diego Leandro, P.",
    "Diego Sebastian, S.",
    "Eduardo Ignacio, G.",
]
let mentores2 = [
    "Ezequiel, C.",
    "Ezequiel Edgardo, V.",
    "Federico, F.",
    "Federico O, O.",
    "Florencia Ayelen, N.",
    "Florencia Camila, M.",
    "Florencia Laura, M.",
    "Florencia, W.",
    "Gabriel Augusto, C. de A.",
    "Geraldine, D.",
    "Gina, F.",
    "Guido Alejandro, A.",
    "Ignacio David, B.",
    "Javier, F.",
    "Jimena Florencia, M.",
    "Joaquin, G.",
    "Joaquin S, S.",
    "Johansen Dennys, F. C. ",
    "Jose Gabriel, L. ",
    "Jose Maria Fernando, F. M.",
    "Victoria Abril, B.",
    "Segui participando!!!!!",
]
let mentoresConNumeros = {};
for (let i = 0; i < 20; i++) {
    mentoresConNumeros[mentores[i]] = i;
}
console.log(mentoresConNumeros)

let mentoresConNumeros2 = {};
for (let i = 0; i < 22; i++) {
    mentoresConNumeros2[mentores2[i]] = i + 20;
}
console.log(mentoresConNumeros2)


class Pregunta {

    constructor(pregunta, numero) {
        this.pregunta = pregunta;
        this.numero = numero;
    }

    modelo() {

        let modeloPregunta = '';

        modeloPregunta = modeloPregunta + `<div class="modal fade" id= ${this.numero}  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="width: 90%;margin: auto">`
        modeloPregunta = modeloPregunta + '    <div class="modal-dialog" role="document" style="width: 90%;margin: auto">'
        modeloPregunta = modeloPregunta + '        <div class="modal-content" style="width: 90%;margin: auto">'
        modeloPregunta = modeloPregunta + '            <div class="modal-header">'
        modeloPregunta = modeloPregunta + '                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
        modeloPregunta = modeloPregunta + '                <center>'
        modeloPregunta = modeloPregunta + '                    <h2 class="modal-title" id="myModalLabel" style="color:#000">'
        modeloPregunta = modeloPregunta + `                        MENTOR</h2>`
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
        modeloPregunta = modeloPregunta + '            <button type="button" class="btn" data-dismiss="modal">Salir</button>'
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

    for (var i = 0; i < 6; i++) {
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Creas la rebanada de pizza
const rebanadaPizza = () => {
    rebanadas = [];
    for (i = 0; i < 20; i++) {
        if (i % 2 == 0) {
            rebanadas[i] = {
                'text': `${mentores[i]}`,
                'fillStyle': 'rgb(31, 40, 141)',
                'textFontSize': 14,
                'textFillStyle': 'rgba(255, 255, 255)',
                'strokeStyle': 'rgba(255, 255, 255)'
            }
        }
        else {
            rebanadas[i] = {
                'text': `${mentores[i]}`,
                'fillStyle': 'rgba(255, 255, 255)',
                'textFontSize': 14,
                'textFillStyle': 'rgb(31, 40, 141)',
                'strokeStyle': 'rgba(255, 255, 255)'
            }
        }
    }
    return rebanadas;
}
const rebanadaPizza2 = () => {
    rebanadas = [];
    for (i = 0; i < 22; i++) {
        if (i % 2 == 0) {
            rebanadas[i] = {
                'text': `${mentores2[i]}`,
                'fillStyle': 'rgb(31, 40, 141)',
                'textFontSize': 14,
                'textFillStyle': 'rgba(255, 255, 255)',
                'strokeStyle': 'rgba(255, 255, 255)'
            }
        }
        else {
            rebanadas[i] = {
                'text': `${mentores2[i]}`,
                'fillStyle': 'rgba(255, 255, 255)',
                'textFontSize': 14,
                'textFillStyle': 'rgb(31, 40, 141)',
                'strokeStyle': 'rgba(255, 255, 255)'
            }
        }
    }
    return rebanadas;
}
//chillones
//#fd7302 
// #0072af 

// blue rgb(71, 143, 191)
// R:71 G:143 B:191
// orange rgb(237, 134, 0)
// R:237 G:134 B:0
// core blue rgb(0, 71, 123)
// R:0 G:71 B:123

// creas toda la pizza
let miRuleta = new Winwheel({

    'numSegments': numeroPreguntas,
    'outerRadius': 270,
    'segments': rebanadaPizza(),
    'animation': {
        'type': 'spinToStop',
        'duration': 6,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }
});
let nuevaRuleta = new Winwheel(
    {
        'canvasId': 'canvas2',
        'numSegments': numeroPreguntas + 2,
        'outerRadius': 270,
        'segments': rebanadaPizza2(),
        'animation': {
            'type': 'spinToStop',
            'duration': 6,
            'callbackFinished': 'Mensaje2()',
            'callbackAfter': 'dibujarIndicador2()'
        }
    })


// Dibujas el indicador
const dibujarIndicador = () => {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = '#fd7302';
    ctx.fillStyle = '#fd7302';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(320, 0);
    ctx.lineTo(300, 40);
    ctx.lineTo(280, 0);
    ctx.stroke();
    ctx.fill();
}
const dibujarIndicador2 = () => {
    var ctx = nuevaRuleta.ctx;
    ctx.strokeStyle = '#fd7302';
    ctx.fillStyle = '#fd7302';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(320, 0);
    ctx.lineTo(300, 40);
    ctx.lineTo(280, 0);
    ctx.stroke();
    ctx.fill();
}


dibujarIndicador();
dibujarIndicador2();


// Crea el cuadro de la pregunta
const Mensaje = () => {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    $(`#${mentoresConNumeros[SegmentoSeleccionado.text]}`).modal({ backdrop: 'static' });
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    // miRuleta.draw();
    dibujarIndicador();
}
const Mensaje2 = () => {
    var SegmentoSeleccionado = nuevaRuleta.getIndicatedSegment();
    console.log(SegmentoSeleccionado);
    $(`#${mentoresConNumeros2[SegmentoSeleccionado.text]}`).modal({ backdrop: 'static' });
    nuevaRuleta.stopAnimation(false);
    nuevaRuleta.rotationAngle = 0;
    // nuevaRuleta.draw();
    dibujarIndicador();
}



// let preguntaTexto = document.createElement('div');

// const pregunta = new Pregunta();
for (i = 0; i < numeroPreguntas; i++) {
    let preguntaTexto = document.createElement('div');
    preguntaTexto.innerHTML = "";
    const pregunta = new Pregunta();
    pregunta.pregunta = mentores[i];
    pregunta.numero = i;
    preguntaTexto.innerHTML = pregunta.modelo();
    document.body.appendChild(preguntaTexto)
}
for (i = 0; i < numeroPreguntas + 2; i++) {
    let preguntaTexto = document.createElement('div');
    preguntaTexto.innerHTML = "";
    const pregunta = new Pregunta();
    pregunta.pregunta = mentores2[i];
    pregunta.numero = i + 20;
    preguntaTexto.innerHTML = pregunta.modelo();
    document.body.appendChild(preguntaTexto)
}







