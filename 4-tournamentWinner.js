
function tournamentWinner(competitions, results) {
    let score = [];
    let allTimeWinner = {score:-1};
    
    
    for(let i = 0; i < results.length; i++){
        let winnerTeam;
        if(results[i] === 1){
            if(!score[competitions[i][0]]){
                score[competitions[i][0]] = 0;
            }        
            score[competitions[i][0]] += 3;
            winnerTeam = competitions[i][0];
        }else if(results[i] === 0){
            if(!score[competitions[i][1]]){
                score[competitions[i][1]] = 0;
            }        
            score[competitions[i][1]] += 3; 
            winnerTeam = competitions[i][1];
        }
        if(score[winnerTeam] > allTimeWinner.score ){
            allTimeWinner.score = score[winnerTeam];
            allTimeWinner.name = winnerTeam;
        }
    }
    return allTimeWinner.name;    
}

let competitions = [
      ["HTML", "C#"],
      ["C#", "Python"],
      [ "Python" , "HTML"]
];

let results = [0, 0, 1];
tournamentWinner(competitions, results);

