function countGood(nums: number[], k: number): number {
    
    const freqMap = new Map<number, number>();
    
    let left = 0;
    let windowPairs = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        const addChar = nums[right];
        const oldCount = freqMap.get(addChar) ?? 0;
        freqMap.set(addChar, oldCount + 1);
        windowPairs += oldCount;
        
        while (windowPairs >= k) {
            count += nums.length - right;
            const removeChar = nums[left];
            const oldCount = freqMap.get(removeChar) ?? 0;
            freqMap.set(removeChar, oldCount - 1);
            windowPairs -= oldCount - 1;
            left++;
        }
    }


    return count;  

};
