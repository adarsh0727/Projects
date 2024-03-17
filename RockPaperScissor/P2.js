let score = JSON.parse(localStorage.getItem
    ('score')) || {
        Win: 0,
        Lost: 0,
        Tie: 0
    };  //default operator

    // if(!score){
    //     score = {
    //         Win: 0,
    //         Lost: 0,
    //         Tie: 0
    //     }
    // }      
    
    updateScore()
    
    const computerMove = pickComputerMove()
    
    function pickComputerMove(){
        const random = Math.random();
        let computerMove = '';
        if(random >= 0 && random < 0.3){
                computerMove = 'Stone'
        }
        if(random >= 0.3 && random < 0.6){
                computerMove = 'Paper'
        }
        if(random >= 0.6){
                computerMove = 'Scissor'
        }
        return computerMove;
    }

    

    function playGame(userMove){
        const computerMove = pickComputerMove()
        
        
       let result = '';
        if(computerMove === userMove){
            result = 'Tie'
        }
        if(userMove === 'Stone'){
            if(computerMove === 'Scissor'){
                result = 'You Won'
            }else if(computerMove === 'Paper'){
                result = 'You Lose'
            }
        }
        if(userMove === 'Paper'){
            if(computerMove === 'Stone'){
                result = 'You Won'
            }else if(computerMove === 'Scissor'){
                result = 'You Lose'
            }
        }
        if(userMove === 'Scissor'){
            if(computerMove === 'Stone'){
                result = 'You Lose';
            }else if(computerMove === 'Paper'){
                result = 'You Won'
            }
        }

        

        if(result === 'You Won'){
            score.Win += 1;
        }else if(result === 'You Lose'){
            score.Lost += 1;
        }else if(result === 'Tie'){
            score.Tie += 1;
        }
        
        // Local Storage
        localStorage.setItem('score',JSON.stringify(score)) //Only takes strings as input so we need to stringify the result
        
        document.querySelector('.js-result').innerHTML = result;
        
        document.querySelector('.js-moves').innerHTML = `YOU <img src = "./projectImages/${userMove}.png" class = "selectMoves"><img src = "./projectImages/${computerMove}.png" class = "selectMoves">COMPUTER`
        updateScore()


        // alert(`
        // You picked ${userMove} and computer picked ${computerMove} ${result}\n
        // You: ${score.Win} Computer: ${score.Lost} Tie: ${score.Tie}
        // `)


        
    }
    
    function updateScore(){
    document.querySelector('.score')
        .innerHTML = `You: ${score.Win} Computer: ${score.Lost} Tie: ${score.Tie}` 

    }