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
            a: "Rupert Friend",
            b: "Leonardo DiCaprio",
            c: "Orlando Bloom",
            d: "Viggo Mortensen",
        },
        correctAnswer: "c",
    },
    {
        question: "Fråga 2: Vad är J.R.R. Tolkiens fulla namn?",
        answers: {
            a: "John Robert Raymond Tolkien",
            b: "John Ronald Reul Tolkien",
            c: "James Richard Russell Tolkien",
            d: "Jacob Roosevelt Rufus Tolkien",
        },
        correctAnswer: "b",
    },
    {
        question: "Fråga 3: Vilka av nedanstående karaktärer är med i the fellowship?",
        answers: {
            a: "Frodo Baggins",
            b: "Saradoc Brandybuck",
            c: "Boromir",
            d: "Paladin Took",
            e: "Gandalf",
            f: "Faramir",
        },
        correctAnswer: ["a", "c", "e"], //eftersom det är flera rätta svar gör jag en array.
    },
    {
        question: "Fråga 4: Vad heter de the böckerna i Lord of the rings-triologin?",
        answers: {
            a: "The fellowship of the Ring",
            b: "The lord of the Rings",
            c: "The two Towers",
            d: "The Desolation of Smaug",
            e: "The return of the King",
        },
        correctAnswer: ["a", "c", "e"],
    },
    {
        question: "Fråga 5: Vad heter vän på alviska?",
        correctAnswer: "mellon", //ingen fråga här eftersom jag tänkte det skulle vara frisvar här.
    },
    {
        question: "Vems flagga tillhör:",
        //bild
        answers: {
            a: "Gondor",
            b: "Rohan",
            c: "Minas Tirith",
            d: "Bree",
        },
        correctAnswer: "a",
    },
    {
        question: "Fråga 7: Vem vann tävlingen att döda flest fiender vid Helm's deep?",
        answers: {
            a: "Legolas",
            b: "Gandalf",
            c: "Aragorn",
            d: "Gimli",
        },
        correctAnswer: "d",
    },
    {
        question: "Fråga 8: Vilket folkslag tillhör Aragorn?",
        answers: {
            a: "Dúnedain",
            b: "Rohirrim",
            c: "Númenoreans",
            d: "Haradrim",
        },
        correctAnswer: "a",
    },
    {
        question: "Fråga 9: Vem är huvudfienden i Lord of the Rings?",
        answers: {
            a: "Saruman",
            b: "Sauron",
            c: "Gollum",
            d: "Shelob",
        },
        correctAnswer: "b",
    },
    {
        question: "Fråga 10:Vilken av nedanstående citat är från Gandalf?",
        answers: {
            a: "Not all those who wander are lost.",
            b: "Even the smallest person can change the course of the future.",
            c: "There’s some good in this world, Mr. Frodo … and it’s worth fighting for.",
            d: "A wizard is never late, Frodo Baggins. Nor is he early; he arrives precisely when he means to.",
        },
        correctAnswer: "d",
    },
    {
        question: "Vilka är Gandalf?",
        answers: {
            a: "Människa",
            b: "Alv",
            c: "Maiar",
            d: "Valar",
        },
        correctAnswer: "c",
    },    
]