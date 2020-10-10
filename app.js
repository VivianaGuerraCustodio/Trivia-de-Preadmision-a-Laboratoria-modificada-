const viewWelcome = document.querySelector('.view-welcome');
const inputNickname = document.querySelector('.input-nickname');
const buttonSend = document.querySelector('.send');
const error = document.querySelector('.error');
const wordsPersonalized = document.querySelector('.initial');
const nickname = document.querySelector('.nickname');
const firstQuestion = document.querySelector('.firstQuestion');
const secondQuestion = document.querySelector('.secondQuestion');
const threeQuestion = document.querySelector('.threeQuestion');
const fourQuestion = document.querySelector('.fourQuestion');
const fiveQuestion = document.querySelector('.fiveQuestion');
const answerCorrect = document.querySelector('.correct');
const divResult = document.querySelector('.result');
const resultRight = document.querySelector('.ohWow');
const resultError = document.querySelector('.error');
const counterPoints = document.querySelector('.result-counter');
const enviar = document.querySelector('.enviar');
const generalContainer = document.querySelector('.generalContainer')
const questions = document.querySelector('.questions');

buttonSend.addEventListener('click', () => {
    if(inputNickname.value === ''){
        error.style.display = 'block';
        error.innerHTML = 'Por favor ingresa tu nombre para continuar'
    } else{
        viewWelcome.style.display ='none';
        generalContainer.style.display = 'block'
        wordsPersonalized.style.display = 'block';
        nickname.innerHTML= inputNickname.value;
        firstQuestion.style.display = 'block';
    };
});

let score = [];
firstQuestion.addEventListener('change', (event) => {
    event.preventDefault();
   let radiovalue = document.questions.primerQ.value;
    if(radiovalue == 1){
        score++ ;
        console.log(score);
    }
    wordsPersonalized.style.display = 'none';
    secondQuestion.style.display = 'block';
    firstQuestion.style.display = 'none';

});
secondQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    let radiovalue = document.questions.secondQ.value;
    if(radiovalue == 1){
        score++ ;
        console.log(score);
    }
    wordsPersonalized.style.display = 'none';
    secondQuestion.style.display = 'none';
    threeQuestion.style.display = 'block';
});
threeQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    let radiovalue = document.questions.threeQ.value;
    if(radiovalue == 1){
        score++ ;
        console.log(score);
    }
    wordsPersonalized.style.display = 'none';
    threeQuestion.style.display = 'none';
    fourQuestion.style.display = 'block';
});
fourQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    let radiovalue = document.questions.fourQ.value;
    if(radiovalue == 1){
        score++ ;
        console.log(score);
    }
    wordsPersonalized.style.display = 'none';
    fourQuestion.style.display = 'none';
    fiveQuestion.style.display = 'block';
});
fiveQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    let radiovalue = document.questions.fiveQ.value;
    if(radiovalue == 1){
        score++ ;
        console.log(score);
    }
    fiveQuestion.style.display = 'none';
    generalContainer.style.display = 'none'
    const resultDiv = document.querySelector('.result');
    const infoResult = document.createElement('p');
    infoResult.className = 'result';
    infoResult.innerHTML = `${`${inputNickname.value}`} , tus resultados son :${`${score}`}`
    resultDiv.appendChild(infoResult);
    divResult.style.display = 'block';
    console.log(score);
})