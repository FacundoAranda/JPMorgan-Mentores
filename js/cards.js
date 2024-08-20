let questions = ["¿Qué te motivo a dar mentorías a chicos de la fundación pescar?",
    "¿Qué consejos y recomendaciones le darías a alguien que está buscando trabajo en tecnología basado en tu propia experiencia?", 
    "¿Te habría gustado conocer Fundacion Pescar antes de tu inicio laboral? ¿En que te habría ayudado?",    
];

let questions2 = [
    "¿Cual fue el mayor desafio que enfrentaste en tu trabajo?",
    "¿Qué habilidades blandas crees que son esenciales para trabajar en IT?",
    "¿Qué consejos o recomendaciones nos darías para aprovechar el espacio de mentorías ?"
]
const container = document.querySelector('.card-container');
let i = 0;
questions.forEach(question => {
    i++
    let card = `<div class="card col-md-1">
                <div class="face front">
                    <img src="./cards/Jp_Card_White.png" alt="">
                    <div class="question">
                        <h3>Pregunta ${i}</h3>
                    </div>                    
                </div>
                <div class="face back">                
                    <h3>Pregunta ${i}</h3>                                     
                    <p>${question}</p>
                    <div class="link">
                        <a href="">Fundacion Pescar</a>
                    </div>
                </div>
            </div>`;
    container.innerHTML += card;
    console.log(i);
});
const otherContainer = document.querySelector('.other-card-container');
console.log(otherContainer)
questions2.forEach(question => 
    {
        i++
        let card = `<div class="card col-md-1">
                <div class="face front">
                    <img src="./cards/Jp_Card_White.png" alt="">
                    <div class="question">
                        <h3>Pregunta ${i}</h3>
                    </div>                    
                </div>
                <div class="face back">                
                    <h3>Pregunta ${i}</h3>                                     
                    <p>${question}</p>
                    <div class="link">
                        <a href="">Fundacion Pescar</a>
                    </div>
                </div>
            </div>`;
    otherContainer.innerHTML += card;
    })
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => 
        {
            card.style.transform = 'perspective(600px) rotateY(360deg)';
            card.childNodes[3].style.transform = 'perspective(600px) rotateY(360deg)';                             
        })    
});


