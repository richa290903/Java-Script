document.addEventListener("DOMContentLoaded", () => {
      let choices = document.querySelectorAll(".choice");
      let resultText = document.getElementById("resultText");
      
  
      choices.forEach(choice => {
          choice.addEventListener("click", () => {
            let playerChoice = choice.getAttribute("data-choice");
            let computerChoice = getComputerChoice();
            let result = checkWinner(playerChoice, computerChoice);
              message.textContent = `Computer chose: ${computerChoice}. ${result}`;
          });
      });
  
      function getComputerChoice() {
          let choices = ['S', 'W', 'G'];
          let randomIndex = Math.floor(Math.random() * choices.length);
          return choices[randomIndex];
      }
  
      function checkWinner(playerChoice, computerChoice) {
          if (playerChoice === computerChoice) {
            return "It's a tie!";
          }
  
          if ((playerChoice === 'S' && computerChoice === 'W') ||
              (playerChoice === 'W' && computerChoice === 'G') ||
              (playerChoice === 'G' && computerChoice === 'S')) {
              return "You win!";
          }
  
          return "You lose!";
      }
  });
  

