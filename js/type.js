var timer = document.querySelector("#timer");
var quotedisplay = document.querySelector(".quote-display");
var quoteinput = document.querySelector(".quoteInput");
var RANDOM_TEXT_API_URL = "https://randommer.io/api/Text/LoremIpsum?loremType=business&type=paragraphs&number=2";

function getRandomText() {
    return fetch(RANDOM_TEXT_API_URL,{
        method:'GET',
        headers:{
            'X-Api-key':'8ae206473edb4dbbb316da5f4554cf19'
        }
    })
      .then(response => response.json())
}

async function renderData() {
    let data = await getRandomText()
    const demo = data.replace(/\.|"|,|'|<br>/g, '').toLowerCase();
    const splittedData = demo.slice(0,199);
    splittedData.split('').forEach( character => {
        let spanElement = document.createElement('span'); 
        spanElement.classList.add('correct');
        spanElement.innerHTML = character;
        quotedisplay.appendChild(spanElement);
        console.log(spanElement);
    });
    quotedisplay.innerHTML = splittedData;
    quoteinput.innerHTML = null;
}

renderData();