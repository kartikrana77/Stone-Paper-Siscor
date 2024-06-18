let scoreStr = localStorage.getItem('score');
        let score;
        resetScore(scoreStr);

        function resetScore(scoreStr){
         score = scoreStr ? JSON.parse(scoreStr):{
            win : 0,
            loss: 0,
            draw: 0,
        };

         score.displayScore =function(){
            return `Win:${score.win} , Loss:${score.loss} , Draw:${score.draw}`;
        };
        showResult();
    }
        function genrateCompChoice(){
            let arr = ['Stone','Paper','Sisor'];
            let randomNo = Math.floor(Math.random()*3);
            return arr[randomNo];
        };

        function getResult(userMove,compMove){
            if(userMove === 'Stone'){
                if(compMove === 'Stone'){
                    score.draw++;
                    return 'Draw';
                }
                else if(compMove === 'Paper'){
                    score.loss++;
                    return 'User Loss';
                }
                else{
                    score.win++;
                    return 'User Win';
                }
            }
            if(userMove === 'Paper'){
                if(compMove === 'Paper'){
                    score.draw++;
                    return 'Draw';
                    
                }
                else if(compMove === 'Sisor'){
                    score.loss++;
                    return 'User Loss';
                    
                }
                else{
                    score.win++;
                    return 'User Win';
                    
                }
            }
            if(userMove === 'Sisor'){
                if(compMove === 'Sisor'){
                    score.draw++;
                    return 'Draw';
                    
                }
                else if(compMove === 'Stone'){
                    score.loss++;
                    return 'User Loss';
                    
                }
                else{
                    score.win++;
                    return 'User Win';
                    
                }
            }
        }
        function showResult(userMove,compMove,result){
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#user-move').innerText = userMove !== undefined ?`User=${userMove}`:userMove = '0';
            document.querySelector('#comp-move').innerText = compMove !== undefined?`Computer=${compMove}`:compMove = '0';
            document.querySelector('#result').innerText = result||'0';
            document.querySelector('#show').innerText = score.displayScore() ;
        }
        
        let b1fun = ()=>{
            let comp = genrateCompChoice();
            let result = getResult('Stone',comp);
            showResult('Stone',comp,result);
        };
        let b2fun = ()=>{
            let comp = genrateCompChoice();
            let result = getResult('Paper',comp);
            showResult('Paper',comp,result);
        };
        let b3fun = ()=>{
            let comp = genrateCompChoice();
            let result = getResult('Sisor',comp);
            showResult('Sisor',comp,result);
        }
        document.querySelector('#b1').addEventListener('click',b1fun);
        document.querySelector('#b2').addEventListener('click',b2fun);
        document.querySelector('#b3').addEventListener('click',b3fun);

        let clearb = ()=>{
            localStorage.clear();
            resetScore();
        }
        document.querySelector('#clear').addEventListener('click',clearb);