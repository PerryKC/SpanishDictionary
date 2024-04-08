// console.log('hello world')

const inputBox = document.getElementById("word-input")
const definitionBox = document.getElementById("definition-box")
const API_KEY = "6ac1662b-c99b-480e-a37f-ff2932044d82";


const getDefinition  = function (userInput) {
    const API_URL = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${userInput}?key=${API_KEY}`;

    // Fetch function to obtain the definition of a word
    fetch(API_URL)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
            const definition = `${data[0].shortdef[0]} \n (${data[0].fl})`
            // console.log(data);
            definitionBox.textContent = definition
          }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            definitionBox.textContent = "There was an error fetching the definition. Make sure you are entering a valid English or Spanish word, if problems persist, check your network connection."
        });
    };

// Event listener to fetch definition when the user types a word and presses Enter
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const userInput = inputBox.value.trim(); // Get input value and remove whitespace
        if (userInput !== "") {
            getDefinition(userInput);
        } else definitionBox.textContent = "Could not find a definition, make sure that you're entering a valid word in Spanish or English"
    }
})


/* 
// Possible Improvement Ideas ******

1. When a word is searched, and the word is possibly a spanish or an english word, such as "mesa",
offer possible definitions of the word in English and Spanish. 
- Another way to solve this is to have an option at the top for spanish or English word, then let the user
type in the word in the corresponding language. 
- There should be a way to check in the data is the word is "es", "en", or both.

2. Allow the user to save a list of their words and view it.

// Bugs ******

1. When a user types in "jump" they receive this "intransitive verb: leap : saltar, brincar"
- why does it include "leap", an alternative English word to jump (or a spanish "spanglish" word)
2. When a user types in "cup" they receive "transitive verb: ahuecar (las manos)" This seems to be an alternative
defintion of cup, such as to "cup your hands", this should be displayed on a list of possible definitions of the word

*/


















