let quoteinput = document.getElementById("quoteInput");   
const pharagraphs = [
    'I have been impressed with the urgency of doing Knowing is not enough we must apply Being willing is not enough we must do The oldest classical Greek and Latin writing had little or no space between words and could',
    'be written in boustrophedon The Rocker is a 2008 American comedy film directed by Peter Cattaneo and written by Maya Forbes and Wallace Wolodarsky, from a story by Ryan Jaffe. The film stars Rainn Wilson as a failed',
    'musician who goes on tour with his nephews band after one of their songs goes viral.'
];

const textarea = pharagraphs[parseInt(Math.random() * pharagraphs.length)];

let text = textarea.split('').map( (character) => {
    let span = document.createElement('span');
    span.innerText = character.toLowerCase();
    quoteinput.appendChild(span);
    return span; 
});

let cursorIndex = 0;
let firstCharacter = text[cursorIndex];
firstCharacter.classList.add('correct');

document.addEventListener('keydown', ({ key }) => {
    
    if( key === "Backspace" ) {
        firstCharacter.classList.add('incorrect');
        firstCharacter.classList.remove('cursor');
        firstCharacter = text[--cursorIndex];
    } else {
        if( key === firstCharacter.innerText ) {
            firstCharacter.classList.remove('incorrect');
            firstCharacter.classList.remove('correct');
            firstCharacter.classList.add('cursor')
            firstCharacter = text[++cursorIndex];
            firstCharacter.classList.add('correct');
        } else {
            firstCharacter.classList.add('incorrect');
            firstCharacter.classList.remove('cursor');
            firstCharacter = text[++cursorIndex];
        }
    }
     
});