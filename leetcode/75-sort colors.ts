/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {

    let low = 0, mid = 0, high = nums.length - 1;

    while(mid <= high) {
        if(nums[mid] === 0) {
            let temp = nums[low];
            nums[low++] = nums[mid];
            nums[mid] = temp;
            mid++; 
        } else if(nums[mid] === 2) {
            let temp = nums[high];
            nums[high--] = nums[mid];
            nums[mid] = temp;
            // don't include mid++ as we want to re-check the new value 
        } else {
            mid++;
        }
    }

};