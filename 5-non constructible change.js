
function nonConstructibleChange(coins) {

	coins.sort((x, y)=>x > y ? 1: -1);

	let change = 0;
	for(let i = 0; i < coins.length; i++){
		let current = coins[i];

		if(change + 1 < current){
			return change + 1; // current+1 is what you cannot make. 
		}
		change += current;		
	}
	
	return change + 1;

}

let coins = [1, 1, 1, 1, 1];
nonConstructibleChange(coins);

