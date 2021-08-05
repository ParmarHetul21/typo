let restart = document.getElementById('btnrestart-container');
let pdisplay_text = document.getElementById('display_text');
let htmlConatiner = document.getElementById('container');
let characters = document.querySelector("#characters");
let quoteinput = document.getElementById("quoteInput");   
let button = document.getElementById('btn-container');
let pdiv = document.getElementById("addinformation");
let htmlTime = document.getElementById('time');
let result = document.querySelector("#result");
let words = document.querySelector("#words");
let error = document.querySelector("#error");
let cursorIndex = 0;
let firstCharacter

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


//Random Data
const pharagraphs = [
    "assistance vehicle winner church writing song guest fact bedroom affair analyst community sector entry possibility platform sympathy camera drawer moment system negotiation wedding wood election",
    "secretary employment funeral language person manufacturer freedom sir revolution requirement story people reception beer goal movie information examination sister location apartment preference",
    "power midnight driver food church guest week wood unit magazine orange description editor definition art dirt variation competition county philosophy speaker obligation hall replacement",
    "combination thought river bread leadership midnight town article warning promotion application passenger reality series interaction stranger operation indication assistance newspaper bath ambition significance judgment lake session literature maintenance industry"
];

const textarea = pharagraphs[parseInt(Math.random() * pharagraphs.length)];

restart.addEventListener('click', () => location.reload());

let text = textarea.split('').map( (character) => {
    let span = document.createElement('span');
    span.innerText = character.toLowerCase();
    quoteinput.appendChild(span);
    return span; 
});

button.addEventListener('click' ,() => {
    htmlTime.style.display = "block";
    htmlConatiner.style.display = "block"; 
    button.style.display = "none";
    pdiv.style.display = "block";
    pdisplay_text.style.display = 'block';
    pdisplay_text.style.fontStyle = "italic";
    pdisplay_text.innerText = "press TAB to restart";
    interval = setInterval(countDown , 1000);
    cursorIndex = 0;
    firstCharacter = text[cursorIndex];
    firstCharacter.classList.add('correct');
})


let countDown = () => {
    if(timer < 10){
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



let keydown = document.addEventListener('keydown', ( { key,preventDefault } ) => {
    if( key === "Tab") {
        window.location.reload();
    }
    if( key === " ") {
        let cursorIndex = 0;
        let firstCharacter = text[cursorIndex];
        firstCharacter.classList.add('correct');
    }
    if( key === "Backspace" ) {
        firstCharacter.classList.remove('cursor');
        firstCharacter = text[--cursorIndex];
        firstCharacter.classList.remove('correct','incorrect');
        firstCharacter.classList.add('cursor');
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
        } else if( key === " " ){
            corret_count++;
        } else {
            firstCharacter.classList.add('incorrect');
            firstCharacter.classList.remove('correct');
            firstCharacter = text[++cursorIndex];
            firstCharacter.classList.add('cursor');
        }
        document.removeEventListener('keydown', keydown)
    }
});