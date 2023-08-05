// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app'); 
appDiv.innerHTML;

const quoteText = document.querySelector(".quote"), // querySelector() est une méthode de l'élément interface => il sélectionne le premier élément qui correspond à un ou plusieurs sélecteur CSS
authorName = document.querySelector(".author .name"), 
quotenBtn = document.querySelector("button"), 
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// random quote function
function randomQuote() {
    quotenBtn.classList.add("loading"); 
    quotenBtn.innerText = "Loading Quote..."
    // fetch demande des données au serveur => Il nécessite un paramètre, l'URL à demander, et renvoie une promesse.
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
       quoteText.innerText = result.content; 
       authorName.innerText = result.author; 
       quotenBtn.innerText = "New Quote for you 😎";  
       quotenBtn.classList.remove("loading"); 
    }) 
}
 
// boutton du son
soundBtn.addEventListener("click", () => {
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`); 
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the uttenrene 
})

// boutton copy
copyBtn.addEventListener("click", () => { 
    // copying the quote text on copyBtn click 
    // writeText() property writes the specified text spting to the system clipboard.
   navigator.clipboard.writeText(quoteText.innerText); 
})

// boutton twitter  
twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`; 
    window.open(tweetUrl, "_blank") // opening a new twitter tab with passing quote in the url
})

quotenBtn.addEventListener("click", randomQuote); 

