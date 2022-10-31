const target = document.getElementById('target')
let btns= document.querySelectorAll('.button')
let playerSelection=document.getElementById('player-selection')
let computerSelection=document.getElementById('computer-selection')
let player
let computer
let result

btns.forEach(btns=>btns.addEventListener("click",()=>{
    player=btns.textContent;
    getTurn();
    result = getWinner();
    target.textContent = result;
    playerSelection.textContent=player;
    computerSelection.textContent=computer;
}))

function getTurn(){
    const randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            computer='Rock';
            break;
        case 2:
            computer='Paper';
            break;
        case 3:
            computer='Scissors';
            break;
    }
}

function getWinner(){
    if (player === computer){
        return "Draw!"
    }else if(
        computer === 'Rock' && player==='Scissors'||
        computer === 'Paper' && player==='Rock'||
        computer === 'Scissors' && player==='Paper'
        ){
         return "You loose!"   
        }else{
            return "You win!"
        }
}
