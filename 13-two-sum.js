var twoSum = function(nums, target) {
  
    let hash = [];
    // target = x + y;
    // x = target - y;

    for(let i=0; i < nums.length; i++){
        let temp = target - nums[i];
        if(hash[temp] !== undefined){
           return [hash[temp], i];
        }
        hash[nums[i]] = i;
    }
    
    return [];
};
twoSum([2,7,11,15], 9);
