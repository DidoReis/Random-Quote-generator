const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    quote.innerText = "Updating...";
    author.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quote.innerText = quoteContent;
    author.innerText = "~ " + quoteAuthor;
    btn.innerText = "Get a Quote";
    btn.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quote.innerText = "An error happened, try again later";
    author.innerText = "An error happened";
    btn.innerText = "Get a quote";
    btn.disabled = false;
  }
}

getQuote();

btn.addEventListener("click", getQuote);
