/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let l = 0; 
    let r = numbers.length - 1;
    
    
    while(l < r){
        let sum = numbers[l] + numbers[r];
        
        if(sum === target){
           return [l+1, r+1];
        }else if( sum > target ){
            // if sum is greater than target
             r--;
         }else if(sum < target){
            // if sum is less that target             
            l++;      
         }
          
    }
    
};

/***
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
**/
