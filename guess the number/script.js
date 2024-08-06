
let randomnumber=Math.floor(Math.random()*100)+1;
let guesses=0
//alert(randomnumber)
function guessnumber(){
      let guessInput = document.getElementById('guessInput');
      let message = document.getElementById('message');
      let score = document.getElementById('score');
      let no=parseInt(guessInput.value)
      guesses++;
      if(no<randomnumber){
            message.textContent="Your Guess is too low from Random number";
      }
      else if(no>randomnumber){
            message.textContent="Your Guess is too high Random number";
      }
      else if(no==randomnumber){
            message.textContent="Congratulations! You Guessed the Correct Number!";
            score.textContent = `Your score is ${100 - guesses}`;
      }
      else{
            message.textContent="Invalid input. Please enter a number between 1 and 100.";
      }
      guessInput.value = '';
      guessInput.focus();
}
      