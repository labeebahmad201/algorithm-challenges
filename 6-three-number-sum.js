function threeNumberSum(array, targetSum) {

	array.sort((x, y)=>x - y);
	
	let result = [];
	for(let i = 0;   i < array.length; i++){
		let current = array[i];
		let left = i+1;
		let right = array.length - 1;
		let leftEle = array[left];
		let rightEle = array[right];		
		
		while(left < right){
			let sum = current + array[left] + array[right];
			if(sum === targetSum){
				result.push([current, array[left], array[right]]);
				left++;
				right--;
			}else if(sum < targetSum){
				left++;
			}
			else if(sum > targetSum){
				right--;
			}
		}
	}
	
	return result;
}


threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);


