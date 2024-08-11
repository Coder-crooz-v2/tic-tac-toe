console.log('Welcome to tic tac toe');
let count = false;
let result = false;
let check = 0;
let player = document.querySelector('.player');
let displayResult = document.querySelector('.result');
let cell = document.querySelectorAll('.container');
let removeClick = false;
let score = document.querySelectorAll('.score');
let player1score = 0;
let player2score = 0;
let wincomb=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

cell.forEach(box =>{
box.innerHTML = '';
box.addEventListener('click', (e)=>{
    if(box.innerText == ''){
    if(!removeClick){
    console.log('Clicked');
    if(count)
    count = false;
    else 
    count = true;
    e.target.innerHTML = turn(count);
    check += 1;
    let boxtext = e.target.textContent;
    if(check >= 5)
    {
        result = checkResult(cell, boxtext, count);
        if(result){
            displayResult.innerHTML = `Game Over !! Player ${count?1:2} is the winner !!`;
            displayResult.classList.remove('dsp');
            removeClick = true;
        }
    }
    if(removeClick || check == 9){
        cell.forEach(box =>{
            box.removeEventListener('click', score);
            box.classList.remove('hover');
            if(box.innerText == '')
            box.classList.add('dsp');
            player.classList.add('dsp');
        })
    }
    if(check == 9 && result == false){
    displayResult.innerHTML = "It is a draw";
    displayResult.classList.remove('dsp');
    player.classList.add('dsp');
    }
    }
}
})
})

function turn(count){
    if(count){
        text = 'X';
        player.innerHTML = "Player 2's turn";
    }
    else{
    text = 'O';
    player.innerHTML = "Player 1's turn";
    }
return text;
}

function checkResult(cell, boxtext, count){
    let temp = 0;
    for(let comb in wincomb){
        for(let i in wincomb[comb]){
            index = wincomb[comb][i];
            if(boxtext == cell[index].textContent && cell[index].textContent != '')
            temp += 1 ;
        }  
        if(temp == 3){
        console.log(true);
        if(count == true){
        player1score += 1;
        score[1].innerHTML = `Player 1: ${player1score}`;
        }
        else {
        player2score += 1;
        score[2].innerHTML = `Player 2: ${player2score}`;
        }
        return true;
        }
        else 
        temp = 0;    
    }
    return false;
}

document.querySelector('.reset').addEventListener('click', ()=>{
    document.querySelectorAll('.container').forEach(box =>{
        box.innerHTML = '';
        box.classList.remove('dsp');
        box.classList.add('hover');
    })
    displayResult.classList.add('dsp');
    player.classList.remove('dsp');
    player.innerHTML='Start game'
    count = false;
    check = 0;
    result = false;
    removeClick = false;
})