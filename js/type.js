let quoteinput = document.getElementById("quoteInput");   
let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");

let button = document.getElementById('btn-container');
let htmlTime = document.getElementById('time');
let htmlConatiner = document.getElementById('container');
let restart = document.getElementById('btnrestart-container');



//HTML Content Hidden
htmlTime.style.display = "none";
htmlConatiner.style.display = "none";
restart.style.display = 'none';

//Variables For CountDown
let timer = 0;
let interval = null;

//Variables To Store Errors , Words & Characters
let errorCounter = 0;
let wordsCounter = '';
let corret_count = 0;

button.addEventListener('click' ,() => {
    htmlTime.style.display = "block";
    htmlConatiner.style.display = "block";
    restart.style.display = "block";
    restart.style.marginTop = '100px' 
    button.style.display = "none";
    interval = setInterval(countDown , 1000);
})


//Random Data
const pharagraphs = [
    'I have been impressed with the urgency of doing Knowing is not enough we must apply Being willing is not enough we must do The oldest classical Greek and Latin writing could',
    'be written in boustrophedon The Rocker is a 2008 American comedy film directed by Peter Cattaneo and written by Maya Forbes and Wallace Wolodarsky, from a story by Ryan Jaffe',
    'musician who goes on tour with his nephews band after one of their songs goes viral.'
];
const textarea = pharagraphs[parseInt(Math.random() * pharagraphs.length)];


restart.addEventListener('click', () => location.reload());

let text = textarea.split('').map( (character) => {
    let span = document.createElement('span');
    span.innerText = character.toLowerCase();
    quoteinput.appendChild(span);
    return span; 
});

let cursorIndex = 0;
let firstCharacter = text[cursorIndex];
firstCharacter.classList.add('correct');

let countDown = () => {
    if(timer < 60){
        timer++;
        counter.innerText = timer;
    } else {
        document.getElementById("container").style.display = "none";
        quoteinput.style.display = "none";
        button.style.display = "none";
        htmlTime.style.display = "none";
        clearInterval(interval);
        timer = 0;
        const wpm = parseInt((corret_count / 5) / 1) 
        console.log(corret_count);
        result.style.display = "flex";   
        words.innerText = wpm;
    }
}

let keydown = document.addEventListener('keydown', ( { key } ) => {
    
    if( key === "Backspace" ) {
        firstCharacter.classList.remove('cursor');
        firstCharacter = text[--cursorIndex];
        firstCharacter.classList.remove('correct','incorrect');
        firstCharacter.classList.add('cursor');
        corret_count++;
    } else {
        if( cursorIndex >= textarea.length ) {
            clearInterval(interval);
            timer = 0;
            const wpm = parseInt((corret_count / 5) / 1);
            result.style.display = "flex";   
            words.innerText = wpm; 
            document.getElementById("container").style.display = "none";
            quoteinput.style.display = "none";
            button.style.display = "none";
            htmlTime.style.display = "none";
            return;            
        } else if( key === firstCharacter.innerText ) {
            firstCharacter.classList.remove('incorrect');
            firstCharacter.classList.add('correct')
            firstCharacter = text[++cursorIndex];
            firstCharacter.classList.add('cursor');
            corret_count++;
        } else {
            firstCharacter.classList.add('incorrect');
            firstCharacter.classList.remove('correct');
            firstCharacter = text[++cursorIndex];
            firstCharacter.classList.add('cursor');
            corret_count++;
        }
        document.removeEventListener('keydown', keydown)
    }
});