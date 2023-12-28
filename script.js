let questionsHTML = [
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
    },
    {
        "question": "Welches ist die niedrigste Überschriftenebene in HTML?",
        "answer_1": "< h1 >",
        "answer_2": "< h3 >",
        "answer_3": "< h8 >",
        "answer_4": "< h6 >",
        "right_answer": 4
    },
    {
        "question": "Wie leitet man einen HTML-Kommentar ein?",
        "answer_1": "# kommentar",
        "answer_2": "< !-- kommentar -- >",
        "answer_3": "// kommentar",
        "answer_4": "/* kommentar */",
        "right_answer": 2
    },
    {
        "question": "Wofür steht die Abkürzung DOM?",
        "answer_1": "Document Object Model",
        "answer_2": "Data Object Module",
        "answer_3": "Distribution Object Module",
        "answer_4": "Document Only Memory",
        "right_answer": 2
    }
];


let questionsCSS = [
    {
        "question": "Was ist keine gültige Schreibweise für die Farbe Weiß?",
        "answer_1": "white",
        "answer_2": "rgba(255,255,255,1)",
        "answer_3": "#FFF",
        "answer_4": "#ff",
        "right_answer": 4
    },
    {
        "question": "top positioniert ein HTML-Element von oben. Mit welchem Wert für position funktioniert top nicht?",
        "answer_1": "relative",
        "answer_2": "static",
        "answer_3": "fixed",
        "answer_4": "absolute",
        "right_answer": 2
    },
    {
        "question": "Welchen Strukturselektor gibt es breits seit CSS 1?",
        "answer_1": ":first-letter",
        "answer_2": ":root",
        "answer_3": ":first-child",
        "answer_4": ":last-child",
        "right_answer": 1
    },
    {
        "question": "Was bewirkt die CSS-Deklaration orphans: 3 ?",
        "answer_1": "Wirkt nur beim Ausdruck. Bewirkt, dass bei Fließtext der Text so getrennt wird, dass mindestens 3 Zeilen am oberen Rand des 2. Blattes ausgedruckt werden.",
        "answer_2": "Nichts. orphans war für CSS 2.1 Audiostyles geplant und sollte die Lautstärke steuern. Mit CSS3 wurde die Eigenschaft verworfen.",
        "answer_3": "Verbindet 3 Tabellen zu einer, wenn diese leer sind.",
        "answer_4": "Nichts. Die Eigenschaft ist erfunden.",
        "right_answer": 1
    },
    {
        "question": "Welche Eigenschaft gibt es bereits seit CSS 2.1?",
        "answer_1": "background-clip",
        "answer_2": "text-shadow",
        "answer_3": "opacity",
        "answer_4": "quotes",
        "right_answer": 4
    },
    {
        "question": "Welchen Einfluss hat das Pseudoattribut :empty?",
        "answer_1": "Damit kann überprüft werden, ob der Nutzer Eingaben in einem Feld vorgenommen hat.",
        "answer_2": "Darüber werden Eingaben in Formulare gelöscht.",
        "answer_3": "Darüber können leere HTML-Elemente angesprochen werden, wie zum Beispiel leere Tabellenzellen.",
        "answer_4": "Damit werden alle Unterelemente aus einem HTML-Element gelöscht.",
        "right_answer": 3
    }
];


let questionsJAVASCRIPT = [
    {
        "question": "Wie heißt der Erfinder von JavaScript?",
        "answer_1": "Douglas Crockford",
        "answer_2": "Brendan Eich",
        "answer_3": "John Resig",
        "answer_4": "Chuck Norris",
        "right_answer": 2
    },
    {
        "question": "Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?",
        "answer_1": "Micha",
        "answer_2": "Mecha",
        "answer_3": "Mocha",
        "answer_4": "Mucha",
        "right_answer": 3
    },
    {
        "question": "Wer passt hier nicht in die Reihe?",
        "answer_1": "ActionScript",
        "answer_2": "JavaScript",
        "answer_3": "CoffeeScript",
        "answer_4": "AppleScript",
        "right_answer": 4
    },
    {
        "question": "Welcher der folgenden Werte ist nicht falsy?",
        "answer_1": "NaN",
        "answer_2": "null",
        "answer_3": "{}",
        "answer_4": "undefined",
        "right_answer": 3
    },
    {
        "question": "Welche Schreibweise für eine IIFE (engl. immediately invoked function expression, ein direkt aufgerufener Funktionsausdruck) ist falsch?",
        "answer_1": "(function(){ ... }());",
        "answer_2": "((function(){ ... )})());",
        "answer_3": "foo = function(){ ... )}();",
        "answer_4": "function(){ ... }();",
        "right_answer": 4
    },
    {
        "question": "Was benötigt man für JavaScript?",
        "answer_1": "Einen Compiler",
        "answer_2": "Einen Interpreter",
        "answer_3": "Einen Decompiler",
        "answer_4": "Einen Reader",
        "right_answer": 2
    }
];


let questionsJAVA = [
    {
        "question": "Was muss in jedem Programm was mit Java programmiert wurde vorhanden sein?",
        "answer_1": "Private void main(String[] arg0) {}",
        "answer_2": "Ein package mit dem Namen: (Default Package)",
        "answer_3": "Public void main(String[] args) { }",
        "answer_4": "Public void main(String() arg0) {}",
        "right_answer": 3
    },
    {
        "question": "Was ist Java?",
        "answer_1": "Ein Planet der nicht bewohnbar ist",
        "answer_2": "Eine Objekt-Orientierte Programmiersprache",
        "answer_3": "Eine seltene Pflanze",
        "answer_4": "Eine Programmiersprache ohne Objektorientiertheit",
        "right_answer": 2
    },
    {
        "question": "Was sind Arrays?",
        "answer_1": "Den Begriff gibt es gar nicht!",
        "answer_2": "Eine Art von Bären die gerne Javas isst",
        "answer_3": "Gar nichts davon!",
        "answer_4": "Ein Objekt das sich jede Millisekunde selbst aufruft",
        "right_answer": 3
    },
    {
        "question": "Was benötigt jedes Programm noch?",
        "answer_1": "Ein Konstruktor",
        "answer_2": "Ein Java",
        "answer_3": "Eine Klasse",
        "answer_4": "Gar nichts davon!",
        "right_answer": 3
    },
    {
        "question": "Wie groß ist ein Java?",
        "answer_1": "Ein Java kann nicht groß sein",
        "answer_2": "Mindestens 20 cm",
        "answer_3": "Das ist ist sehr unterschiedlich",
        "answer_4": "Höchstens 1,50 m",
        "right_answer": 1
    },
    {
        "question": "Wie bringt man das Programm zum Schlafen?",
        "answer_1": "Class.sleep(18);",
        "answer_2": "Thread thread = new Thread(); thread.make.deactivate(20);",
        "answer_3": "Class.cancel.sleep();",
        "answer_4": "Thread thread = new Thread(); thread.sleep(20);",
        "right_answer": 4
    }
];


let highscoreArray = [
    {
        "name": ['Junus der Hacker', 'Junus der Hacker', 'Junus der Hacker', 'Junus der Hacker'],
        "score": [999, 999, 999, 999, 999],
        "quiz": ['HTML', 'CSS', 'JAVASCRIPT', 'JAVA'],
        "place": 0,
        "medal": './img/diamond-icon.png'
    },
    {
        "name": ['Simon'],
        "score": [6],
        "quiz": ['HTML'],
        "place": 1,
        "medal": './img/gold-icon.png'
    },
    {
        "name": ['Gerd'],
        "score": [5],
        "quiz": ['HTML'],
        "place": 2,
        "medal": './img/silver-icon.png'
    },
    {
        "name": ['Hans'],
        "score": [4],
        "quiz": ['HTML'],
        "place": 3,
        "medal": './img/bronze-icon.png'
    },
    {
        "name": [],
        "score": [],
        "quiz": [],
        "place": 4,
        "medal": './img/wood-icon.png'
    },
    {
        "name": [],
        "score": [],
        "quiz": [],
        "place": 5,
        "medal": './img/stone-icon.png'
    },
    {
        "name": [],
        "score": [],
        "quiz": [],
        "place": 6,
        "medal": './img/6th-icon.png'
    }
];


let endscreenQuizname = '';
let currentQuestion = 0;
let correctQuestion = 0;
let soundSuccess = new Audio('sounds/success.mp3');
let soundWrong = new Audio('sounds/wrong.mp3');
let questions = questionsHTML;
loadHighscore();


function init() {
    document.getElementById('question-length').innerHTML = questions.length;
    document.getElementById('current-question').innerHTML = currentQuestion + 1;

    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
        updateProgressbar();
    } else {
        updateProgressbar();
        showNextQuestion();
    }
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
    init();
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
    init();
}


function selectQuizType(i) {
    resetMarker();
    if (i == 0) {
        questions = questionsHTML;
        document.getElementById('marker-1').classList.add('nav-marker-show');
        endscreenQuizname = 'HTML';
    } else if (i == 1) {
        questions = questionsCSS;
        document.getElementById('marker-2').classList.add('nav-marker-show');
        endscreenQuizname = 'CSS';
    } else if (i == 2) {
        questions = questionsJAVASCRIPT;
        document.getElementById('marker-3').classList.add('nav-marker-show');
        endscreenQuizname = 'JAVASCRIPT';
    } else if (i == 3) {
        questions = questionsJAVA;
        document.getElementById('marker-4').classList.add('nav-marker-show');
        endscreenQuizname = 'JAVA';
    }
    showQuizScreen();
    resetAnswer();
    enableAnswer();
    restartGame();
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
    renderHighscore();
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


function renderHighscore() {
    const list0 = document.getElementById('html-highscore');
    const list1 = document.getElementById('css-highscore');
    const list2 = document.getElementById('javascript-highscore');
    const list3 = document.getElementById('java-highscore');
    list0.innerHTML = '';
    list1.innerHTML = '';
    list2.innerHTML = '';
    list3.innerHTML = '';

    for (let p = 0; p < highscoreArray.length; p++) {
        const sortByPoints = highscoreArray[p];

        for (let h = 0; h < sortByPoints.name.length; h++) {
            const playername = sortByPoints.name[h];
            const score = sortByPoints.score[h];
            const quiz = sortByPoints.quiz[h];
            const place = sortByPoints.place;
            const medal = sortByPoints.medal;

            if (quiz == 'HTML') {
                list0.innerHTML += `
            <tr>
                <td>${playername}</td>
                <td>${score}/6</td>
                <td><img class="place-icon" src="${medal}" alt=""></td>
            </tr>
        `;
            } else if (quiz == 'CSS') {
                list1.innerHTML += `
            <tr>
                <td>${playername}</td>
                <td>${score}/6</td>
                <td><img class="place-icon" src="${medal}" alt=""></td>
            </tr>
        `;
            } else if (quiz == 'JAVASCRIPT') {
                list2.innerHTML += `
            <tr>
                <td>${playername}</td>
                <td>${score}/6</td>
                <td><img class="place-icon" src="${medal}" alt=""></td>
            </tr>
        `;
            } else if (quiz == 'JAVA') {
                list3.innerHTML += `
            <tr>
                <td>${playername}</td>
                <td>${score}/6</td>
                <td><img class="place-icon" src="${medal}" alt=""></td>
            </tr>
        `;
            }
        }
    }
}