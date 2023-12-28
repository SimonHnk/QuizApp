let endscreenQuizname = '';
let currentQuestion = 0;
let correctQuestion = 0;
let soundSuccess = new Audio('sounds/success.mp3');
let soundWrong = new Audio('sounds/wrong.mp3');
let questions = questionsHTML;
loadHighscore();


function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
        updateProgressbar();
    } else {
        updateProgressbar();
        showNextQuestion();
    }
    document.getElementById('question-length').innerHTML = questions.length;
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function updateProgressbar() {
    let percent = (currentQuestion) / questions.length * 100;

    document.getElementById('progress-bar').innerHTML = `${percent.toFixed(0)}%`;
    document.getElementById('progress-bar').style = `width: ${percent.toFixed(0)}%;`;
}


function showNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}


function answer(answer) {
    let answerNumber = answer.slice(-1); // nimmt nur den letzten Character aus dem String
    let question = questions[currentQuestion];
    let rightAnswer = `answer_${question.right_answer}`

    if (answerNumber == question.right_answer) {
        showRightAnswer(answer);
    } else {
        showWrongAnswer(rightAnswer, answer);
    }
    enableButtonNext();
    disableAnswer();
}


function showRightAnswer(answer) {
    document.getElementById(answer).parentNode.classList.add('bg-success');
    soundSuccess.play();
    correctQuestion++;
}


function showWrongAnswer(rightAnswer, answer) {
    document.getElementById(answer).parentNode.classList.add('bg-danger');
    document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
    soundWrong.play();
}


function enableButtonNext() {
    document.getElementById('next-button').disabled = false;
}


function disableButtonNext() {
    document.getElementById('next-button').disabled = true;
}


function disableAnswer() {
    document.getElementById('answer_1').parentNode.onclick = null;
    document.getElementById('answer_2').parentNode.onclick = null;
    document.getElementById('answer_3').parentNode.onclick = null;
    document.getElementById('answer_4').parentNode.onclick = null;
    document.getElementById('answer-1').classList.remove('answer-container-hover')
    document.getElementById('answer-2').classList.remove('answer-container-hover')
    document.getElementById('answer-3').classList.remove('answer-container-hover')
    document.getElementById('answer-4').classList.remove('answer-container-hover')
}


function enableAnswer() {
    document.getElementById('answer_1').parentNode.onclick = () => { answer('answer_1'); };
    document.getElementById('answer_2').parentNode.onclick = () => { answer('answer_2'); };
    document.getElementById('answer_3').parentNode.onclick = () => { answer('answer_3'); };
    document.getElementById('answer_4').parentNode.onclick = () => { answer('answer_4'); };
    document.getElementById('answer-1').classList.add('answer-container-hover')
    document.getElementById('answer-2').classList.add('answer-container-hover')
    document.getElementById('answer-3').classList.add('answer-container-hover')
    document.getElementById('answer-4').classList.add('answer-container-hover')
}


function nextQuestion() {
    currentQuestion++;
    disableButtonNext();
    resetAnswer();
    enableAnswer();
    showQuestion();
}


function resetAnswer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    currentQuestion = 0;
    correctQuestion = 0;
    document.getElementById('card-content-quiz').classList.remove('hide');
    document.getElementById('card-content-endscreen').classList.add('hide');
    showQuestion();
}


function selectQuizType(i) {
    resetMarker();
    if (i == 0) {
        loadHtmlQestion();
    } else if (i == 1) {
        loadCssQestion();
    } else if (i == 2) {
        loadJsQestion();
    } else if (i == 3) {
        loadJavaQestion();
    }
    showQuizScreen();
    resetAnswer();
    enableAnswer();
    restartGame();
}


function loadHtmlQestion() {
    questions = questionsHTML;
    document.getElementById('marker-1').classList.add('nav-marker-show');
    endscreenQuizname = 'HTML';
}


function loadCssQestion() {
    questions = questionsCSS;
    document.getElementById('marker-2').classList.add('nav-marker-show');
    endscreenQuizname = 'CSS';
}


function loadJsQestion() {
    questions = questionsJAVASCRIPT;
    document.getElementById('marker-3').classList.add('nav-marker-show');
    endscreenQuizname = 'JAVASCRIPT';
}


function loadJavaQestion() {
    questions = questionsJAVA;
    document.getElementById('marker-4').classList.add('nav-marker-show');
    endscreenQuizname = 'JAVA';
}


function resetMarker() {
    document.getElementById('marker-1').classList.remove('nav-marker-show');
    document.getElementById('marker-2').classList.remove('nav-marker-show');
    document.getElementById('marker-3').classList.remove('nav-marker-show');
    document.getElementById('marker-4').classList.remove('nav-marker-show');
}


function showQuizScreen() {
    document.querySelector('.card-content-highscore').classList.add('hide');
    document.querySelector('.card-content-startscreen').classList.add('hide');
    document.getElementById('card-content-quiz').classList.remove('hide');
    document.getElementById('progress-bar-container').classList.remove('hide');
    setTimeout(() => {
        document.getElementById('progress-bar-container').classList.add('progressbar-effect-show');
    }, "500");
}


function showStartScreen() {
    document.querySelector('.card-content-highscore').classList.add('hide');
    document.querySelector('.card-content-startscreen').classList.remove('hide');
    document.getElementById('card-content-endscreen').classList.add('hide');
    document.getElementById('card-content-quiz').classList.add('hide');
    document.getElementById('progress-bar-container').classList.add('hide');
    document.getElementById('progress-bar-container').classList.remove('progressbar-effect-show');
    resetMarker();
}


function showEndscreen() {
    document.getElementById('card-content-quiz').classList.add('hide');
    document.getElementById('endscreen-quizname').innerHTML = `${endscreenQuizname} Quiz abgeschlossen!`;
    document.getElementById('card-content-endscreen').classList.remove('hide');
    document.getElementById('final-score').innerHTML = `${correctQuestion}/${questions.length}`;
}


function showHighscore() {
    document.querySelector('.card-content-startscreen').classList.add('hide');
    document.getElementById('card-content-endscreen').classList.add('hide');
    document.getElementById('card-content-quiz').classList.add('hide');
    document.getElementById('progress-bar-container').classList.add('hide');
    document.getElementById('progress-bar-container').classList.remove('progressbar-effect-show');
    document.querySelector('.card-content-highscore').classList.remove('hide');
    resetMarker();
    loadHighscoreLists();
}


function setHighscore() {
    let playername = document.getElementById('player-name');

    for (i = 0, a = 6; i < 6, a > 0; i++, a--) {
        if (correctQuestion === i) {
            highscoreArray[a].name.push(playername.value);
            highscoreArray[a].score.push(correctQuestion);
            highscoreArray[a].quiz.push(endscreenQuizname);
            playername.value = '';
            saveHighscore();
            showHighscore();
        }
    }
}


function saveHighscore() {
    localStorage.setItem('highscoreArray', JSON.stringify(highscoreArray));
}


function loadHighscore() {
    if (localStorage.getItem('highscoreArray')) {
        highscoreArray = JSON.parse(localStorage.getItem('highscoreArray'));
    }
}


function loadHighscoreLists() {
    const list0 = document.getElementById('html-highscore');
    const list1 = document.getElementById('css-highscore');
    const list2 = document.getElementById('javascript-highscore');
    const list3 = document.getElementById('java-highscore');
    list0.innerHTML = '';
    list1.innerHTML = '';
    list2.innerHTML = '';
    list3.innerHTML = '';
    renderHighscore(list0, list1, list2, list3);
}


function renderHighscore(list0, list1, list2, list3) {
    for (let p = 0; p < highscoreArray.length; p++) {
        const sortByPoints = highscoreArray[p];

        for (let h = 0; h < sortByPoints.name.length; h++) {
            const playername = sortByPoints.name[h];
            const score = sortByPoints.score[h];
            const quiz = sortByPoints.quiz[h];
            const medal = sortByPoints.medal;

            setHighscoreEntrys(playername, score, medal, quiz, list0, list1, list2, list3); 
        }
    }
}


function setHighscoreEntrys(playername, score, medal, quiz, list0, list1, list2, list3) {
    if (quiz == 'HTML') {
        list0.innerHTML += setHighscoreEntry(playername, score, medal);
    } else if (quiz == 'CSS') {
        list1.innerHTML += setHighscoreEntry(playername, score, medal);
    } else if (quiz == 'JAVASCRIPT') {
        list2.innerHTML += setHighscoreEntry(playername, score, medal);
    } else if (quiz == 'JAVA') {
        list3.innerHTML += setHighscoreEntry(playername, score, medal);
    }
}