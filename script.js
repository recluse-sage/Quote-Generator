const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const xBtn = document.getElementById("x");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = {};

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
 
// Show New Quote
function newQuote() {
  loading();
  const quote = apiQuotes;
  // Check if author field exists, if not replace with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length to determine size
  if (quote.content.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //   Set Quote, Hide Loading animation
  quoteText.textContent = quote.content;
  complete();
}

// Get Quotes from the API

loading();

async function getQuotes() {
  loading();
  const apiUrl = "https://api.quotable.io/random";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch error
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", getQuotes, loading);
xBtn.addEventListener("click", tweetQuote);
// On Load
getQuotes();
