//Vill ha quiz frågorna och svaren i JavaScript kod och ha mitt script att automatisk generera quiz appen. 
//Det blir lättare att ta bort eller redigare frågor då. 

const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.querySelector("#results");
const submitBtn = document.querySelector("#submit");

//En array med alla mina frågor (lord of the rings).
//Nedan är en array med objects(frågor), där varje objekt (fråga) har flera egenskaper (properties).
//Egenskapen answer har ett objekt och dessa objekt innehåller i sin tur fyra egenskaper (svarsalternativ).

const myQuestions = [
    {
        question: "Fråga 1: Vem spelar Legolas i filmerna?",
        answers: { //nästlat objekt, där jag har ett objekt i ett objekt.
            A: "Rupert Friend",
            B: "Leonardo DiCaprio",
            C: "Orlando Bloom",
            D: "Viggo Mortensen",
        },
        correctAnswer: "C",
    },
    {
        question: "Fråga 2: Vad är J.R.R. Tolkiens fulla namn?",
        answers: {
            A: "John Robert Raymond Tolkien",
            B: "John Ronald Reul Tolkien",
            C: "James Richard Russell Tolkien",
            D: "Jacob Roosevelt Rufus Tolkien",
        },
        correctAnswer: "B",
    },
    {
        question: "Fråga 3: Vilka av nedanstående karaktärer är med i the fellowship?",
        answers: {
            A: "Frodo Baggins",
            B: "Saradoc Brandybuck",
            C: "Boromir",
            D: "Paladin Took",
            E: "Gandalf",
            F: "Faramir",
        },
        correctAnswer: ["A", "C", "E"], //eftersom det är flera rätta svar gör jag en array.
    },
    {
        question: "Fråga 4: Vad heter de the böckerna i Lord of the rings-triologin?",
        answers: {
            A: "The fellowship of the Ring",
            B: "The lord of the Rings",
            C: "The two Towers",
            D: "The Desolation of Smaug",
            E: "The return of the King",
        },
        correctAnswer: ["A", "C", "E"],
    },
    {
        question: "Fråga 5: Vad heter vän på alviska?",
        correctAnswer: "mellon", //ingen fråga här eftersom jag tänkte det skulle vara frisvar här.
    },
    {
        question: "Fråga 6: Vems flagga tillhör:",
        //bild
        answers: {
            A: "Gondor",
            B: "Rohan",
            C: "Minas Tirith",
            D: "Bree",
        },
        correctAnswer: "A",
    },
    {
        question: "Fråga 7: Vem vann tävlingen att döda flest fiender vid Helm's deep?",
        answers: {
            A: "Legolas",
            B: "Gandalf",
            C: "Aragorn",
            D: "Gimli",
        },
        correctAnswer: "D",
    },
    {
        question: "Fråga 8: Vilket folkslag tillhör Aragorn?",
        answers: {
            A: "Dúnedain",
            B: "Rohirrim",
            C: "Númenoreans",
            D: "Haradrim",
        },
        correctAnswer: "A",
    },
    {
        question: "Fråga 9: Vem är huvudfienden i Lord of the Rings?",
        answers: {
            A: "Saruman",
            B: "Sauron",
            C: "Gollum",
            D: "Shelob",
        },
        correctAnswer: "B",
    },
    {
        question: "Fråga 10: Vilken av nedanstående citat är från Gandalf?",
        answers: {
            A: "Not all those who wander are lost.",
            B: "Even the smallest person can change the course of the future.",
            C: "There’s some good in this world, Mr. Frodo … and it’s worth fighting for.",
            D: "A wizard is never late, Frodo Baggins. Nor is he early; he arrives precisely when he means to.",
        },
        correctAnswer: "D",
    },
    {
        question: "Bonusfråga: Vilken av nedanstående alternativ är Gandalf?",
        answers: {
            A: "Människa",
            B: "Alv",
            C: "Maiar",
            D: "Valar",
        },
        correctAnswer: "C",
    },    
]

function buildQuiz(){
    const output = []; //variabeln där frågorna och dess svar kommer ligga i.

    myQuestions.forEach((currenQuestion, questionNumber) => {
        const answer = []; //en variabel som tar emot olika svar. 

        //och för varje fråga ska det vara
        for(letter in currenQuestion.answers){ 
            //lägga till radio button i HTML
            answer.push(
                `<label>
                <input type="radio" name="question${questionNumber} value="${letter}">
                ${letter} :
                ${currenQuestion.answers[letter]}
                </label>`
            );
        }

        //lägg till fråga och dess svar till output
        output.push(
            `<div class="question"> ${currenQuestion.question}</div>
            <div class="answers"> ${answer.join('')}</div>`
        );
    }
);
//kombinera output listan till en sträng i HTML och lägg till denpå sidan:
quizContainer.innerHTML = output.join('');
}

buildQuiz();