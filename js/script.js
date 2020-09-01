/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016",
        tags: "inspiring, truth"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe",
        citation: null,
        year: null,
        tags: "funny, relatable"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: null,
        year: null,
        tags: "funny"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        citation: null,
        year: null,
        tags: "deep, funny, einstein"
    },
    {
        quote: "So many books, so little time.",
        source: "Frank Zappa",
        citation: null,
        year: null,
        tags: "books, deep"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        source: "Bernard M. Baruch",
        citation: null,
        year: null,
        tags: "inspiring"
    },
    {
        quote: "A room without books is like a body without a soul.",
        source: "Marcus Tullius Cicero",
        citation: null,
        year: null,
        tags: "deep, books"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        source: "Dr. Seuss",
        citation: null,
        year: null,
        tags: "relatable, deep, funny"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        source: "Mae West",
        citation: null,
        year: null,
        tags: "funny, relatable"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        source: "Mahatma Gandhi",
        citation: null,
        year: null,
        tags: "inspiring, deep, gandhi"
    }
];

/***
 * `getRandomQuote` function
***/

let previousRandomNumber = 0;

function getRandomQuote() {
    //I set this function up so it would not repeat the same number twice.
    //If the same number is repeated twice, it makes it appear that the button is not working.
    //I made sure to include the logic that if the new random number equals the previous random number,
    //it would keep repeating until it got a new random number so it would always generate a new quote.
    let randomNumber = Math.floor(Math.random() * quotes.length);

    while (randomNumber === previousRandomNumber) {
        randomNumber = Math.floor(Math.random() * quotes.length);
    }

    previousRandomNumber = randomNumber;

    return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
    let quote = getRandomQuote();
    
    if (quote.citation !== null && quote.year !== null) {
        document.getElementById("quote-box").innerHTML = `<p class="quote">${quote.quote}</p>
        <p class="source">${quote.source}<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span></p>
        <p>Tags: ${quote.tags}</p>`;
    } else if (quote.citation === null && quote.year !== null) {
        document.getElementById("quote-box").innerHTML = `<p class="quote">${quote.quote}</p>
        <p class="source">${quote.source}<span class="year">${quote.year}</span></p>
        <p>Tags: ${quote.tags}</p>`;
    } else if (quote.citation !== null && quote.year === null) {
        document.getElementById("quote-box").innerHTML = `<p class="quote">${quote.quote}</p>
        <p class="source">${quote.source}<span class="citation">${quote.citation}</span></p>
        <p>Tags: ${quote.tags}</p>`;
    } else if (quote.citation === null && quote.year === null) {
        document.getElementById("quote-box").innerHTML = `<p class="quote">${quote.quote}</p>
        <p class="source">${quote.source}</p>
        <p>Tags: ${quote.tags}</p>`;
    }

    document.getElementById("main-body").style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval(printQuote, 10000);