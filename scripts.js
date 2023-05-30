

//  Name: Random Quote Generator 
//  Version: 1.0
//  Author: Clayton Jinks
//  Date: 5/29/2023

// Create empty arrays 
let quotes = [];
let quoteHistory = [];
let currentIndex = -1;

// Default durations
let displayDuration = 15000;
let fadeInRemoveDelay = 3000;
let fadeOutAddDelay = 12000;
let fadeOutRemoveDelay = 16000;



function displayRandomQuote() {
    fetch('quotations.txt')
      .then(response => response.text())
      .then(data => {

        // Split the file contents into an array of quotes
        quotes = data.split('\n\n');
  
        // Trim excess whitespace and omit empty quotes
        quotes = quotes.map(quote => quote.trim());  
        quotes = quotes.filter(quote => quote !== '');
  
        // Select a random quote from the array
        currentIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[currentIndex];
  
        // Display the random quote on the webpage
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = randomQuote;

        // Set display/fade durations
        if (randomQuote.length < 200) {
            displayDuration = 12000;
        } else {
            displayDuration = randomQuote.length / 0.015;
        }
        fadeInRemoveDelay = 3000;
        fadeOutAddDelay = displayDuration - 3000;
        fadeOutRemoveDelay = displayDuration + 1000;
  
        // Apply CSS animations using the above values
          quoteElement.classList.add('fade-in');
        setTimeout(() => { 
          quoteElement.classList.remove('fade-in'); 
        }, fadeInRemoveDelay); 
        setTimeout(() => {
            quoteElement.classList.add('fade-out');
        }, fadeOutAddDelay);
        setTimeout(() => {
            quoteElement.classList.remove('fade-out');
        }, fadeOutRemoveDelay);
        setTimeout(displayRandomQuote, displayDuration);

      })
      .catch(error => {
        console.log('An error occurred while fetching the quotations:', error);
      });
  }

displayRandomQuote(); // Comment this line for button control


// Button control functions
  function generateRandomQuote() {
    fetch('quotations.txt')
      .then(response => response.text())
      .then(data => {
        quotes = data.split('#');  
        quotes = quotes.map(quote => quote.trim());  
        quotes = quotes.filter(quote => quote !== '');  
        currentIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[currentIndex];  
        quoteHistory.push(randomQuote);  
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = randomQuote;

        quoteElement.classList.add('fade-in');
        setTimeout(() => { 
            quoteElement.classList.remove('fade-in'); 
          }, 1500); 

      })
      .catch(error => {
        console.log('An error occurred while fetching the quotations:', error);
      });
  }

  function displayPreviousQuote() {
    if (quoteHistory.length > 1) { 
      const quoteElement = document.getElementById('quote');
      quoteElement.textContent = quoteHistory[quoteHistory.length-2];
      quoteHistory.pop(quoteHistory[quoteHistory.length-2]);
      quoteElement.classList.add('fade-in');
      setTimeout(() => { 
          quoteElement.classList.remove('fade-in'); 
        }, 1500); 
    }
  }

