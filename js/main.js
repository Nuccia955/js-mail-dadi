/* TASK MAIL CHECK */
//1. create an array with at least 3 mail address and store in a variable
const emailList = ['cicciopasticcio@gmail.com', 'tiziocaio@hotmail.com', 'pincopallino@gmail.com'];

//2. add event click on button Log In
const btnLogIn = document.querySelector('.access');
btnLogIn.addEventListener('click', function() {
    //3. select in html user input of mail address
    const userEmailInput = document.getElementById('mail');
    const userEmail = userEmailInput.value.trim().toLowerCase();

    if (userEmail === '') { //alert for <empty string>
        alert('Error. Plase type a valid address')
    }
    //4. compare user input with the list
    else { 
        let userFound = false;
        const feedback = document.getElementById('feedback-email');
        for(let i = 0; i < emailList.length; i++) {
            //5. if user input is an array's element do access, else don't.
            if (userEmail === emailList[i]) {
                userFound = true;
                break;
            }
        }
        //6. Print feedback in html document 
        if (userFound === true) {
            feedback.innerHTML = ': Access succeeded';
        }
        else {
            feedback.innerHTML = ': Access denied';
        }  
    }
})


/* TASK DADI */
//1. add event click on button Roll the dice!
const btnRollTheDice = document.querySelector('.roll-the-dice');
btnRollTheDice.addEventListener('click', function() {
    const feedbackResult = document.getElementById('feedback-dadi');
    //2.1. spawn 2 random numbers for the player (with a button)
    const numPlayer1 = Math.floor( (Math.random() * 6) + 1);
    const numPlayer2 = Math.floor( (Math.random() * 6) + 1);
    const playerDice = document.querySelector('.player-dice');
    playerDice.classList.add('d-inline-block');
    playerDice.innerHTML = ` ${numPlayer1} and ${numPlayer2}`;

    //3.1. spawn 2 random numbers for the computer
    const numComputer1 = Math.floor( (Math.random() * 6) + 1);
    const numComputer2 = Math.floor( (Math.random() * 6) + 1);
    const computerDice = document.querySelector('.computer-dice');
    computerDice.classList.add('d-inline-block');
    computerDice.innerHTML = ` ${numComputer1} and ${numComputer2}`;

    //2.2. get the sum: player result
    let playerResult = numPlayer1 + numPlayer2;
    //3.2. get the sum: computer result
    let computerResult = numComputer1 + numComputer2;
    const score = `Your score: ${playerResult}. Computer score: ${computerResult}.`;
    
    //4. compare the player result and the computer result
    //   if player result > computer result print out "You are the winner!"
    //   else print out "Try again! You'll be luckier!"
    if (playerResult > computerResult) {
        feedbackResult.innerHTML = `${score} Congratulations! You are the winner!`;
    }
    else if (playerResult < computerResult) {
        feedbackResult.innerHTML = `${score} Oh no! Computer wins! Try again! You'll be luckier!`;
    }    
    else {
        feedbackResult.innerHTML = `${score} Same score! Try again!`;
    }  
})