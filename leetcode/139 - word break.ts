function wordBreak(s: string, wordDict: string[]): boolean {

    const memo = {};

    function dfs(startIndex: number) {
        if(startIndex === s.length) return true; 

        if(startIndex in memo) return memo[startIndex];    
        
        let ans = false;
        for(const word of wordDict) {
            if(s.slice(startIndex).startsWith(word)) {
                if(dfs(startIndex + word.length)) {
                    ans = true;
                    break; // avoid looking into other branches.                    
                }
            }
        }

        // edge case
        // target: aaab
        // dictionary: ['a','aaaa']
        memo[startIndex] = ans; /// this says that by starting at index you will get ans.
        // for example 3: false would mean when starting at index 3, you won't be able to form string, now this is something that can be re-used.
        // similarly 2: true would mean starting at index 2 you can form the string. 
        // This is way of saying that we have tried all variations of 

        return ans;
    }

    return dfs(0);
};