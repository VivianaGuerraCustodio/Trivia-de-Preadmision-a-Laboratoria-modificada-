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

buttonSend.addEventListener('click', () => {
    if(inputNickname.value === ''){
        error.style.display = 'block';
        error.innerHTML = 'Por favor ingresa tu nombre para continuar'
    } else{
        viewWelcome.style.display ='none';
        wordsPersonalized.style.display = 'block';
        nickname.innerHTML= inputNickname.value;
        firstQuestion.style.display = 'block';
    };
});

let score = [];
firstQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    if(answerCorrect.value === 1){
        score++ ;
        console.log(score);
    }
    secondQuestion.style.display = 'block';
    firstQuestion.style.display = 'none';

});
secondQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    if(answerCorrect.value === 1){
        score ++;
    }
    secondQuestion.style.display = 'none';
    threeQuestion.style.display = 'block';
});
threeQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    if(answerCorrect.value === 1){
        score ++;
    }
    threeQuestion.style.display = 'none';
    fourQuestion.style.display = 'block';
});
fourQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    if(answerCorrect.value === 1){
        score ++;
    }
    fourQuestion.style.display = 'none';
    fiveQuestion.style.display = 'block';
});
fiveQuestion.addEventListener('change', (event) => {
    event.preventDefault();
    if(answerCorrect.value === 1){
        score ++;
    }
    fiveQuestion.style.display = 'none';
    if(score === 5){
        counterPoints ='';
    divResult.style.display = 'block';
    resultRight.style.display = 'block';
    counterPoints.innerHTML = score;
    } else {
        divResult.style.display = 'block';
        resultRight.style.display = 'none';
        resultError.style.display = 'block';
    }
    console.log(score);
})