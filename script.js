let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userscorePara = document.querySelector(".user-score");
const compscorePara = document.querySelector(".comp-score");

const drawgame = () => {
    message.innerText = "Match was draw!";
    message.style.backgroundColor = "blue";
}

 
 choices.forEach((choice) => {
    const userChoice = choice.addEventListener("click", () =>{
        choice.getAttribute("id")

    });
    playGame(userChoice);

});
const genCompChoice = () =>{
    const option = ["rock", "paper", "scissor"];
    const randomInd = Math.floor (Math.random()*3);
    return option[randomInd];
}

const showWinner = (userWin, compChoice, userChoice) =>{
    if(userWin){
        userScore ++;
        userscorePara.innerText = userScore;
        message.innerText = `You Wom! ${userChoice} Beats ${compChoice}`;
         message.style.backgroundColor = "blue";
        
      }
      else{
        compScore ++;
        compscorePara.innerText = compScore;
        message.innertext = `You Lose! ${compChoice} Beats ${userChoice}`;
         message.style.backgroundColor = "blue";
      }
}


const playGame = () => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin = true;
    

    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true;

    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
    }
}