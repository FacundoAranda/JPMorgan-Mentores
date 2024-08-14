let questions = ["¿Qué te motivo a dar mentorias a chicos de la fundación? ",
    "¿Como conociste Pescar?", 
    "¿Te habría gustado conocer Pescar antes de tu inicio laboral? ¿En que te habria ayudado?",
    "¿Cual fue el mayor desafio que enfrentaste en tu trabajo?",
    "¿Preferis el trabajo remoto o en oficina? ¿Por que?."
];
const container = document.querySelector('.card-container');
let i = 0;
questions.forEach(question => {
    i++
    let card = `<div class="card col-md-1">
                <div class="face front">
                    <img src="/cards/Jp_Card_White.png" alt="">
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

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => 
        {
            card.style.transform = 'perspective(600px) rotateY(360deg)';
            card.childNodes[3].style.transform = 'perspective(600px) rotateY(360deg)';                             
        })    
});


