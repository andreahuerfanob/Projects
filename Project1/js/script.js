/*** 
  Create the array of quote objects and name it `quotes`.
  five quote objects in `quotes` array:
   - all`quote` and `source` property.
   - `citation` & `year` property to at least one object..
  console.log() to log array of quotes to the console.
***/
var quotes = [
  {
    quote:
      "Widen the path of opportunities and continue to leave a powerful and positive legacy in this world.",
    source: "Luis Fonsi"
  },
  {
    quote:
      "You are not lucky to be here. The world needs your perspective. They are lucky to have you.",
    source: "Antonio Tijerino"
  },
  {
    quote:
      "We must be impatient for change. Let us remember that our voice is a precious gift and we must use it",
    source: "Claudia Flores"
  },
  {
    quote:
      "It has been so important for me to embrace what I personally bring to the table. Let your stories inform your voice.",
    source: "Vivian Nuñez"
  },
  {
    quote: "Embrace your vulnerabilities, accept them, and forgive yourself.",
    source: "Angelica Monroy",
    citation: "speech",
    year: "2018"
  }
];
/***
  Create  `getRandomQuote` function to:
   - Create a variable = store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * 5 + 1);
  return randomQuote;
}
/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
   NEED TO WORK ON!
***/ 
function printQuote() {
  var holdQuotes = getRandomQuote(); // Calls and stores the getRandomQuote in a var
  var message = '<p class="quote"> + holdQuotes.quote' + "</p>";
  message += '<p class="source">' + holdQuotes.source;
  if (holdQuotes.citation) {
    message += '<span class="citation">' + holdQuotes.citation + "</span>";
  } else {
    message += '';
    if (holdQuotes.year) {
      message += '<span class="year">' + holdQuotes.year + '</span> </p>';
    }
    else {
      message += '';
    if (holdQuotes.tags) {
      message += '<span class="tags"> + holdQuotes.tags' + "</span>";
    }
  message  += '</p>';


document.getElementById("quote-box").innerHTML = message; /* printQuote function should display the completed HTML */

document.getElementById("loadQuote")
  .addEventListener("click", printRandomQuote, false);
  
  function printRandomQuote() {document.getElementById('quote-box').innerHTML = getRandomQuote();
}