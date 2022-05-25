const submit = document.querySelector('button[type="submit"]');

const goodAnswers = {
    'question1': 'c',
    'question2': 'a',
    'question3': 'b',
    'question4': 'b',
    'question5': 'c'
};

submit.addEventListener('click', function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('input[type="radio"]:checked');

    let countAnswers = 0;
  
    inputs.forEach(function(input) {
        const name = input.getAttribute('name');
        const card = input.closest('.card');
        
        if(goodAnswers[name] === input.value) {
            countAnswers ++;
            card.style.background = 'rgb(153, 249, 177)';
        } else {
            card.style.background = 'rgb(249, 143, 143)';
        }
    });
    
    const h4 = document.querySelector('#result h4');
    const note = document.querySelector('.note');
    const help = document.querySelector('.help');

    console.log(h4);

    h4.innerHTML = 'Résultats';


    const totalQuestions = Object.keys(goodAnswers).length;

    if(countAnswers <= 1) {
        note.innerText = 'Vous avez ' + countAnswers + ' bonne réponse, sur un total de ' + totalQuestions + ' questions.';
    } else {
        note.innerText = 'Vous avez ' + countAnswers + ' bonnes réponses, sur un total de ' + totalQuestions + ' questions.';
    }    
    
    help.innerText = 'Veuillez corriger vos mauvaises réponses (en rouge) !';
});
