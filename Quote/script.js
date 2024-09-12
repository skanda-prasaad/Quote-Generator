const main = document.getElementById('main');
const text = document.querySelector('#quote');
const author = document.getElementById('author');
const twitter = document.querySelector(".twtr");
const newQ = document.getElementById('newquote');
const load = document.querySelector('.loader');

let apiQuotes;

function startLoad(){
    load.style.display = "block"; 
    main.style.display = "none"; 
    console.log('start');
}

function stopLoad(){
    load.style.display = "none"; 
    main.style.display = "block";
    console.log('stop');
}



function newQuotes() {
    const quote = apiQuotes[0];
    text.textContent = quote.quote;
    author.textContent = quote.author || "Unknown";
}

function tweeting() {
    const tweet = `https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`;
    window.open(tweet, '_blank');
}


async function getQuote() {
    startLoad();
    try {
        const apiUrl = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: { "X-Api-Key": "k8eXwqj0+WxKb0mtZO6M/w==xwwxJ7H04tDIaWui" }
        });
        apiQuotes = await apiUrl.json();
        console.log(apiQuotes);
        newQuotes();
    } catch (error) {
        alert(error);
    }finally{
        stopLoad();
    }
}

newQ.addEventListener('click',getQuote);
twitter.addEventListener('click',tweeting);

window.onload = getQuote;