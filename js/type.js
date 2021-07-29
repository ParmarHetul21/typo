const timer      = document.querySelector("#timer");
let quotedisplay = document.getElementById("quoteDisplay");
let quoteinput   = document.getElementById("quoteInput");
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

quoteinput.addEventListener( 'input', () => {

    const arrayText = quotedisplay.querySelectorAll("span");
    const arrayValue = quoteinput.value.split('');
    let correct = true
    arrayText.forEach( (characterspan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterspan.classList.remove('correct');
            characterspan.classList.remove('incorrect');
            correct = false;
        } else if( character === characterspan.innerText){
            characterspan.classList.add('correct');
            characterspan.classList.remove('incorrect');
        } else {
            characterspan.classList.remove('correct');
            characterspan.classList.add('incorrect');
            correct = false;
        }
    });
    
    if ( correct ) renderData();
});


function getRandomText() {
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderData() {
    let splittedData = await getRandomText();
    quotedisplay.innerHTML = '';
    quoteinput.innerHTML = null;
    splittedData.split('').forEach( character => {
        let spanElement = document.createElement('span'); 
        spanElement.innerHTML = character;
        quotedisplay.appendChild(spanElement);
    });
    quoteinput.value = null;
}
renderData();