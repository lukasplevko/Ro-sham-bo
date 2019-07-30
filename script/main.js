const buttons = document.querySelectorAll(".btn");
const result = document.createElement("p");
const pointsPara = document.createElement("p");
const pcPick = document.createElement("p");
const userPick = document.createElement("p");
const gameInfo = document.querySelector("#gameInfo");


let playerSelection = "";
let usrPoints = 0;
let aiPoints = 0;
let number = getRandomInt(0,2);
let computerPick = ["Rock","Paper","Scissors"];

//Computers selection--------------------------------------------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }   

//---------------------------------------------------------------------

function game(user,computer){
    gameInfo.appendChild(result);
    gameInfo.appendChild(userPick);
    gameInfo.appendChild(pcPick);
    gameInfo.appendChild(pointsPara);

    if(user === computer){
        result.textContent = "Draw";
        pointsPara.textContent = usrPoints + " - " + aiPoints;
    }
    else if(user === "Rock" && computer === "Scissors"){
        result.textContent = "Win";
        usrPoints++;
        pointsPara.textContent = usrPoints + " - " + aiPoints;
        
    }else if(user === "Scissors" && computer === "Paper"){
        result.textContent = "Win";
        usrPoints++;
        pointsPara.textContent = usrPoints + " - " + aiPoints;
    }else if(user === "Paper" && computer === "Rock"){
        result.textContent = "Win";
    }else{
        result.textContent = "Loss";
        aiPoints ++;
        pointsPara.textContent = "You: " + usrPoints + " - " + "PC: " + aiPoints;;
        
    }

    if(usrPoints === 5){
        result.textContent = "You won the game!!";
        
    }else if(aiPoints === 5){
        result.textContent = "AI won";
    }
    
}



buttons.forEach(button => button.addEventListener("click", function(){
   

    playerSelection = button.textContent;
   //console.log(playerSelection);
   userPick.textContent = playerSelection;
   let number = getRandomInt(0,2);
   let computerSelection = computerPick[number];
   //console.log(computerSelection);
   pcPick.textContent = computerSelection;
   game(playerSelection,computerSelection);
   
}));






