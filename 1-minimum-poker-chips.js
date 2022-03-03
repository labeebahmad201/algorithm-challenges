function getMinimumPokerChips(pokerChipsArr){
    pokerChipsArr.sort((a, b)=>  a > b ? -1 : 1); //nlogn for longer array
    
    let originalTarget = 126;
    let remainingTarget = originalTarget;
    let pokerChipsSelected = [];
    
    let i = 0;
    let sumAccountedSoFar = 0;
    while(i < pokerChipsArr.length){ // O(n)
        if(pokerChipsArr[i] <= remainingTarget){
            let chipsApplicable = parseInt(remainingTarget / pokerChipsArr[i]);
            if(chipsApplicable > 0){
                pokerChipsSelected.push(pokerChipsArr[i]);
                sumAccountedSoFar += pokerChipsArr[i];
                remainingTarget = remainingTarget - pokerChipsArr[i];
            }
        }
        i++;
    }

    return pokerChipsSelected.length > 0 ? pokerChipsSelected : false;
}

// nlogn + n => n(log+1);

let pokerChipsArrGlobal = [100, 50, 25, 10, 5, 1];
console.log('UC 1', getMinimumPokerChips(pokerChipsArrGlobal));

pokerChipsArrGlobal = [100, 100, 100, 50, 25, 10, 5, 1];
console.log('UC 2', getMinimumPokerChips(pokerChipsArrGlobal));

pokerChipsArrGlobal = [];
console.log('UC 3', getMinimumPokerChips(pokerChipsArrGlobal));
