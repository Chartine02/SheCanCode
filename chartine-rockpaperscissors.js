const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
  };
  
  
  getComputerChoice = () => {
   randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
      case 2:
        return'scissors';
        break;
   }    
  };
  
  determineWinner = (getUserChoice, getComputerChoice) =>{
    if (getUserChoice === getComputerChoice){
      return 'The game is a tie!';
    }
    if (getUserChoice === 'bomb'){
      return 'You win!'
    } 
    if (getUserChoice === 'rock'){
      if(getComputerChoice === 'paper'){
        return 'The computer won!';
      } else{
        return 'You won!';
      }
    }
     if (getUserChoice === 'paper'){
      if(getComputerChoice === 'scissors'){
        return 'The computer won!';
      } else{
        return 'You won!';
      }
    }
    if (getUserChoice === 'scissors'){
      if(getComputerChoice === 'rock'){
        return 'The computer won!';
      } else{
        return 'You won!';
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  };
   
  playGame();
  
  
  
  
  
    
    
    
    
    
    
    
    
    
    
  
  
  // console.log(getComputerChoice());