let quoteinput = document.getElementById("quoteInput");   
const paragraph = 'I have been impressed with the urgency of doing Knowing is not enough we must apply Being willing is not enough we must do';

let text = paragraph.split('').map( (character) => {
    let span = document.createElement('span');
    span.innerText = character.toLowerCase();
    quoteinput.appendChild(span);
    return span; 
});

let cursorIndex = 0;
let firstCharacter = text[cursorIndex];
firstCharacter.classList.add('correct');

document.addEventListener('keydown', ({ key }) => {
    if( key === firstCharacter.innerText ){
        firstCharacter.classList.remove('correct');
        firstCharacter.classList.add('cursor')
        firstCharacter = text[++cursorIndex];
        firstCharacter.classList.add('correct');
    } else if( key !== firstCharacter.innerText && key === "Backspace" ){
        firstCharacter.classList.remove('correct');
        firstCharacter.classList.remove('cursor')
        firstCharacter = text[--cursorIndex];
        firstCharacter.classList.add('correct');
    } else if( key === firstCharacter.innerText ){
        
    }
});









