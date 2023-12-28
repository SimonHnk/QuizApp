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