let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Justin Bieber",
        "answer_4": "Tim Berners-Lee",
        "right_answer": 4
    },
    {
        "question": "Was heißt HTML ausgesprochen?",
        "answer_1": "Horse Toe",
        "answer_2": "HotMail",
        "answer_3": "HyperText Markup Language",
        "answer_4": "How to Make Lasagna",
        "right_answer": 3
    },
    {
        "question": "Was macht der Tag < br >?",
        "answer_1": "Text kursiv",
        "answer_2": "Die Zeile brechen",
        "answer_3": "Ein Input Feld",
        "answer_4": "Text Fett",
        "right_answer": 2
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('question-length').innerHTML = questions.length;
    document.getElementById('current-question').innerHTML = currentQuestion + 1;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        // Endscreen anzeigen
    } else {
        document.getElementById('question-text').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer_1;
        document.getElementById('answer_2').innerHTML = question.answer_2;
        document.getElementById('answer_3').innerHTML = question.answer_3;
        document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}


function answer(answer) {
    let answerNumber = answer.slice(-1);
    let question = questions[currentQuestion];
    let rightAnswer = `answer_${question.right_answer}`

    if (answerNumber == question.right_answer) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(answer).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
    disableAnswer();
}


function disableAnswer() {
    // document.getElementById('answer_1').parentNode.onclick = null;
    // document.getElementById('answer_2').parentNode.onclick = null;
    // document.getElementById('answer_3').parentNode.onclick = null;
    // document.getElementById('answer_4').parentNode.onclick = null;
    document.getElementById('answer-1').classList.remove('answer-container-hover')
    document.getElementById('answer-2').classList.remove('answer-container-hover')
    document.getElementById('answer-3').classList.remove('answer-container-hover')
    document.getElementById('answer-4').classList.remove('answer-container-hover')
}


function enableAnswer() {
    // document.getElementById('answer_1').parentNode.onclick = answer('answer_1');
    // document.getElementById('answer_2').parentNode.onclick = answer('answer_2');
    // document.getElementById('answer_3').parentNode.onclick = answer('answer_3');
    // document.getElementById('answer_4').parentNode.onclick = answer('answer_4');
    document.getElementById('answer-1').classList.add('answer-container-hover')
    document.getElementById('answer-2').classList.add('answer-container-hover')
    document.getElementById('answer-3').classList.add('answer-container-hover')
    document.getElementById('answer-4').classList.add('answer-container-hover')
}


function nextQuestion() {
    currentQuestion++;

    document.getElementById('next-button').disabled = true;

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

    enableAnswer();
    init();
}