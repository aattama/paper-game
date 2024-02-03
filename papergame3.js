

let score = JSON.parse(localStorage.getItem ('score'))
if (score===null) {
    score= {
        wins:0,
        losses:0,
        ties:0
    }
}
udatescoreElement ();


function playGame (palyerMove) {
    const computerMove= pickcomputerMove ()
    let result = '';
    if (palyerMove === 'scissor') {
        if (computerMove==='rock') {
            result = 'You lose.';
        }else if (computerMove === 'paper') {
            result = 'You win.';
        }else if (computerMove === 'scissor'){
            result = 'Tie.'
        }
    }else if (palyerMove === 'paper') {
        let result = '';
if (computerMove==='rock') {
    result = 'You win.';
}else if (computerMove === 'paper') {
    result = 'Tie.';
}else if (computerMove === 'scissor'){
    result = 'You lose.'
}
    }else if (palyerMove === 'rock') {if (computerMove==='rock') {
        result = 'Tie.';
    }else if (computerMove === 'paper') {
        result = 'You lose.';
    }else if (computerMove === 'scissor'){
        result = 'You win.'
    }
}
if (result === 'You win.') {
    score.wins +=1;
}else if (result === 'You lose.') {
    score.losses +=1;
}else if (result === 'Tie.') {
    score. ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));

udatescoreElement ()
document.querySelector ('.js-result').innerHTML = result;

document.querySelector ('.js-move').innerHTML 
=`you
<img src="images/${palyerMove}-emoji.png.png" alt=""
 class="icon">
<img src="images/${computerMove}-emoji.png.png" alt="" 
class="icon">
computer`;
}
function udatescoreElement() {
    document.querySelector ('.js-score').innerHTML=
    `wins:${score.wins},  losses ${score.losses},  ties:${score.ties}`;
    

}


function pickcomputerMove () {
    const randomNumber = Math.random();

    let computerMove= '' ;
    
    if (randomNumber >= 0 && randomNumber < 1/3){
         computerMove='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
const computerMove='paper';
    }else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove='scissor';
    }
return computerMove;
}
